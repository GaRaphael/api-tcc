import { GetAllCommentUseCaseParams, GetAllCommentUseCaseResponse } from '../../domain/comment';
import { CommentRepository } from '../../../infra/db';

export class GetAllCommentUseCase {

    constructor(
        private commentRepository: CommentRepository
    ) { }

    async perform(params: GetAllCommentUseCaseParams): Promise<GetAllCommentUseCaseResponse> {

        try {

            const response = await this.commentRepository.getAll({ ...params })

            if (response) {
                return { data: response };
            }

            return { error: 'Error in GetAll Comment' };

        } catch (error) {
            return { error: `${error}` };
        }
    }
}
