import { PrismaHelper } from '../helpers';
import { checkPassword } from '../../../main/utils/auth';

const { prisma } = PrismaHelper;
export class AuthRepository {

    public async auth(): Promise<any> {
        const { user: UserModel } = prisma;

    }
}