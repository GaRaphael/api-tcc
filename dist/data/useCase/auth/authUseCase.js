"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUseCase = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthUseCase {
    authRepository;
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    async perform(params) {
        try {
            const { email, password } = params;
            const userData = await this.authRepository.auth({
                email,
                password,
            });
            if (!userData) {
                return { error: 'email ou senha inválida' };
            }
            const user = {
                id: userData.user.id,
                email: userData.user.email,
                name: userData.user.name
            };
            const token = jsonwebtoken_1.default.sign({
                user
            }, process.env.TOKEN_SECRET || '', {
                expiresIn: '1d',
            });
            return { token, user };
        }
        catch (error) {
            console.log('error', error);
            return { error: `${error}` };
        }
    }
}
exports.AuthUseCase = AuthUseCase;
//# sourceMappingURL=authUseCase.js.map