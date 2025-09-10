import { checkPassword } from "../../../main/utils/auth";
import { PrismaHelper } from "../helpers";

const { prisma } = PrismaHelper;
export class AuthRepository {
  public async auth(params: { email: string, password: string }): Promise<any> {
    const { email, password } = params;
    const { user: UserRepository } = prisma;

    const user = await UserRepository.findFirst({
      where: {
        email
      }
    })

    if (user) {

      const validPassword = await checkPassword(password, user.password);
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
