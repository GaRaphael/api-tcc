"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommentTopicUseCase = void 0;
class AddCommentTopicUseCase {
    topicRepository;
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }
    async perform(params) {
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
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.AddCommentTopicUseCase = AddCommentTopicUseCase;
//# sourceMappingURL=addCommentTopicUseCase.js.map