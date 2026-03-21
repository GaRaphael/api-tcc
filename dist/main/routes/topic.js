"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../middlewares/auth"));
const expressRouteAdapter_1 = require("../adapter/expressRouteAdapter");
const topic_1 = require("../../presentation/controller/topic");
const topic_2 = require("../../data/useCase/topic");
const topicRepository_1 = require("../../infra/db/topic/topicRepository");
const router = (0, express_1.Router)();
const makeAddTopicController = () => {
    const topicRepository = new topicRepository_1.TopicRepository();
    const useCase = new topic_2.AddTopicUseCase(topicRepository);
    return new topic_1.AddTopicController(useCase);
};
const makeEditTopicController = () => {
    const topicRepository = new topicRepository_1.TopicRepository();
    const useCase = new topic_2.EditTopicUseCase(topicRepository);
    return new topic_1.EditTopicController(useCase);
};
const makeDeactivateTopicController = () => {
    const topicRepository = new topicRepository_1.TopicRepository();
    const useCase = new topic_2.DeactivateTopicUseCase(topicRepository);
    return new topic_1.DeactivateTopicController(useCase);
};
const makeAddReactionTopicController = () => {
    const topicRepository = new topicRepository_1.TopicRepository();
    const useCase = new topic_2.AddReactionTopicUseCase(topicRepository);
    return new topic_1.AddReactionTopicController(useCase);
};
const makeAddCommentTopicController = () => {
    const topicRepository = new topicRepository_1.TopicRepository();
    const useCase = new topic_2.AddCommentTopicUseCase(topicRepository);
    return new topic_1.AddCommentTopicController(useCase);
};
const makeUpsertVoteTopicController = () => {
    const topicRepository = new topicRepository_1.TopicRepository();
    const useCase = new topic_2.UpsertVoteTopicUseCase(topicRepository);
    return new topic_1.UpsertVoteTopicController(useCase);
};
const makeGetAllTopicController = () => {
    const topicRepository = new topicRepository_1.TopicRepository();
    const useCase = new topic_2.GetAllTopicUseCase(topicRepository);
    return new topic_1.GetAllTopicController(useCase);
};
const makeGetByIdTopicController = () => {
    const topicRepository = new topicRepository_1.TopicRepository();
    const useCase = new topic_2.GetByIdTopicUseCase(topicRepository);
    return new topic_1.GetByIdTopicController(useCase);
};
router
    .post('/topic', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeAddTopicController()))
    .patch('/topic/:id', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeEditTopicController()))
    .delete('/topic/:id', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeDeactivateTopicController()))
    .post('/topic/reaction', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeAddReactionTopicController()))
    .post('/topic/comment', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeAddCommentTopicController()))
    .post('/topic/vote', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeUpsertVoteTopicController()))
    .get('/topics', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeGetAllTopicController()))
    .get('/topics/:id', auth_1.default, (0, expressRouteAdapter_1.adaptRoute)(makeGetByIdTopicController()));
exports.default = router;
//# sourceMappingURL=topic.js.map