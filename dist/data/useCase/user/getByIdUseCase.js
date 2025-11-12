"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserUseCase = void 0;
const auth_1 = require("../../../main/utils/auth");
class AddUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async perform(params) {
        try {
            const alreadyUser = await this.userRepository.verifyExists({ email: params.email });
            const cryptPassword = await (0, auth_1.generatePassword)(params.password);
            const response = await this.userRepository.add({ ...params, password: cryptPassword });
            if (response) {
                return { data: response };
            }
            return { error: 'Error in add User Repository' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.AddUserUseCase = AddUserUseCase;
//# sourceMappingURL=getByIdUseCase.js.map