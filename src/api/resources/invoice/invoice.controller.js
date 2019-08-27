import Joi from 'joi'; // validator
import HttpStatus from 'http-status-codes';
import Invoice from './invoice.model';

export default {

  findAll(req, res, next) {
    Invoice.find(function(err, result) {
      if (err) {
        console.log('no data');
      } else {
        res.send(result);
      }
    });
  },

  create(req, res) {
        const schema = Joi.object().keys({
        item: Joi.string().optional(),
        date: Joi.date().optional(),
        qty: Joi.number()
          .integer()
          .optional(),
        });
  const { error, value } = Joi.validate(req.body, schema);

        if (error && error.details) {
          return res.status(HttpStatus.BAD_REQUEST).json(error);
        }

        Invoice.create(value)
       .then(data => res.json(data))
       .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
      },

      findOne(req, res) {
        const { id } = req.params;
        Invoice.findById(id)
          .then(data => {
            if (!data) {
              return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not find any invoice' });
            }
            return res.json(data);
          })
          .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
      },

      delete(req, res) {
        const { id } = req.params;
        Invoice.findByIdAndRemove(id)
          .then(data => {
            if (!data) {
              return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not delete any invoice' });
            }
            return res.json(data);
          })
          .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
      },

      update(req, res) {
        const { id } = req.params;
        Invoice.findOneAndUpdate(
          req.params.id,
          {
            $set: { item: req.body.item,date: req.body.date,qty: req.body.qty}
          },
          {
            new: true
          },
          function(err, updatedBlog) {
            if (err) {
              res.send('Error updating blog');
            } else {
              res.json(updatedBlog);
            }
          }
        );
      },

}

