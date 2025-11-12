"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_codes_1 = require("http-status-codes");
class AuthController {
    authUseCase;
    constructor(authUseCase) {
        this.authUseCase = authUseCase;
    }
    async handle(request) {
        try {
            const { email, password } = request.body;
            const response = await this.authUseCase.perform({
                email,
                password
            });
            return { statusCode: http_status_codes_1.StatusCodes.OK, body: response };
        }
        catch (error) {
            return { statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }
}
exports.AuthController = AuthController;
exports.default = AuthController;
//# sourceMappingURL=authController.js.map