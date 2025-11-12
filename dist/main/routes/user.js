"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../../presentation/controller/user");
const user_2 = require("../../data/useCase/user");
const expressRouteAdapter_1 = require("../adapter/expressRouteAdapter");
const db_1 = require("../../infra/db");
const router = (0, express_1.Router)();
const makeAddUserController = () => {
    const userRepository = new db_1.UserRepository();
    const addUserUseCase = new user_2.AddUserUseCase(userRepository);
    const addUserController = new user_1.AddUserController(addUserUseCase);
    return addUserController;
};
const makeResetPassController = () => {
    const userRepository = new db_1.UserRepository();
    const resetPasswordUseCase = new user_2.ResetPasswordUseCase(userRepository);
    const resetPasswordController = new user_1.ResetPasswordController(resetPasswordUseCase);
    return resetPasswordController;
};
router
    .post('/user', (0, expressRouteAdapter_1.adaptRoute)(makeAddUserController()))
    .put('/reset', (0, expressRouteAdapter_1.adaptRoute)(makeResetPassController()));
//   .get('/user/:id', adaptRoute(makeFindByIdUserController()))
exports.default = router;
//# sourceMappingURL=user.js.map