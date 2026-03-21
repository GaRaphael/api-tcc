import { AddCommentTopicUseCaseParams, AddCommentTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';

export class AddCommentTopicUseCase {

    constructor(
        private topicRepository: TopicRepository
    ) { }

    async perform(params: AddCommentTopicUseCaseParams): Promise<AddCommentTopicUseCaseResponse> {
        try {
            const topic = await this.topicRepository.getById(params.topic_id);

            if (!topic || !topic.active) {
                return { error: 'Topic not found' };
            }

            const response = await this.topicRepository.addComment({ ...params });

            if (response) {
                return { data: response };
            }

            return { error: 'Error in add comment Topic' };
        } catch (error) {
            return { error: `${error}` };
        }
    }
}
