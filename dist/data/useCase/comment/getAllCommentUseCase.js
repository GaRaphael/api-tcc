"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCommentUseCase = void 0;
class GetAllCommentUseCase {
    commentRepository;
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async perform(params) {
        try {
            const response = await this.commentRepository.getAll({ ...params });
            if (response) {
                return { data: response };
            }
            return { error: 'Error in GetAll Comment' };
        }
        catch (error) {
            return { error: `${error}` };
        }
    }
}
exports.GetAllCommentUseCase = GetAllCommentUseCase;
//# sourceMappingURL=getAllCommentUseCase.js.map