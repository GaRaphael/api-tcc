import { ResetPasswordUseCaseParams, ResetPasswordUseCaseResponse } from '../../domain';
import { UserRepository } from '../../../infra/db/';
export declare class ResetPasswordUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    perform(params: ResetPasswordUseCaseParams): Promise<ResetPasswordUseCaseResponse>;
}
