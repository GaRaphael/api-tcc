import { Router } from 'express';
const router = Router();

import userRouter from './user';
import authRouter from './auth';
import NoticeRouter from './notice';
import MeetingRouter from './meeting';

router.get('/healthCheck', (__, res) => {
  res.status(200).send({
    message: 'OK',
    uptime: process.uptime()
  });
});

router.use(userRouter);
router.use(authRouter);
router.use(NoticeRouter);
router.use(MeetingRouter);

export default router;
