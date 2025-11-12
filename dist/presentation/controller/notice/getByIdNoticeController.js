"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdNoticeController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetByIdNoticeController {
    getByIdNoticeUseCase;
    constructor(getByIdNoticeUseCase) {
        this.getByIdNoticeUseCase = getByIdNoticeUseCase;
    }
    async handle(request) {
        try {
            const response = await this.getByIdNoticeUseCase.perform({
                id: Number(request.params.id)
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
exports.GetByIdNoticeController = GetByIdNoticeController;
//# sourceMappingURL=getByIdNoticeController.js.map