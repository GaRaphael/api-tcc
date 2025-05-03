import { Router } from 'express';
const router = Router();

import userRouter from './user';
import authRouter from './auth';
import NoticeRouter from './notice';

router.get('/healthCheck', (__, res) => {
  res.status(200).send({
    message: 'OK',
    uptime: process.uptime()
  });
});

router.use(userRouter);
router.use(authRouter);
router.use(NoticeRouter);

export default router;
