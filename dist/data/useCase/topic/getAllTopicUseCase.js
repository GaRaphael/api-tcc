"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTopicUseCase = void 0;
class GetAllTopicUseCase {
    topicRepository;
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }
    async perform() {
        try {
            const response = await this.topicRepository.getAllActive();
            if (response) {
                return { data: response };
            }
            return { error: 'Error in get all Topic' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.GetAllTopicUseCase = GetAllTopicUseCase;
//# sourceMappingURL=getAllTopicUseCase.js.map