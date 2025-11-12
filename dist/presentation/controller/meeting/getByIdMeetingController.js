"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdMeetingController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetByIdMeetingController {
    GetByIdMeetingUseCase;
    constructor(GetByIdMeetingUseCase) {
        this.GetByIdMeetingUseCase = GetByIdMeetingUseCase;
    }
    async handle(request) {
        try {
            const id = request.params.id;
            const response = await this.GetByIdMeetingUseCase.perform({ id: Number(id) });
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
exports.GetByIdMeetingController = GetByIdMeetingController;
//# sourceMappingURL=getByIdMeetingController.js.map