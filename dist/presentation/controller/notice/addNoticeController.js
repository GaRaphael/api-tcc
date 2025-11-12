"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNoticeController = void 0;
const http_status_codes_1 = require("http-status-codes");
class AddNoticeController {
    addNoticeUseCase;
    constructor(addNoticeUseCase) {
        this.addNoticeUseCase = addNoticeUseCase;
    }
    async handle(request) {
        try {
            const { title, description, image } = request.body;
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
            const response = await this.addNoticeUseCase.perform({
                title,
                description,
                image: processedImage
            });
            if (response.error) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: response.error };
            }
            return { statusCode: http_status_codes_1.StatusCodes.CREATED, body: response.data };
        }
        catch (error) {
            console.error("Erro no controller ao adicionar notícia:", error);
            return { statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, body: { message: 'Erro interno do servidor' } };
        }
    }
}
exports.AddNoticeController = AddNoticeController;
//# sourceMappingURL=addNoticeController.js.map