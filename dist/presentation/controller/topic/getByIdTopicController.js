"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdTopicController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetByIdTopicController {
    getByIdTopicUseCase;
    constructor(getByIdTopicUseCase) {
        this.getByIdTopicUseCase = getByIdTopicUseCase;
    }
    async handle(request) {
        try {
            const id = Number(request.params.id);
            if (!id) {
                return { statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST, body: 'Topic id is required' };
            }
            const response = await this.getByIdTopicUseCase.perform({ id });
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
exports.GetByIdTopicController = GetByIdTopicController;
//# sourceMappingURL=getByIdTopicController.js.map