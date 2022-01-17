"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServerExpress = require("apollo-server-express");

var _express = _interopRequireDefault(require("express"));

var _schema = _interopRequireDefault(require("./schema"));

var _resolver = _interopRequireDefault(require("./resolver"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _auth = _interopRequireDefault(require("./controllers/auth"));

_dotenv["default"].config();

function startServer() {
  return _startServer.apply(this, arguments);
}

function _startServer() {
  _startServer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var app, server;
    return _regenerator["default"].wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            app = (0, _express["default"])();
            server = new _apolloServerExpress.ApolloServer({
              typeDefs: _schema["default"],
              resolvers: _resolver["default"],
              context: function () {
                var _context = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
                  var req, token, user;
                  return _regenerator["default"].wrap(function _callee$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          req = _ref.req;
                          token = req.headers.authorization || "";
                          _context2.next = 4;
                          return (0, _auth["default"])(token);

                        case 4:
                          user = _context2.sent;
                          return _context2.abrupt("return", {
                            user: user
                          });

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee);
                }));

                function context(_x) {
                  return _context.apply(this, arguments);
                }

                return context;
              }()
            });
            _context3.next = 4;
            return server.start();

          case 4:
            server.applyMiddleware({
              app: app
            });

            _mongoose["default"].connect(process.env.MONGO_URL, {
              useNewUrlParser: true
            });

            app.listen({
              port: process.env.PORT || 8080
            }, function () {
              console.log("server exposed at ".concat(process.env.PORT));
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));
  return _startServer.apply(this, arguments);
}

var _default = startServer;
exports["default"] = _default;