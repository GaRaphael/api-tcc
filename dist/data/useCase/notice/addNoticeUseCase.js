"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNoticeUseCase = void 0;
const crypto_1 = require("crypto");
class AddNoticeUseCase {
    noticeRepository;
    cloudClient;
    constructor(noticeRepository, cloudClient) {
        this.noticeRepository = noticeRepository;
        this.cloudClient = cloudClient;
    }
    async perform(params) {
        try {
            const bucket = process.env.AWS_BUCKET;
            const file = params.image;
            if (!file || !file.buffer || !file.mimetype) {
                return { error: 'Arquivo de imagem inválido.' };
            }
            const fileBase64 = file.buffer.toString('base64');
            const filecontentType = file.mimetype.split('/')[1] === 'pdf'
                ? 'application/pdf'
                : file.mimetype.split('/')[1];
            const filename = `image/${(0, crypto_1.randomUUID)()}.${file.mimetype.split('/')[1]}`;
            const paramsUpload = {
                file: fileBase64,
                destination: `${bucket}`,
                filename,
                contentType: filecontentType
            };
            const up_picture = await this.cloudClient.uploadFile(paramsUpload);
            const response = await this.noticeRepository.add({ ...params, image: up_picture.url });
            if (response) {
                return { data: response };
            }
            return { error: 'Error in add Notice' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.AddNoticeUseCase = AddNoticeUseCase;
//# sourceMappingURL=addNoticeUseCase.js.map