"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bi_1 = require("react-icons/bi");
var Button = function (_a) {
    var link = _a.link, text = _a.text;
    return (<button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:opacity-80 text-sm font-medium rounded-md text-white border-none hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 duration-200 transition-all">
      <a href={link} className="px-8 py-2 flex flex-row items-center text-white">
        <bi_1.BiLayout className="text-2xl text-white mr-2"/>
        {text}
      </a>
    </button>);
};
exports["default"] = Button;
