"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserController = void 0;
const http_status_codes_1 = require("http-status-codes");
class AddUserController {
    addUserUseCase;
    constructor(addUserUseCase) {
        this.addUserUseCase = addUserUseCase;
    }
    async handle(request) {
        try {
            const body = request.body;
            const response = await this.addUserUseCase.perform({
                email: request.body.email,
                name: request.body.name,
                password: request.body.password,
                confirm_password: request.body.password
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
exports.AddUserController = AddUserController;
//# sourceMappingURL=addUserController.js.map