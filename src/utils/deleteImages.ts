import { s3 } from "./s3Client";
import { urlData } from "./uploadImages";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { AWS_BUCKET_NAME } from "@/config/constants";

export const deleteImage = async (images: any[]) => {
  try {
    for (const image of images) {
      const command = new DeleteObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: image.name,
      });
      await s3.send(command);
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
