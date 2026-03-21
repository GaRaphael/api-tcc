"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVoteTopicController = void 0;
const http_status_codes_1 = require("http-status-codes");
class UpsertVoteTopicController {
    upsertVoteTopicUseCase;
    constructor(upsertVoteTopicUseCase) {
        this.upsertVoteTopicUseCase = upsertVoteTopicUseCase;
    }
    async handle(request) {
        try {
            const topicId = Number(request.body.topic_id);
            const type = request.body.type;
            const userId = Number(request.user?.user?.id || request.user?.id);
            if (!topicId || !type) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: 'topic_id and type are required' };
            }
            if (!userId) {
                return { statusCode: http_status_codes_1.StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }
            const response = await this.upsertVoteTopicUseCase.perform({
                topic_id: topicId,
                type,
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
exports.UpsertVoteTopicController = UpsertVoteTopicController;
//# sourceMappingURL=upsertVoteTopicController.js.map