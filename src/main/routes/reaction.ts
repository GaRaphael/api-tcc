import { Router } from 'express';
import { AddReactionController } from '../../presentation/controller/reaction/addReactionController';
import { AddReactionUseCase } from '../../data/useCase/reaction/addReactionUseCase';

import { GetAllReactionController } from '../../presentation/controller/reaction/getAllReactionController';
import { GetAllReactionUseCase } from '../../data/useCase/reaction/getAllReactionUseCase';

import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { ReactionRepository } from '../../infra/db/reaction/reactionRepository';

const router = Router()


const makeAddReactionController = (): Controller => {
    const reactionRepository = new ReactionRepository();

    const addReactionUseCase = new AddReactionUseCase(reactionRepository);
    const addReactionController = new AddReactionController(addReactionUseCase);

    return addReactionController;
};

const makeGetAllReactionsController = (): Controller => {
    const reactionRepository = new ReactionRepository();

    const getAllReactionsUseCase = new GetAllReactionUseCase(reactionRepository);
    const getAllReactionsController = new GetAllReactionController(getAllReactionsUseCase);

    return getAllReactionsController;
}



router
    .post('/reaction', adaptRoute(makeAddReactionController()))
    .get('/reaction/:notice_id', adaptRoute(makeGetAllReactionsController()));

export default router;
