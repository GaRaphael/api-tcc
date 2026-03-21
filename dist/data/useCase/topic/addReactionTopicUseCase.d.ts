import { AddReactionTopicUseCaseParams, AddReactionTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';
export declare class AddReactionTopicUseCase {
    private topicRepository;
    constructor(topicRepository: TopicRepository);
    perform(params: AddReactionTopicUseCaseParams): Promise<AddReactionTopicUseCaseResponse>;
}
