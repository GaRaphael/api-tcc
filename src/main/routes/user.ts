import { Router } from 'express';
import {
    AddUserController,
    ResetPasswordController
} from '../../presentation/controller/user';
import {
    AddUserUseCase,
    ResetPasswordUseCase
} from '../../data/useCase/user';

import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { UserRepository } from '../../infra/db';

const router = Router();

const makeAddUserController = (): Controller => {

    const userRepository = new UserRepository();

    const addUserUseCase = new AddUserUseCase(userRepository);
    const addUserController = new AddUserController(addUserUseCase);

    return addUserController;
};

const makeResetPassController = (): Controller => {
  const userRepository = new UserRepository();

  const resetPasswordUseCase = new ResetPasswordUseCase(userRepository);
  const resetPasswordController = new ResetPasswordController(resetPasswordUseCase);

  return resetPasswordController;
}  




router
    .post('/user', adaptRoute(makeAddUserController()))
    .put('/reset', adaptRoute(makeResetPassController()))
//   .get('/user/:id', adaptRoute(makeFindByIdUserController()))


export default router;
