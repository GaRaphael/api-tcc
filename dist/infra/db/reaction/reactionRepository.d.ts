import { AddReactionRepositoryParams, AddReactionRepositoryResponse, GetAllReactionRepositoryResponse } from '../../../data/domain/reaction';
export declare class ReactionRepository {
    add(params: AddReactionRepositoryParams): Promise<AddReactionRepositoryResponse>;
    getAll(params: {
        notice_id: number;
    }): Promise<GetAllReactionRepositoryResponse>;
}
