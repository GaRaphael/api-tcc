import { AddReactionTopicUseCaseParams, AddReactionTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';

export class AddReactionTopicUseCase {

    constructor(
        private topicRepository: TopicRepository
    ) { }

    async perform(params: AddReactionTopicUseCaseParams): Promise<AddReactionTopicUseCaseResponse> {
        try {
            const topic = await this.topicRepository.getById(params.topic_id);

            if (!topic || !topic.active) {
                return { error: 'Topic not found' };
            }

            const response = await this.topicRepository.addReaction({ ...params });

            if (response) {
                return { data: response };
            }

            return { error: 'Error in add reaction Topic' };
        } catch (error) {
            return { error: `${error}` };
        }
    }
}
