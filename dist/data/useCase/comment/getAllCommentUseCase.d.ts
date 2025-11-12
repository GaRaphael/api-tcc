import { GetAllCommentUseCaseParams, GetAllCommentUseCaseResponse } from '../../domain/comment';
import { CommentRepository } from '../../../infra/db';
export declare class GetAllCommentUseCase {
    private commentRepository;
    constructor(commentRepository: CommentRepository);
    perform(params: GetAllCommentUseCaseParams): Promise<GetAllCommentUseCaseResponse>;
}
