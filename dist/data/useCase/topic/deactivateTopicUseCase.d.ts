import { DeactivateTopicUseCaseParams, DeactivateTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';
export declare class DeactivateTopicUseCase {
    private topicRepository;
    constructor(topicRepository: TopicRepository);
    perform(params: DeactivateTopicUseCaseParams): Promise<DeactivateTopicUseCaseResponse>;
}
