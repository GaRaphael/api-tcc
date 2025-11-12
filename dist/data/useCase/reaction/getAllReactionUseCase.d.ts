import { GetAllReactionUseCaseResponse } from '../../domain/reaction';
import { ReactionRepository } from '../../../infra/db/reaction/reactionRepository';
export declare class GetAllReactionUseCase {
    private ReactionRepository;
    constructor(ReactionRepository: ReactionRepository);
    perform(params: {
        notice_id: number;
    }): Promise<GetAllReactionUseCaseResponse>;
}
