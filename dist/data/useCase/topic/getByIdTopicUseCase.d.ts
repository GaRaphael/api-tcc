import { GetByIdTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';
export declare class GetByIdTopicUseCase {
    private topicRepository;
    constructor(topicRepository: TopicRepository);
    perform(params: {
        id: number;
    }): Promise<GetByIdTopicUseCaseResponse>;
}
