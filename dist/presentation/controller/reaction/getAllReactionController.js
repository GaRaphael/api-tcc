"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllReactionController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetAllReactionController {
    GetAllReactionUseCase;
    constructor(GetAllReactionUseCase) {
        this.GetAllReactionUseCase = GetAllReactionUseCase;
    }
    async handle(request) {
        try {
            const response = await this.GetAllReactionUseCase.perform({
                notice_id: Number(request.params.notice_id)
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
exports.GetAllReactionController = GetAllReactionController;
//# sourceMappingURL=getAllReactionController.js.map