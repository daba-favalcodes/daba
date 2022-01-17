"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var _bcryptjs = require("bcryptjs");

var userSchema = new _mongoose.Schema({
  email: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  image: {
    type: _mongoose.Schema.Types.String
  },
  name: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  bio: {
    type: _mongoose.Schema.Types.String
  },
  phoneNumber: {
    type: _mongoose.Schema.Types.String
  },
  password: {
    type: _mongoose.Schema.Types.String,
    required: true
  }
});
userSchema.pre('save', /*#__PURE__*/function () {
  var _pre = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(next) {
    var hashedPassword;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (this.isNew) {
              hashedPassword = (0, _bcryptjs.hashSync)(this.password, (0, _bcryptjs.genSaltSync)(5));
              this.password = hashedPassword;
            }

            next();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function pre(_x) {
    return _pre.apply(this, arguments);
  }

  return pre;
}());
var User = (0, _mongoose.model)('user', userSchema);
var _default = User;
exports["default"] = _default;