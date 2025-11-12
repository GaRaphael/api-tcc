"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMeetingController = void 0;
const http_status_codes_1 = require("http-status-codes");
class AddMeetingController {
    addMeetingUseCase;
    constructor(addMeetingUseCase) {
        this.addMeetingUseCase = addMeetingUseCase;
    }
    async handle(request) {
        try {
            const body = request.body;
            const { image } = request.body;
            let processedImage = null;
            if (image && image.base64) {
                const buffer = Buffer.from(image.base64, 'base64');
                processedImage = {
                    buffer: buffer,
                    originalname: image.originalname,
                    mimetype: image.mimetype,
                    size: buffer.length
                };
            }
            const response = await this.addMeetingUseCase.perform({
                date: new Date(body.date),
                description: body.description,
                subject: body.subject,
                title: body.title,
                image: processedImage,
                location: body.location
            });
            if (response.error) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: response.error };
            }
            return { statusCode: http_status_codes_1.StatusCodes.OK, body: response.data };
        }
        catch (error) {
            return { statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
exports.AddMeetingController = AddMeetingController;
//# sourceMappingURL=addMeetingController.js.map