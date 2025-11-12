"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../presentation/controller");
const useCase_1 = require("../../data/useCase");
const expressRouteAdapter_1 = require("../adapter/expressRouteAdapter");
const infra_1 = require("../../infra");
const router = (0, express_1.Router)();
// dependency injection factory Controller
const makeAuthController = () => {
    const authRepository = new infra_1.AuthRepository();
    const authUseCase = new useCase_1.AuthUseCase(authRepository);
    const authController = new controller_1.AuthController(authUseCase);
    return authController;
};
router
    .post('/auth', (0, expressRouteAdapter_1.adaptRoute)(makeAuthController()));
exports.default = router;
//# sourceMappingURL=auth.js.map