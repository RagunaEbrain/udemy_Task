import mongoose from 'mongoose';

const { Schema } = mongoose;
const InvoiceSchema = new Schema({
  item: {
    type: String,
  },
  qty: {
    type: Number,
  },
  date: {
    type: Date
  },
});
export default mongoose.model('Invoice', InvoiceSchema);