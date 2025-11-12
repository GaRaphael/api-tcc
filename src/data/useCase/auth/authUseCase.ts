import { AuthRepository } from '../../../infra/db/auth/authRepository';
import jwt from 'jsonwebtoken';

export class AuthUseCase {

  constructor(
    private authRepository: AuthRepository,
  ) { }

  async perform(params: { email: string, password: string }): Promise<{ token?: string, user?: any, error?: string }> {


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
      }

      const token = jwt.sign({
        user
      }, process.env.TOKEN_SECRET || '', {
        expiresIn: '1d',
      })

      return { token, user };

    } catch (error) {
      console.log('error', error)
      return { error: `${error}` };
    }
  }
}

