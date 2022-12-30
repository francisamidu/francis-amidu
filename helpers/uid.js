"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var uid = function () {
    var id = (0, uuid_1.v4)();
    return id;
};
exports["default"] = uid;
