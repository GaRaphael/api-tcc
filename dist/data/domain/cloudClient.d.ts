export type CloudUploadParams = {
    file: Buffer | Uint8Array | Blob | string | ReadableStream;
    destination: string;
    filename: string;
    contentEncoding?: string;
    contentType: string;
};
export type CloudGetUrlParams = {
    origin: string;
    filename: string;
    responseContentType?: string;
    region?: string;
};
export type CloudGetUrlResponse = {
    error?: object | null | undefined;
    url?: string | null | undefined;
};
export interface CloudClient {
    uploadFile: (data: CloudUploadParams) => Promise<CloudGetUrlResponse>;
    getFileUrl: (data: CloudGetUrlParams) => Promise<CloudGetUrlResponse>;
}
