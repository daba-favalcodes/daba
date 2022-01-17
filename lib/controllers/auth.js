"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/repo/user.repo"));

var _error = _interopRequireDefault(require("../util/error"));

var _util = require("../util/util");

var verifyToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token) {
    var _ref2,
        _ref2$repo,
        repo,
        tokenUser,
        userExist,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref2$repo = _ref2.repo, repo = _ref2$repo === void 0 ? new _user["default"]() : _ref2$repo;

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", null);

          case 3:
            tokenUser = (0, _util.decryptToken)(token);

            if (tokenUser) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", null);

          case 6:
            _context.next = 8;
            return repo.byQueryOrNull(tokenUser);

          case 8:
            userExist = _context.sent;

            if (userExist) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", null);

          case 11:
            return _context.abrupt("return", userExist._doc);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = verifyToken;
exports["default"] = _default;