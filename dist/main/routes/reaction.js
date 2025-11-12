"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addReactionController_1 = require("../../presentation/controller/reaction/addReactionController");
const addReactionUseCase_1 = require("../../data/useCase/reaction/addReactionUseCase");
const getAllReactionController_1 = require("../../presentation/controller/reaction/getAllReactionController");
const getAllReactionUseCase_1 = require("../../data/useCase/reaction/getAllReactionUseCase");
const expressRouteAdapter_1 = require("../adapter/expressRouteAdapter");
const reactionRepository_1 = require("../../infra/db/reaction/reactionRepository");
const router = (0, express_1.Router)();
const makeAddReactionController = () => {
    const reactionRepository = new reactionRepository_1.ReactionRepository();
    const addReactionUseCase = new addReactionUseCase_1.AddReactionUseCase(reactionRepository);
    const addReactionController = new addReactionController_1.AddReactionController(addReactionUseCase);
    return addReactionController;
};
const makeGetAllReactionsController = () => {
    const reactionRepository = new reactionRepository_1.ReactionRepository();
    const getAllReactionsUseCase = new getAllReactionUseCase_1.GetAllReactionUseCase(reactionRepository);
    const getAllReactionsController = new getAllReactionController_1.GetAllReactionController(getAllReactionsUseCase);
    return getAllReactionsController;
};
router
    .post('/reaction', (0, expressRouteAdapter_1.adaptRoute)(makeAddReactionController()))
    .get('/reaction/:notice_id', (0, expressRouteAdapter_1.adaptRoute)(makeGetAllReactionsController()));
exports.default = router;
//# sourceMappingURL=reaction.js.map