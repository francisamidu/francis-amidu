"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var Footer = function () {
    return (<footer className="bg-slate-800 p-1">
      <div className="md:max-w-3xl md:mx-auto flex flex-row items-center justify-between">
        <p className="text-white font-bold">&copy; Francis Amidu</p>
        <div className="flex flex-row items-center">
          <a href="https://github.com/francisamidu" className="mx-2">
            <fa_1.FaGithub className="text-2xl text-gray-200"/>
          </a>
          <a href="https://www.linkedin.com/in/francis-amidu-frontend-developer" className="mx-2">
            <fa_1.FaLinkedin className="text-2xl text-blue-700"/>
          </a>
        </div>
      </div>
    </footer>);
};
exports["default"] = Footer;
