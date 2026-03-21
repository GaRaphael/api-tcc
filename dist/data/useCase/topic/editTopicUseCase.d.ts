import { EditTopicUseCaseParams, EditTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';
export declare class EditTopicUseCase {
    private topicRepository;
    constructor(topicRepository: TopicRepository);
    perform(params: EditTopicUseCaseParams): Promise<EditTopicUseCaseResponse>;
}
