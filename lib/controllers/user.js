"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/repo/user.repo"));

var _error = _interopRequireDefault(require("../util/error"));

var _util = require("../util/util");

var _validate = require("../util/validate");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var createNewUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userInput,
        _ref3,
        _ref3$repo,
        repo,
        userExist,
        newUser,
        token,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userInput = _ref.userInput;
            _ref3 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref3$repo = _ref3.repo, repo = _ref3$repo === void 0 ? new _user["default"]() : _ref3$repo;
            _context.next = 4;
            return (0, _validate.validateNewUserInput)(userInput);

          case 4:
            _context.next = 6;
            return repo.byQueryOrNull({
              $or: [{
                email: userInput.email
              }, {
                name: userInput.name.toLowerCase()
              }]
            });

          case 6:
            userExist = _context.sent;

            if (!userExist) {
              _context.next = 9;
              break;
            }

            throw new _error["default"]("name or email taken", "USER_INPUT_ERROR");

          case 9:
            _context.next = 11;
            return repo.create(userInput);

          case 11:
            newUser = _context.sent;
            token = (0, _util.createJwt)({
              email: newUser.email
            });
            return _context.abrupt("return", _objectSpread(_objectSpread({}, newUser._doc), {}, {
              token: token
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNewUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var userLogin = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref4) {
    var loginInput,
        _ref6,
        _ref6$repo,
        repo,
        userExist,
        token,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            loginInput = _ref4.loginInput;
            _ref6 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, _ref6$repo = _ref6.repo, repo = _ref6$repo === void 0 ? new _user["default"]() : _ref6$repo;
            _context2.next = 4;
            return (0, _validate.validateUserLoginInput)(loginInput);

          case 4:
            _context2.next = 6;
            return repo.byQueryOrNull({
              email: loginInput.email
            }, "+password");

          case 6:
            userExist = _context2.sent;

            if (userExist) {
              _context2.next = 9;
              break;
            }

            throw new _error["default"]("invalid email or password", "USER_INPUT_ERROR");

          case 9:
            _context2.next = 11;
            return (0, _util.validatePassword)(loginInput.password, userExist.password);

          case 11:
            if (_context2.sent) {
              _context2.next = 13;
              break;
            }

            throw new _error["default"]("invalid email or password", "USER_INPUT_ERROR");

          case 13:
            token = (0, _util.createJwt)({
              email: userExist.email
            });
            return _context2.abrupt("return", _objectSpread(_objectSpread({}, userExist._doc), {}, {
              token: token
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function userLogin(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

var userUpdateProfile = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref7, currentUser) {
    var updateInput,
        _ref9,
        _ref9$repo,
        repo,
        user,
        userExist,
        updatedInput,
        _args3 = arguments;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            updateInput = _ref7.updateInput;
            _ref9 = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {}, _ref9$repo = _ref9.repo, repo = _ref9$repo === void 0 ? new _user["default"]() : _ref9$repo;

            if (currentUser.user) {
              _context3.next = 4;
              break;
            }

            throw new _error["default"]("Not authorized to access this resource", "USER_AUTHORIZATION_ERROR");

          case 4:
            _context3.next = 6;
            return repo.byId(currentUser.user._id);

          case 6:
            user = _context3.sent;

            if (!(updateInput.name || updateInput.email)) {
              _context3.next = 13;
              break;
            }

            _context3.next = 10;
            return repo.byQueryOrNull({
              $or: [{
                email: updateInput.email
              }, {
                name: updateInput.name.toLowerCase()
              }]
            });

          case 10:
            userExist = _context3.sent;

            if (!(userExist && userExist._id.toString() !== user._id.toString())) {
              _context3.next = 13;
              break;
            }

            throw new _error["default"]("name or email taken", "USER_INPUT_ERROR");

          case 13:
            updatedInput = {};
            updatedInput.bio = updateInput.bio || user.bio || "";
            updatedInput.image = updateInput.image || user.image || "";
            updatedInput.phoneNumber = updateInput.phoneNumber || user.phoneNumber || "";
            updatedInput.email = updateInput.email || user.email || "";
            updatedInput.address = updateInput.address || user.address || "";
            updatedInput.name = updateInput.name || user.name || "";
            _context3.next = 22;
            return repo.update({
              _id: user._id
            }, updatedInput);

          case 22:
            user = _context3.sent;
            return _context3.abrupt("return", user);

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function userUpdateProfile(_x3, _x4) {
    return _ref8.apply(this, arguments);
  };
}();

module.exports = (0, _defineProperty2["default"])({
  createNewUser: createNewUser,
  userLogin: userLogin,
  userUpdateProfile: userUpdateProfile
}, "userUpdateProfile", userUpdateProfile);