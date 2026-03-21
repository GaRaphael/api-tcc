import { Router } from 'express';
import auth from '../middlewares/auth';
import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import {
    AddTopicController,
    EditTopicController,
    DeactivateTopicController,
    AddReactionTopicController,
    AddCommentTopicController,
    UpsertVoteTopicController,
    GetAllTopicController,
    GetByIdTopicController
} from '../../presentation/controller/topic';
import {
    AddTopicUseCase,
    EditTopicUseCase,
    DeactivateTopicUseCase,
    AddReactionTopicUseCase,
    AddCommentTopicUseCase,
    UpsertVoteTopicUseCase,
    GetAllTopicUseCase,
    GetByIdTopicUseCase
} from '../../data/useCase/topic';
import { TopicRepository } from '../../infra/db/topic/topicRepository';

const router = Router();

const makeAddTopicController = (): Controller => {
    const topicRepository = new TopicRepository();
    const useCase = new AddTopicUseCase(topicRepository);

    return new AddTopicController(useCase);
};

const makeEditTopicController = (): Controller => {
    const topicRepository = new TopicRepository();
    const useCase = new EditTopicUseCase(topicRepository);

    return new EditTopicController(useCase);
};

const makeDeactivateTopicController = (): Controller => {
    const topicRepository = new TopicRepository();
    const useCase = new DeactivateTopicUseCase(topicRepository);

    return new DeactivateTopicController(useCase);
};

const makeAddReactionTopicController = (): Controller => {
    const topicRepository = new TopicRepository();
    const useCase = new AddReactionTopicUseCase(topicRepository);

    return new AddReactionTopicController(useCase);
};

const makeAddCommentTopicController = (): Controller => {
    const topicRepository = new TopicRepository();
    const useCase = new AddCommentTopicUseCase(topicRepository);

    return new AddCommentTopicController(useCase);
};

const makeUpsertVoteTopicController = (): Controller => {
    const topicRepository = new TopicRepository();
    const useCase = new UpsertVoteTopicUseCase(topicRepository);

    return new UpsertVoteTopicController(useCase);
};

const makeGetAllTopicController = (): Controller => {
    const topicRepository = new TopicRepository();
    const useCase = new GetAllTopicUseCase(topicRepository);

    return new GetAllTopicController(useCase);
};

const makeGetByIdTopicController = (): Controller => {
    const topicRepository = new TopicRepository();
    const useCase = new GetByIdTopicUseCase(topicRepository);

    return new GetByIdTopicController(useCase);
};

router
    .post('/topic', auth, adaptRoute(makeAddTopicController()))
    .patch('/topic/:id', auth, adaptRoute(makeEditTopicController()))
    .delete('/topic/:id', auth, adaptRoute(makeDeactivateTopicController()))
    .post('/topic/reaction', auth, adaptRoute(makeAddReactionTopicController()))
    .post('/topic/comment', auth, adaptRoute(makeAddCommentTopicController()))
    .post('/topic/vote', auth, adaptRoute(makeUpsertVoteTopicController()))
    .get('/topics', auth, adaptRoute(makeGetAllTopicController()))
    .get('/topics/:id', auth, adaptRoute(makeGetByIdTopicController()));

export default router;
