import { randomUUID } from "crypto";
import { CloudClient, CloudUploadParams, CloudGetUrlParams, CloudGetUrlResponse } from "../../data/domain/cloudClient";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class AwsCloudClient implements CloudClient {
    readonly s3 = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        },
    });

    async uploadFile(data: CloudUploadParams): Promise<CloudGetUrlResponse> {
        const file = data.file as string;
        const bufferFile = Buffer.from(file, "base64");

        const params = {
            Key: data.filename,
            Bucket: data.destination,
            Body: bufferFile,
            ContentEncoding: data.contentEncoding!,
            ContentType: data.contentType,
            UploadId: randomUUID(),
        };

        const uploadCommand = new PutObjectCommand({ ACL: "public-read", ...params });
        await this.s3.send(uploadCommand);

        const publicUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;

        return { url: publicUrl };
    }

    async getFileUrl(data: CloudGetUrlParams): Promise<CloudGetUrlResponse> {
        const params = {
            Bucket: data.origin,
            Key: data.filename,
            Expires: 3600,
            ResponseContentType: data.responseContentType,
        };

        const url = await getSignedUrl(this.s3 as any, new GetObjectCommand(params));

        return { url };
    }
}
