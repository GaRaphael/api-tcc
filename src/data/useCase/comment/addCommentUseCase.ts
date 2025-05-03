import { AddCommentUseCaseParams, AddCommentUseCaseResponse} from '../../domain/comment';
import { CommentRepository } from '../../../infra/db';

export class AddCommentUseCase {

  constructor(
    private commentRepository: CommentRepository
  ) { }

  async perform(params: AddCommentUseCaseParams): Promise<AddCommentUseCaseResponse> {

    try {

      const response = await this.commentRepository.add({ ...params })

      if (response) {
        return { status: 'Comentário feito com sucesso!' }
      }

      return { error: 'Error in add Comment' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
