import { Router } from 'express';
import {
    AddCommentController,
    GetAllCommentController,
} from '../../presentation/controller/comment';

import {
    AddCommentUseCase,
    GetAllCommentUseCase,
} from '../../data/useCase/comment';

import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { CommentRepository } from '../../infra/db';
import  auth  from '../../main/middlewares/auth';

const router = Router();

const makeAddCommentController = (): Controller => {

    const commentRepository = new CommentRepository();

    const addCommentUseCase = new AddCommentUseCase(commentRepository);
    const addCommentController = new AddCommentController(addCommentUseCase);

    return addCommentController;
};


const makeGetAllCommentController = (): Controller => {

    const commentRepository = new CommentRepository();

    const getAllCommentUseCase = new GetAllCommentUseCase(commentRepository);
    const getAllCommentController = new GetAllCommentController(getAllCommentUseCase);

    return getAllCommentController;
};




router
    .post('/comment', auth, adaptRoute(makeAddCommentController()))
    .get('/comment/all/:meeting_id', adaptRoute(makeGetAllCommentController()))

export default router;
