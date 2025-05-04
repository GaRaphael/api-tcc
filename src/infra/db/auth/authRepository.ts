import { checkPassword } from "../../../main/utils/auth";
import { formarterUniqueUser } from "./helper";
import { PrismaHelper } from "../helpers";

const { prisma } = PrismaHelper;
export class AuthRepository {
  public async auth(params: { cpf: string, password: string }): Promise<any> {
    const { cpf, password } = params;
    const { user: UserRepository } = prisma;

    const user = await UserRepository.findFirst({
      where: {
        cpf
      }
    })

    if (user) {
      const validPassword = await checkPassword(password, user.password);

      if (validPassword) {

        const formatUser = formarterUniqueUser(user);

        return {
          user: formatUser
        };
      }
    }

    return null;
  }

}
