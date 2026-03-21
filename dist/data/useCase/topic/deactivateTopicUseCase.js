"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeactivateTopicUseCase = void 0;
class DeactivateTopicUseCase {
    topicRepository;
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }
    async perform(params) {
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
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.DeactivateTopicUseCase = DeactivateTopicUseCase;
//# sourceMappingURL=deactivateTopicUseCase.js.map