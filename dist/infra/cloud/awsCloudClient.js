"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCloudClient = void 0;
const crypto_1 = require("crypto");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
class AwsCloudClient {
    s3 = new client_s3_1.S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });
    async uploadFile(data) {
        const file = data.file;
        const bufferFile = Buffer.from(file, "base64");
        const params = {
            Key: data.filename,
            Bucket: data.destination,
            Body: bufferFile,
            ContentEncoding: data.contentEncoding,
            ContentType: data.contentType,
            UploadId: (0, crypto_1.randomUUID)(),
        };
        const uploadCommand = new client_s3_1.PutObjectCommand({ ACL: "public-read", ...params });
        await this.s3.send(uploadCommand);
        const publicUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
        return { url: publicUrl };
    }
    async getFileUrl(data) {
        const params = {
            Bucket: data.origin,
            Key: data.filename,
            Expires: 3600,
            ResponseContentType: data.responseContentType,
        };
        const url = await (0, s3_request_presigner_1.getSignedUrl)(this.s3, new client_s3_1.GetObjectCommand(params));
        return { url };
    }
}
exports.AwsCloudClient = AwsCloudClient;
//# sourceMappingURL=awsCloudClient.js.map