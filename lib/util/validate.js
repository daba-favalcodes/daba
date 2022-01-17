"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _joi = _interopRequireDefault(require("joi"));

var _error = _interopRequireDefault(require("./error"));

var validateNewUserInput = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(input) {
    var schema, _schema$validate, error, value;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            schema = _joi["default"].object({
              name: _joi["default"].string().trim().required(),
              password: _joi["default"].string().trim().alphanum().min(8).required(),
              email: _joi["default"].string().trim().email().required(),
              bio: _joi["default"].string().trim().optional(),
              phoneNumber: _joi["default"].string().trim().optional()
            });
            _schema$validate = schema.validate(input), error = _schema$validate.error, value = _schema$validate.value;

            if (!error) {
              _context.next = 4;
              break;
            }

            throw error;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validateNewUserInput(_x) {
    return _ref.apply(this, arguments);
  };
}();

var validateUserLoginInput = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(input) {
    var schema, _schema$validate2, error, value;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            schema = _joi["default"].object({
              password: _joi["default"].string().trim().alphanum().min(8).required(),
              email: _joi["default"].string().trim().email().required()
            });
            _schema$validate2 = schema.validate(input), error = _schema$validate2.error, value = _schema$validate2.value;

            if (!error) {
              _context2.next = 4;
              break;
            }

            throw error;

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function validateUserLoginInput(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  validateNewUserInput: validateNewUserInput,
  validateUserLoginInput: validateUserLoginInput
};