"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMeetingController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetAllMeetingController {
    GetAllMeetingUseCase;
    constructor(GetAllMeetingUseCase) {
        this.GetAllMeetingUseCase = GetAllMeetingUseCase;
    }
    async handle() {
        try {
            const response = await this.GetAllMeetingUseCase.perform();
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
exports.GetAllMeetingController = GetAllMeetingController;
//# sourceMappingURL=getAllMeetingController.js.map