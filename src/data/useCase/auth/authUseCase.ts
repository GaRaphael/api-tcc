import { AuthRepository } from '../../../infra/db/auth/authRepository';
import jwt from 'jsonwebtoken';

export class AuthUseCase {

  constructor(
    private authRepository: AuthRepository,
  ) { }

  async perform(params: {cpf: string, password: string}): Promise<{ token?: string, error?: string }> {


    try {
      const { cpf, password} = params;

      // AUTH USER 
      const user = await this.authRepository.auth({
        cpf,
        password,
      });

      if (!user) {
        return { error: 'Cpf ou senha inválida' };
      }

      const token = jwt.sign({
        ...user.user,
      }, process.env.TOKEN_SECRET || '', {
        expiresIn: '1d',
      });

      return { token };

    } catch (error) {
      console.log('error', error)
      return { error: `${error}` };
    }
  }
}

