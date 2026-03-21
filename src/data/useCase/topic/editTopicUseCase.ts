import { EditTopicUseCaseParams, EditTopicUseCaseResponse } from '../../domain/topic';
import { TopicRepository } from '../../../infra/db/topic/topicRepository';

export class EditTopicUseCase {

    constructor(
        private topicRepository: TopicRepository
    ) { }

    async perform(params: EditTopicUseCaseParams): Promise<EditTopicUseCaseResponse> {
        try {
            const topic = await this.topicRepository.getById(params.id);

            if (!topic || !topic.active) {
                return { error: 'Topic not found' };
            }

            if (topic.user_id !== params.user_id) {
                return { error: 'User is not the owner of this topic' };
            }

            const response = await this.topicRepository.edit({
                id: params.id,
                title: params.title,
                description: params.description
            });

            if (response) {
                return { data: response };
            }

            return { error: 'Error in edit Topic' };
        } catch (error) {
            return { error: `${error}` };
        }
    }
}
