"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeactivateTopicController = void 0;
const http_status_codes_1 = require("http-status-codes");
class DeactivateTopicController {
    deactivateTopicUseCase;
    constructor(deactivateTopicUseCase) {
        this.deactivateTopicUseCase = deactivateTopicUseCase;
    }
    async handle(request) {
        try {
            const id = Number(request.params.id);
            const userId = Number(request.user?.user?.id || request.user?.id);
            if (!id) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: 'Topic id is required' };
            }
            if (!userId) {
                return { statusCode: http_status_codes_1.StatusCodes.UNAUTHORIZED, body: 'User not authenticated' };
            }
            const response = await this.deactivateTopicUseCase.perform({
                id,
                user_id: userId
            });
            if (response.error) {
                const statusCode = response.error === 'User is not the owner of this topic'
                    ? http_status_codes_1.StatusCodes.FORBIDDEN
                    : http_status_codes_1.StatusCodes.BAD_REQUEST;
                return { statusCode, body: response.error };
            }
            return { statusCode: http_status_codes_1.StatusCodes.OK, body: response.data };
        }
        catch (error) {
            return { statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
exports.DeactivateTopicController = DeactivateTopicController;
//# sourceMappingURL=deactivateTopicController.js.map