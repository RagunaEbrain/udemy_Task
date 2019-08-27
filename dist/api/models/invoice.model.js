'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  date: {
    type: Date
  }
});
exports.default = _mongoose2.default.model('Invoice', InvoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2ludm9pY2UubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJJbnZvaWNlU2NoZW1hIiwiaXRlbSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInF0eSIsIk51bWJlciIsImRhdGUiLCJEYXRlIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7SUFFUUEsTSxHQUFXQyxrQixDQUFYRCxNOztBQUNSLElBQU1FLGdCQUFnQixJQUFJRixNQUFKLENBQVc7QUFDL0JHLFFBQU07QUFDSkMsVUFBTUMsTUFERjtBQUVKQyxjQUFVO0FBRk4sR0FEeUI7QUFLL0JDLE9BQUs7QUFDSEgsVUFBTUksTUFESDtBQUVIRixjQUFVO0FBRlAsR0FMMEI7QUFTL0JHLFFBQU07QUFDSkwsVUFBTU07QUFERjtBQVR5QixDQUFYLENBQXRCO2tCQWFlVCxtQkFBU1UsS0FBVCxDQUFlLFNBQWYsRUFBMEJULGFBQTFCLEMiLCJmaWxlIjoiaW52b2ljZS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcbmNvbnN0IEludm9pY2VTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBpdGVtOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHF0eToge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnSW52b2ljZScsIEludm9pY2VTY2hlbWEpOyJdfQ==