import { AddUserUseCaseParams, AddUserUseCaseResponse } from '../../domain';
import { UserRepository } from '../../../infra/db';
export declare class AddUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    perform(params: AddUserUseCaseParams): Promise<AddUserUseCaseResponse>;
}
