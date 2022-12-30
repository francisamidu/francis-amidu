"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var helpers_1 = require("../helpers");
var Nav = function () {
    var _a = (0, react_1.useState)([
        {
            active: true,
            id: (0, helpers_1.uid)(),
            name: "home",
            path: "#home"
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            name: "work",
            path: "#work"
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            name: "about",
            path: "#about"
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            name: "technologies",
            path: "#technologies"
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            name: "interests",
            path: "#interests"
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            name: "resume",
            path: "#resume"
        },
        {
            active: false,
            id: (0, helpers_1.uid)(),
            name: "contact",
            path: "#contact"
        },
    ]), links = _a[0], setLinks = _a[1];
    var setLink = function (id) {
        var newLinks = links.map(function (link) {
            if (link.id === id) {
                return __assign(__assign({}, link), { active: true });
            }
            return __assign(__assign({}, link), { active: false });
        });
        setLinks(newLinks);
    };
    return (<nav className="bg-slate-800 md:p-4 px-1 py-4 z-10 shadow fixed top-1 left-0 w-full">
      <div className="flex justify-center items-center md:max-w-lg md:mx-auto">
        {links.map(function (link, index) { return (<link_1["default"] onClick={function () { return setLink(link.id); }} href={link.path} key={index} data-replace={link.name} className={" ".concat(link.active
                ? "nav-link-active"
                : "nav-link-inactive text-gray-100", "               \n            font-medium mx-2  text-xs uppercase nav-link")}>
            <span>{link.name}</span>
          </link_1["default"]>); })}
      </div>
    </nav>);
};
exports["default"] = Nav;
