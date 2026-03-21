"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTopicController = void 0;
const http_status_codes_1 = require("http-status-codes");
class AddTopicController {
    addTopicUseCase;
    constructor(addTopicUseCase) {
        this.addTopicUseCase = addTopicUseCase;
    }
    async handle(request) {
        try {
            const title = request.body.title;
            const description = request.body.description;
            const userId = Number(request.user?.user?.id || request.user?.id);
            if (!title || !description) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: 'title and description are required' };
            }
            if (!userId) {
                return { statusCode: http_status_codes_1.StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }
            const response = await this.addTopicUseCase.perform({
                title,
                description,
                user_id: userId
            });
            if (response.error) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: response.error };
            }
            return { statusCode: http_status_codes_1.StatusCodes.CREATED, body: response.data };
        }
        catch (error) {
            return { statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
exports.AddTopicController = AddTopicController;
//# sourceMappingURL=addTopicController.js.map