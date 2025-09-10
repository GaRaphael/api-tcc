import { PrismaHelper } from '../helpers';
import {
    AddUserRepositoryParams,
    AddUserRepositoryResponse,
    FindUserExistsParams,
    ResetPasswordRepositoryParams
} from '../../../data/domain';

const { prisma } = PrismaHelper;
export class UserRepository {

    public async add(params: AddUserRepositoryParams): Promise<AddUserRepositoryResponse> {
        const {
            email,
            name,
            password,
        } = params;

        const { user: UserModel } = prisma;


        const user = await UserModel.create({
            data: {
                email,
                name,
                password
            },

        });

        return user
    }

    public async verifyExists(params: FindUserExistsParams): Promise<any> {

        const { user: UserModel } = prisma;

        const user = await UserModel.findFirst({
            where: {
                email: params.email,
            },
        });

        return { exists: !!user };
    }

    public async reset(params: ResetPasswordRepositoryParams): Promise<AddUserRepositoryResponse> {

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

    public async getById(id: number): Promise<AddUserRepositoryResponse> {
        const { user: UserModel } = prisma;

        const user = await UserModel.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user
    }
}