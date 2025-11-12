import { AuthRepository } from '../../../infra/db/auth/authRepository';
export declare class AuthUseCase {
    private authRepository;
    constructor(authRepository: AuthRepository);
    perform(params: {
        email: string;
        password: string;
    }): Promise<{
        token?: string;
        user?: any;
        error?: string;
    }>;
}
