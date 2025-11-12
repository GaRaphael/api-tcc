"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReactionController = void 0;
const http_status_codes_1 = require("http-status-codes");
class AddReactionController {
    addReactionUseCase;
    constructor(addReactionUseCase) {
        this.addReactionUseCase = addReactionUseCase;
    }
    async handle(request) {
        try {
            const response = await this.addReactionUseCase.perform({
                notice_id: Number(request.body.notice_id),
                type: request.body.type,
                user_id: Number(request.body.user_id)
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
exports.AddReactionController = AddReactionController;
//# sourceMappingURL=addReactionController.js.map