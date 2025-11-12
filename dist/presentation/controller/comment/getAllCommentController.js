"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCommentController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetAllCommentController {
    GetAllCommentUseCase;
    constructor(GetAllCommentUseCase) {
        this.GetAllCommentUseCase = GetAllCommentUseCase;
    }
    async handle(request) {
        try {
            const response = await this.GetAllCommentUseCase.perform({ meeting_id: Number(request.params.meeting_id) });
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
exports.GetAllCommentController = GetAllCommentController;
//# sourceMappingURL=getAllCommentController.js.map