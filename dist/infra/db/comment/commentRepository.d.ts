import { AddCommentRepositoryParams, GetAllCommentRepositoryParams, GetAllCommentRepositoryResponse } from '../../../data/domain';
export declare class CommentRepository {
    add(params: AddCommentRepositoryParams): Promise<any>;
    getAll(params: GetAllCommentRepositoryParams): Promise<GetAllCommentRepositoryResponse[]>;
}
