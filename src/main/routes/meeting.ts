import { Router } from 'express';
import {
    AddMeetingController,
} from '../../presentation/controller';

import {
    AddMeetingUseCase,
} from '../../data/useCase';

import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { MeetingRepository } from '../../infra/db';

const router = Router();

const makeAddMeetingController = (): Controller => {

    const meetingRepository = new MeetingRepository();

    const addMeetingUseCase = new AddMeetingUseCase(meetingRepository);
    const addMeetingController = new AddMeetingController(addMeetingUseCase);

    return addMeetingController;
};


router
    .post('/meeting', adaptRoute(makeAddMeetingController()))


export default router;
