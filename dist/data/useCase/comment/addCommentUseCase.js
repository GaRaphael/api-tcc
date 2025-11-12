"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommentUseCase = void 0;
class AddCommentUseCase {
    commentRepository;
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async perform(params) {
        try {
            const response = await this.commentRepository.add({ ...params });
            if (response) {
                return { status: 'Comentário feito com sucesso!' };
            }
            return { error: 'Error in add Comment' };
        }
        catch (error) {
            console.log('error', error);
            return { error: `${error}` };
        }
    }
}
exports.AddCommentUseCase = AddCommentUseCase;
//# sourceMappingURL=addCommentUseCase.js.map