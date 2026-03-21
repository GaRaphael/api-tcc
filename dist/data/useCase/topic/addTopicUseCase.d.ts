import { AddTopicUseCaseParams, AddTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';
export declare class AddTopicUseCase {
    private topicRepository;
    constructor(topicRepository: TopicRepository);
    perform(params: AddTopicUseCaseParams): Promise<AddTopicUseCaseResponse>;
}
