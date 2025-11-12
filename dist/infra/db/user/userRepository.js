"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const helpers_1 = require("../helpers");
const { prisma } = helpers_1.PrismaHelper;
class UserRepository {
    async add(params) {
        const { email, name, password, } = params;
        const { user: UserModel } = prisma;
        const user = await UserModel.create({
            data: {
                email,
                name,
                password
            },
        });
        return user;
    }
    async verifyExists(params) {
        const { user: UserModel } = prisma;
        const user = await UserModel.findFirst({
            where: {
                email: params.email,
            },
        });
        return { exists: !!user };
    }
    async reset(params) {
        const { user: UserModel } = prisma;
        const get_user_id = await UserModel.findFirst({
            where: {
                email: params.email
            },
            select: {
                id: true
            }
        });
        if (!get_user_id) {
            throw new Error('User not found');
        }
        const update_pass = await UserModel.update({
            where: {
                id: get_user_id.id
            },
            data: {
                password: params.new_password
            }
        });
        return update_pass;
    }
    async getById(id) {
        const { user: UserModel } = prisma;
        const user = await UserModel.findUnique({
            where: {
                id
            }
        });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map