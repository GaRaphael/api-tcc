import { AddUserRepositoryParams, AddUserRepositoryResponse, FindUserExistsParams, ResetPasswordRepositoryParams } from '../../../data/domain';
export declare class UserRepository {
    add(params: AddUserRepositoryParams): Promise<AddUserRepositoryResponse>;
    verifyExists(params: FindUserExistsParams): Promise<any>;
    reset(params: ResetPasswordRepositoryParams): Promise<AddUserRepositoryResponse>;
    getById(id: number): Promise<AddUserRepositoryResponse>;
}
