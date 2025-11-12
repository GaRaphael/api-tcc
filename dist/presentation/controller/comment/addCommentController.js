"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommentController = void 0;
const http_status_codes_1 = require("http-status-codes");
class AddCommentController {
    addCommentUseCase;
    constructor(addCommentUseCase) {
        this.addCommentUseCase = addCommentUseCase;
    }
    async handle(request) {
        try {
            const response = await this.addCommentUseCase.perform({
                description: request.body.description,
                user_id: Number(request.body.user_id),
                meeting_id: Number(request.body.meeting_id)
            });
            if (response.error) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: response.error };
            }
            return { statusCode: http_status_codes_1.StatusCodes.OK, body: response };
        }
        catch (error) {
            return { statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
exports.AddCommentController = AddCommentController;
//# sourceMappingURL=addCommentController.js.map