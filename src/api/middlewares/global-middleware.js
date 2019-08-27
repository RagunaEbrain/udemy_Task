import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import passport from 'passport';
import cors from 'cors';

import swaggerDocument from '../../config/swagger.json';
import { configureJWTStrategy } from './passport-jwt';



export const setGlobalMiddleware = app => {
app.use(express.json()); //To register a middleware here it will parse the req.body
app.use(express.urlencoded({ extended: true })); // it will parse the req.param
app.use(logger('dev'));
app.use(passport.initialize({ userProperty: 'currentUser' }));
app.use(cors());
configureJWTStrategy();
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
);
}