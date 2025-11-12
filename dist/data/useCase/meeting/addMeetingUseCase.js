"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMeetingUseCase = void 0;
const crypto_1 = require("crypto");
class AddMeetingUseCase {
    meetingRepository;
    cloudClient;
    constructor(meetingRepository, cloudClient) {
        this.meetingRepository = meetingRepository;
        this.cloudClient = cloudClient;
    }
    async perform(params) {
        try {
            console.log('Params received in AddMeetingUseCase:', params);
            const bucket = process.env.AWS_BUCKET;
            const file = params.image;
            if (!file || !file.buffer) {
                return { error: 'Imagem não enviada ou inválida.' };
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
            const response = await this.meetingRepository.add({ ...params, image: up_picture.url });
            if (response) {
                return { data: response };
            }
            return { error: 'Error in add Meeting' };
        }
        catch (error) {
            console.error('Error in AddMeetingUseCase:', error);
            return { error: `${error}` };
        }
    }
}
exports.AddMeetingUseCase = AddMeetingUseCase;
//# sourceMappingURL=addMeetingUseCase.js.map