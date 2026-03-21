import { DeactivateTopicUseCaseParams, DeactivateTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';

export class DeactivateTopicUseCase {

    constructor(
        private topicRepository: TopicRepository
    ) { }

    async perform(params: DeactivateTopicUseCaseParams): Promise<DeactivateTopicUseCaseResponse> {
        try {
            const topic = await this.topicRepository.getById(params.id);

            if (!topic || !topic.active) {
                return { error: 'Topic not found' };
            }

            if (topic.user_id !== params.user_id) {
                return { error: 'User is not the owner of this topic' };
            }

            const response = await this.topicRepository.deactivate(params.id);

            if (response) {
                return { data: response };
            }

            return { error: 'Error in deactivate Topic' };
        } catch (error) {
            return { error: `${error}` };
        }
    }
}
