"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var Resume = function () {
    return (<section className="bg-slate-800 p-10" id="resume">
      <h1 className="text-gray-400 text-base text-center my-1">
        Full Character Info
      </h1>
      <h3 className="font-bold my-6 text-center text-3xl text-white">Resume</h3>
      <div className="flex flex-col justify-center items-center">
        <link_1["default"] className="my-1 text-gray-300" href="/Francis-Amidu-Frontend-Developer-Cv.pdf">
          Download
        </link_1["default"]>
        <div className="mt-4 flex flex-row items-center justify-center ">
          <image_1["default"] alt="Vacancy" className="w-[500] md:w-auto" src="/curriculum-vitae-portfolio-svgrepo-com.svg" width="600" height="500"/>
        </div>
      </div>
    </section>);
};
exports["default"] = Resume;
