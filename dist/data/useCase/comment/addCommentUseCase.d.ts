import { AddCommentUseCaseParams, AddCommentUseCaseResponse } from '../../domain/comment';
import { CommentRepository } from '../../../infra/db';
export declare class AddCommentUseCase {
    private commentRepository;
    constructor(commentRepository: CommentRepository);
    perform(params: AddCommentUseCaseParams): Promise<AddCommentUseCaseResponse>;
}
