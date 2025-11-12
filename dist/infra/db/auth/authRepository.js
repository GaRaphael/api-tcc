"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const auth_1 = require("../../../main/utils/auth");
const helpers_1 = require("../helpers");
const { prisma } = helpers_1.PrismaHelper;
class AuthRepository {
    async auth(params) {
        const { email, password } = params;
        const { user: UserRepository } = prisma;
        const user = await UserRepository.findFirst({
            where: {
                email
            }
        });
        if (user) {
            const validPassword = await (0, auth_1.checkPassword)(password, user.password);
            if (validPassword) {
                return {
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                };
            }
        }
        return null;
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=authRepository.js.map