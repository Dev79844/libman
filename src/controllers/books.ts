import db from "@/db";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { uploadImages, urlData } from "@/utils/uploadImages";
import { deleteImage } from "@/utils/deleteImages";

export const addBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      publisher,
      year,
      total_quantity,
      available_quantity,
      isbn,
      late_fee_per_day,
      description,
      language,
      authors,
      genres,
    } = req.body;

    let authorsList = Array.isArray(authors) ? authors : [];
    let genresList = Array.isArray(genres) ? genres : [];

    if (typeof authors === "string") {
      try {
        authorsList = JSON.parse(authors);
      } catch (e) {
        authorsList = [authors]; // If it's a single string, make it an array
      }
    }

    if (typeof genres === "string") {
      try {
        genresList = JSON.parse(genres);
      } catch (e) {
        genresList = [genres]; // If it's a single string, make it an array
      }
    }

    let uploadedImages: urlData[];
    if (req.files) {
      let images: UploadedFile | UploadedFile[];
      images = req.files.images || req.files["images[]"];
      uploadedImages = await uploadImages(images);

      if (uploadImages.length == 0)
        return res
          .status(500)
          .json({ message: "error uploading images to bucket" });
    }

    const existingBook = await db.books.findFirst({
      where: {
        isbn: isbn,
      },
    });

    if (existingBook) {
      return res.status(400).json("book already exists");
    }

    const result = await db.$transaction(async (prisma) => {
      const newBook = await db.books.create({
        data: {
          title,
          publisher,
          year,
          total_quantity: parseInt(total_quantity),
          available_quantity: parseInt(available_quantity),
          isbn,
          late_fee_per_day: parseFloat(late_fee_per_day),
          description,
          language,
          images: {
            create: uploadedImages.map((img) => ({
              name: img.key,
              url: img.url,
            })),
          },
        },
      });

      if (authorsList && authorsList.length > 0) {
        authorsList.map(async (author: string) => {
          const existAuthor = await db.authors.findFirst({
            where: {
              name: {
                contains: author,
              },
            },
          });

          if (existAuthor) {
            await db.book_author.create({
              data: {
                book_id: newBook.id,
                author_id: existAuthor.id,
              },
            });
          } else {
            const newAuthor = await db.authors.create({
              data: {
                name: author,
                biography: "",
              },
            });
            await db.book_author.create({
              data: {
                book_id: newBook.id,
                author_id: newAuthor.id,
              },
            });
          }
        });
      }

      if (genresList && genresList.length > 0) {
        genresList.map(async (genre: string) => {
          const existGenre = await db.genres.findFirst({
            where: {
              name: {
                contains: genre,
              },
            },
          });

          if (existGenre) {
            await db.book_genre.create({
              data: {
                book_id: newBook.id,
                genre_id: existGenre.id,
              },
            });
          } else {
            const newGenre = await db.genres.create({
              data: {
                name: genre,
              },
            });
            await db.book_genre.create({
              data: {
                book_id: newBook.id,
                genre_id: newGenre.id,
              },
            });
          }
        });
      }

      return newBook;
    });

    console.log(result);

    return res.status(200).json("book added successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json("internal server error");
  }
};

export const searchBooks = async (req: Request, res: Response) => {
  try {
    const { query, page = 1, limit = 10 } = req.query;
    const searchQuery = query as string;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    if (!searchQuery) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const skip = (pageNumber - 1) * limitNumber;

    console.log(searchQuery);
    // First, find matching author and genre IDs
    const matchingAuthors = await db.authors.findMany({
      where: {
        name: {
          contains: searchQuery,
        },
      },
      select: {
        id: true,
      },
    });

    console.log("authors", JSON.stringify(matchingAuthors));

    const matchingGenres = await db.genres.findMany({
      where: { name: { contains: searchQuery } },
      select: { id: true },
    });

    console.log("genres", matchingGenres);

    const books = await db.books.findMany({
      where: {
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { publisher: { contains: searchQuery, mode: "insensitive" } },
          { language: { contains: searchQuery, mode: "insensitive" } },
          {
            book_author: {
              some: {
                author_id: { in: matchingAuthors.map((a) => a.id) },
              },
            },
          },
          {
            book_genre: {
              some: {
                genre_id: { in: matchingGenres.map((g) => g.id) },
              },
            },
          },
        ],
      },
      include: {
        book_author: {
          include: {
            authors: true,
          },
        },
        book_genre: {
          include: {
            genres: true,
          },
        },
        images: true,
      },
      skip: skip,
      take: limitNumber,
    });

    const totalCount = await db.books.count({
      where: {
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { publisher: { contains: searchQuery, mode: "insensitive" } },
          { language: { contains: searchQuery, mode: "insensitive" } },
          {
            book_author: {
              some: {
                author_id: { in: matchingAuthors.map((a) => a.id) },
              },
            },
          },
          {
            book_genre: {
              some: {
                genre_id: { in: matchingGenres.map((g) => g.id) },
              },
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(totalCount / limitNumber);

    return res.status(200).json({
      books,
      currentPage: pageNumber,
      totalPages,
      totalCount,
    });
  } catch (error) {
    console.error("Error in searchBooks:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const existing = await db.books.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existing) {
      return res.status(404).json("book not found");
    }

    await db.books.update({
      where: {
        id: parseInt(id),
      },
      data: updateData,
    });

    return res.status(200).json("book updated");
  } catch (error) {
    console.error(error);
    return res.status(500).json("internal server error");
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await db.$transaction(async (prisma) => {
      const book = await prisma.books.findFirst({
        where: {
          id: parseInt(id),
        },
        include: {
          images: true,
        },
      });

      if (book) {
        let status = await deleteImage(book.images);

        if (!status)
          return res.status(500).json({ message: "error deleting the images" });

        await prisma.images.deleteMany({
          where: {
            book_id: parseInt(id),
          },
        });
      }

      const book_authors = await prisma.book_author.findFirst({
        where: {
          book_id: parseInt(id),
        },
      });

      if (book_authors) {
        await prisma.book_author.delete({
          where: {
            id: book_authors.id,
          },
        });
      }

      const book_genre = await prisma.book_genre.findFirst({
        where: {
          book_id: parseInt(id),
        },
      });

      if (book_genre) {
        await prisma.book_genre.delete({
          where: {
            id: book_genre.id,
          },
        });
      }

      await prisma.books.delete({
        where: {
          id: parseInt(id),
        },
      });

      return true;
    });

    return res.status(200).json("book deleted");
  } catch (error) {
    console.error(error);
    return res.status(500).json("internal server error");
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    const totalCount = await db.books.count();

    const books = await db.books.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        publisher: true,
        year: true,
        available_quantity: true,
        total_quantity: true,
        isbn: true,
        language: true,
        images: {
          select: {
            url: true,
          },
        },
        book_author: {
          select: {
            authors: {
              select: {
                name: true,
              },
            },
          },
        },
        book_genre: {
          select: {
            genres: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      skip: skip,
      take: limitNumber,
    });

    const totalPages = Math.ceil(totalCount / limitNumber);
    const hasNextPage = pageNumber < totalPages;
    const hasPreviousPage = pageNumber > 1;

    return res.status(200).json({
      books,
      pagination: {
        currentPage: pageNumber,
        totalPages,
        totalItems: totalCount,
        itemsPerPage: limitNumber,
        hasNextPage,
        hasPreviousPage,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
