"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTopicController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetAllTopicController {
    getAllTopicUseCase;
    constructor(getAllTopicUseCase) {
        this.getAllTopicUseCase = getAllTopicUseCase;
    }
    async handle(_) {
        try {
            const response = await this.getAllTopicUseCase.perform();
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
exports.GetAllTopicController = GetAllTopicController;
//# sourceMappingURL=getAllTopicController.js.map