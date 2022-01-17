"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

var schemaDefs = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    input createUserInput {\n        email: String\n        image: String\n        name: String\n        bio: String\n        phoneNumber: String\n        password: String!\n    }\n\n    input loginUserInput {\n        email: String!\n        password: String!\n    }\n\n    input updateProfileInput {\n        email: String\n        image: String\n        name: String\n        bio: String\n        phoneNumber: String\n        password: String\n    }\n\n    type User {\n        _id: String\n        email: String\n        image: String\n        name: String\n        bio: String\n        phoneNumber: String\n        password: String\n        token: String\n    }\n\n    type Query{\n        getProfile: User\n    }\n\n    type Mutation{\n        createUser(userInput: createUserInput): User\n        loginUser(loginInput: loginUserInput ): User\n        updateProfile(updateInput: updateProfileInput): User\n    }\n"])));
var _default = schemaDefs;
exports["default"] = _default;