"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var createJwt = function createJwt(detail) {
  var jwtToken = _jsonwebtoken["default"].sign(detail, process.env.JWT_SECRET);

  return jwtToken;
};

var validatePassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(text, hashedPassword) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _bcryptjs.compareSync)(text, hashedPassword));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validatePassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var decryptToken = function decryptToken(token) {
  var user = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);

  return user;
};

module.exports = {
  createJwt: createJwt,
  validatePassword: validatePassword,
  decryptToken: decryptToken
};