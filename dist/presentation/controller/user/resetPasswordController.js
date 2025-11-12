"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordController = void 0;
const http_status_codes_1 = require("http-status-codes");
class ResetPasswordController {
    resetPasswordUseCase;
    constructor(resetPasswordUseCase) {
        this.resetPasswordUseCase = resetPasswordUseCase;
    }
    async handle(request) {
        try {
            const response = await this.resetPasswordUseCase.perform({ email: request.body.email, new_password: request.body.new_password });
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
exports.ResetPasswordController = ResetPasswordController;
//# sourceMappingURL=resetPasswordController.js.map