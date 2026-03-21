import { GetAllTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';
export declare class GetAllTopicUseCase {
    private topicRepository;
    constructor(topicRepository: TopicRepository);
    perform(): Promise<GetAllTopicUseCaseResponse>;
}
