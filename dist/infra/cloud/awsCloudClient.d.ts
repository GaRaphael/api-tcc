import { CloudClient, CloudUploadParams, CloudGetUrlParams, CloudGetUrlResponse } from "../../data/domain/cloudClient";
import { S3Client } from "@aws-sdk/client-s3";
export declare class AwsCloudClient implements CloudClient {
    readonly s3: S3Client;
    uploadFile(data: CloudUploadParams): Promise<CloudGetUrlResponse>;
    getFileUrl(data: CloudGetUrlParams): Promise<CloudGetUrlResponse>;
}
