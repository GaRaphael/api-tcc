import { AddCommentTopicUseCaseParams, AddCommentTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';
export declare class AddCommentTopicUseCase {
    private topicRepository;
    constructor(topicRepository: TopicRepository);
    perform(params: AddCommentTopicUseCaseParams): Promise<AddCommentTopicUseCaseResponse>;
}
