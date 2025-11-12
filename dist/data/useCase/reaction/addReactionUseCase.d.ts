import { AddReactionUseCaseParams, AddReactionUseCaseResponse } from '../../domain/reaction';
import { ReactionRepository } from '../../../infra/db/reaction/reactionRepository';
export declare class AddReactionUseCase {
    private ReactionRepository;
    constructor(ReactionRepository: ReactionRepository);
    perform(params: AddReactionUseCaseParams): Promise<AddReactionUseCaseResponse>;
}
