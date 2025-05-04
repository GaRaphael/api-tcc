import { Router } from "express";
import { AuthController, ResetPasswordController } from "../../presentation/controller";
import { AuthUseCase} from "../../data/useCase";
import auth from "../middlewares/auth";
import { adaptRoute } from "../adapter/expressRouteAdapter";
import { Controller } from "../../presentation/controller";
import { AuthRepository } from "../../infra";

const router = Router();

// dependency injection factory Controller
const makeAuthController = (): Controller => {
  const authRepository = new AuthRepository();

  const authUseCase = new AuthUseCase(authRepository);
  const authController = new AuthController(authUseCase);

  return authController;
};


router
    .post('/auth', adaptRoute(makeAuthController()))

export default router;