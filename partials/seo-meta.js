"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var react_1 = require("react");
var SeoMeta = function (_a) {
    var _b = _a.description, description = _b === void 0 ? "Portfolio website" : _b, title = _a.title;
    return (<head_1["default"]>
      <title>{title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="description" content={description}/>
      <meta property="og:type" content="website"/>
      <meta name="og:title" property="og:title" content={title}/>
      <meta name="og:description" property="og:description" content={description}/>
      <meta property="og:site_name" content="FrancisAmidu"/>
      <meta property="og:url" content="francisamidu.vercel.app"/>
    </head_1["default"]>);
};
exports["default"] = SeoMeta;
