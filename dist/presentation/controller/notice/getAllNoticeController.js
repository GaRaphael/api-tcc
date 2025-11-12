"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllNoticeController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetAllNoticeController {
    GetAllNoticeUseCase;
    constructor(GetAllNoticeUseCase) {
        this.GetAllNoticeUseCase = GetAllNoticeUseCase;
    }
    async handle() {
        try {
            const response = await this.GetAllNoticeUseCase.perform();
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
exports.GetAllNoticeController = GetAllNoticeController;
//# sourceMappingURL=getAllNoticeController.js.map