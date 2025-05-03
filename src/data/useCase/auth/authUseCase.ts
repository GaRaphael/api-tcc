
import { AuthRepository } from '../../../infra/db/auth/authRepository';

export class AuthUseCase {

  constructor(private authRepository: AuthRepository) { }

  async perform(params: AuthUseCaseParams): Promise<any> {

    try {
      const { email, password } = params;

      const user = await this.authRepository.auth({ email, password });

      if (user && !user?.active) {
        return { error: 'Disabled user' };
      }

      if (!user) {
        return { error: 'Invalid email or password' };
      }

      return { data: user };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
