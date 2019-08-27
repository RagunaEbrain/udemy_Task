import express from 'express';
import passport from 'passport';
import invoiceController from './invoice.controller';

export const invoiceRouter = express.Router();

// Invoices
// invoiceRouter.get('/invoice-listing', invoiceController.findAll);
// invoiceRouter.post('/invoice-listing', invoiceController.create);
// invoiceRouter.get('/invoice-listing/:id', invoiceController.findOne);
// invoiceRouter.delete('/invoice-listing/:id', invoiceController.delete);
// invoiceRouter.put('/invoice-listing/:id', invoiceController.update);

invoiceRouter.route('/')
  .post(passport.authenticate('jwt', { session: false }), invoiceController.create)
  .get(passport.authenticate('jwt', { session: false }), invoiceController.findAll);

invoiceRouter
  .route('/:id')
  .put(passport.authenticate('jwt', { session: false }), invoiceController.update)
  .delete(passport.authenticate('jwt', { session: false }), invoiceController.delete)
  .get(passport.authenticate('jwt', { session: false }), invoiceController.findOne);