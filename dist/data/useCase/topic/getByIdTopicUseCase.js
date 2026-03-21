"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdTopicUseCase = void 0;
class GetByIdTopicUseCase {
    topicRepository;
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }
    async perform(params) {
        try {
            const response = await this.topicRepository.getDetailsById(params.id);
            if (response) {
                return { data: response };
            }
            return { error: 'Topic not found' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.GetByIdTopicUseCase = GetByIdTopicUseCase;
//# sourceMappingURL=getByIdTopicUseCase.js.map