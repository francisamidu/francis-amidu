"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var io_1 = require("react-icons/io");
var WorkItem = function (_a) {
    var id = _a.id, code = _a.code, color = _a.color, description = _a.description, image = _a.image, name = _a.name, tags = _a.tags, web = _a.web;
    return (<div className="flex flex-row w-full md:w-[650px] mx-2 hover:shadow bg-slate-900 p-4 my-2 rounded-md relative">
      <div className="rotate flex flex-row items-center justify-center">
        {tags.map(function (tag, index) { return (<span key={index} className="text-slate-500 font-bold uppercase text-xs">
            {tag}
            {tags.length - index > 1 ? "-" : ""}
          </span>); })}
      </div>
      <image_1["default"] alt="work-item" src={image} width="275" height="400" className="ml-5 rounded-2xl md:order-2"/>
      <div className="ml-0 md:ml-5 my-2 p-3 flex flex-col md:order-1">
        <h2 className="font-bold text-2xl text-white my-1 overflow-hidden">
          {name}
        </h2>
        <p className=" text-gray-300">{description}</p>
        <a href={web} className="my-2 py-1 border-b-2" style={{
            color: color,
            borderBottomColor: color
        }}>
          Visit Website
        </a>
        <a href={code} className="w-fit">
          <io_1.IoLogoGithub className="text-3xl text-gray-300"/>
        </a>
      </div>
    </div>);
};
exports["default"] = WorkItem;
