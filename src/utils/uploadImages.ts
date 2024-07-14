import { s3 } from "./s3Client";
import { UploadedFile } from "express-fileupload";
import crypto from "crypto";
import { AWS_BUCKET_NAME, AWS_REGION } from "@/config/constants";
import fs from "fs";
import { PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";

export type urlData = {
  key: string;
  url: string;
};

export const uploadImages = async (images: UploadedFile | UploadedFile[]) => {
  let urlArr: urlData[] = [];
  try {
    if (Array.isArray(images)) {
      for (const image of images) {
        const name = crypto.randomBytes(10).toString("hex");
        const params: PutObjectCommandInput = {
          Bucket: AWS_BUCKET_NAME,
          Key: name,
          Body: fs.createReadStream(image.tempFilePath),
          ACL: "public-read",
          ContentDisposition: "inline",
          ContentType: image.mimetype,
        };

        const command = new PutObjectCommand(params);
        await s3.send(command);
        const url = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${name}`;
        urlArr.push({ key: name, url: url });
      }
    } else {
      let name = crypto.randomBytes(10).toString("hex");
      const params: PutObjectCommandInput = {
        Bucket: AWS_BUCKET_NAME,
        Key: name,
        Body: fs.createReadStream(images.tempFilePath),
        ACL: "public-read",
        ContentDisposition: "inline",
        ContentType: images.mimetype,
      };

      const command = new PutObjectCommand(params);
      await s3.send(command);
      const url = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${name}`;
      urlArr.push({ key: name, url: url });
    }
    return urlArr;
  } catch (error) {
    console.error(error);
    return [];
  }
};
