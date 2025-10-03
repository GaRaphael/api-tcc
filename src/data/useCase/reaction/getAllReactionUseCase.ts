import { GetAllReactionUseCaseResponse } from '../../domain/reaction';
import { ReactionRepository } from '../../../infra/db/reaction/reactionRepository';


export class GetAllReactionUseCase {

    constructor(
        private ReactionRepository: ReactionRepository
    ) { }

    async perform(params: { notice_id: number }): Promise<GetAllReactionUseCaseResponse> {

        try {

            const response = await this.ReactionRepository.getAll({ notice_id: params.notice_id })

            if (response) {
                return { data: response }
            }

            return { error: 'Error in add Reaction' };

        } catch (error) {
            return { error: `${error}` };
        }
    }
}
