"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("../controllers/user");

var resolvers = {
  Mutation: {
    createUser: function createUser(_, args) {
      return (0, _user.createNewUser)(args);
    },
    loginUser: function loginUser(_, args) {
      return (0, _user.userLogin)(args);
    },
    updateProfile: function updateProfile(_, args, context) {
      return (0, _user.userUpdateProfile)(args, context);
    }
  },
  Query: {
    getProfile: function getProfile(_, args, context) {
      return context.user;
    }
  }
};
var _default = resolvers;
exports["default"] = _default;