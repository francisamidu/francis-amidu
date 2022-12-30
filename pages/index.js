"use strict";
exports.__esModule = true;
var react_1 = require("react");
var components_1 = require("../components");
var seo_meta_1 = require("../partials/seo-meta");
var Home = function () {
    var _a = (0, react_1.useState)("0%"), scrollPosition = _a[0], setScrollPosition = _a[1];
    var _b = (0, react_1.useState)(true), showLoader = _b[0], setShowLoader = _b[1];
    var _c = (0, react_1.useState)("This is Francis Amidu's Portfolio"), description = _c[0], _ = _c[1];
    var _d = (0, react_1.useState)("Loading adventure...."), title = _d[0], setTitle = _d[1];
    (0, react_1.useEffect)(function () {
        window.addEventListener("scroll", progressBar);
        setTimeout(function () {
            setTitle("Francis Amidu - Full-Stack Javascript Engineeer");
            setShowLoader(false);
        }, 5000);
        return function () {
            window.removeEventListener("scroll", progressBar);
        };
    }, []);
    var progressBar = function () {
        var scrollTotal = document.documentElement.scrollTop;
        var heightWin = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        var scroll = "".concat((scrollTotal / heightWin) * 100, "%");
        setScrollPosition(scroll);
    };
    return (<>
      <seo_meta_1["default"] title={title} description={description}/>
      <components_1.ProgressBar width={scrollPosition}/>
      {showLoader ? (<components_1.Loader />) : (<>
          <components_1.Nav />
          <components_1.Header />
          <components_1.Work />
          <components_1.About />
          <components_1.Technologies />
          <components_1.Interests />
          <components_1.Resume />
          <components_1.Contact />
          <components_1.Footer />
        </>)}
    </>);
};
exports["default"] = Home;
