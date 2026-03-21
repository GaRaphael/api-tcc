"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommentTopicController = void 0;
const http_status_codes_1 = require("http-status-codes");
class AddCommentTopicController {
    addCommentTopicUseCase;
    constructor(addCommentTopicUseCase) {
        this.addCommentTopicUseCase = addCommentTopicUseCase;
    }
    async handle(request) {
        try {
            const topicId = Number(request.body.topic_id);
            const description = request.body.description;
            const userId = Number(request.user?.user?.id || request.user?.id);
            if (!topicId || !description) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: 'topic_id and description are required' };
            }
            if (!userId) {
                return { statusCode: http_status_codes_1.StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }
            const response = await this.addCommentTopicUseCase.perform({
                topic_id: topicId,
                description,
                user_id: userId
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
exports.AddCommentTopicController = AddCommentTopicController;
//# sourceMappingURL=addCommentTopicController.js.map