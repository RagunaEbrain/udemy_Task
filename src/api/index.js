import express from 'express';
import { invoiceRouter } from './resources/invoice';
import { userRouter } from './resources/user/user.router';


export const restRouter = express.Router();
restRouter.use('/invoice-listing', invoiceRouter);
restRouter.use('/users', userRouter);

