"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_1 = require("../../presentation/controller/comment");
const comment_2 = require("../../data/useCase/comment");
const expressRouteAdapter_1 = require("../adapter/expressRouteAdapter");
const db_1 = require("../../infra/db");
const auth_1 = __importDefault(require("../../main/middlewares/auth"));
const router = (0, express_1.Router)();
const makeAddCommentController = () => {
    const commentRepository = new db_1.CommentRepository();
    const addCommentUseCase = new comment_2.AddCommentUseCase(commentRepository);
    const addCommentController = new comment_1.AddCommentController(addCommentUseCase);
    return addCommentController;
};
const makeGetAllCommentController = () => {
    const commentRepository = new db_1.CommentRepository();
    const getAllCommentUseCase = new comment_2.GetAllCommentUseCase(commentRepository);
    const getAllCommentController = new comment_1.GetAllCommentController(getAllCommentUseCase);
    return getAllCommentController;
};
router
    .post('/comment', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeAddCommentController()))
    .get('/comment/:meeting_id', (0, expressRouteAdapter_1.adaptRoute)(makeGetAllCommentController()));
exports.default = router;
//# sourceMappingURL=comment.js.map