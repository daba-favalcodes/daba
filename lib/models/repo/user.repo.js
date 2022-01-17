"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _user = _interopRequireDefault(require("../user.model"));

var UserRepository = /*#__PURE__*/function () {
  function UserRepository() {
    (0, _classCallCheck2["default"])(this, UserRepository);
  }

  (0, _createClass2["default"])(UserRepository, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(values) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user["default"].create(values);

              case 2:
                user = _context.sent;
                return _context.abrupt("return", user);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "byQueryOrNull",
    value: function () {
      var _byQueryOrNull = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(query, select) {
        var user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _user["default"].findOne(query).select(select);

              case 2:
                user = _context2.sent;
                user = user || null;
                console.log(user);
                return _context2.abrupt("return", user);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function byQueryOrNull(_x2, _x3) {
        return _byQueryOrNull.apply(this, arguments);
      }

      return byQueryOrNull;
    }()
  }, {
    key: "byId",
    value: function () {
      var _byId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _user["default"].findById(id);

              case 2:
                user = _context3.sent;
                user = user || null;
                return _context3.abrupt("return", user);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function byId(_x4) {
        return _byId.apply(this, arguments);
      }

      return byId;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(query, values) {
        var updatedUser;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _user["default"].findOneAndUpdate(query, values);

              case 2:
                updatedUser = _context4.sent;
                return _context4.abrupt("return", updatedUser);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function update(_x5, _x6) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);
  return UserRepository;
}();

var _default = UserRepository;
exports["default"] = _default;