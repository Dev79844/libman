import db from "@/db";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { uploadImages, urlData } from "@/utils/uploadImages";
import { PrismaClient } from "@prisma/client";

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
