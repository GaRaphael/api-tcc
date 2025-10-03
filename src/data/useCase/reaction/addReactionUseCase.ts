import { AddReactionUseCaseParams, AddReactionUseCaseResponse } from '../../domain/reaction';
import { ReactionRepository } from '../../../infra/db/reaction/reactionRepository';

export class AddReactionUseCase {

    constructor(
        private ReactionRepository: ReactionRepository
    ) { }

    async perform(params: AddReactionUseCaseParams): Promise<AddReactionUseCaseResponse> {

        try {

            const response = await this.ReactionRepository.add({ ...params })

            if (response) {
                return { data: response }
            }

            return { error: 'Error in add Reaction' };

        } catch (error) {
            return { error: `${error}` };
        }
    }
}
