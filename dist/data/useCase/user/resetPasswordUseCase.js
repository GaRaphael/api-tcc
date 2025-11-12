"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordUseCase = void 0;
const auth_1 = require("../../../main/utils/auth");
class ResetPasswordUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async perform(params) {
        try {
            const { email, new_password } = params;
            const cryptpoPassword = await (0, auth_1.generatePassword)(new_password);
            const user = await this.userRepository.reset({
                new_password: cryptpoPassword,
                email
            });
            if (!user)
                return { error: 'User not found' };
            return { data: user };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.ResetPasswordUseCase = ResetPasswordUseCase;
//# sourceMappingURL=resetPasswordUseCase.js.map