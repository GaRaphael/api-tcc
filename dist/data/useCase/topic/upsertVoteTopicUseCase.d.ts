import { UpsertVoteTopicUseCaseParams, UpsertVoteTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';
export declare class UpsertVoteTopicUseCase {
    private topicRepository;
    constructor(topicRepository: TopicRepository);
    perform(params: UpsertVoteTopicUseCaseParams): Promise<UpsertVoteTopicUseCaseResponse>;
}
