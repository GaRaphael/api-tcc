import { Request, Response } from 'express';
import { Controller } from '../../presentation/controller/protocols/controller.protocols';
export declare const adaptRoute: (controller: Controller) => (req: Request, res: Response) => Promise<void>;
