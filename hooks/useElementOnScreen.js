"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useElementOnScreen = function (options) {
    var containerRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setIsVisible = _a[1];
    var callbackFunction = function (entries) {
        var entry = entries[0];
        setIsVisible(entry.isIntersecting);
    };
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current)
            observer.observe(containerRef === null || containerRef === void 0 ? void 0 : containerRef.current);
        return function () {
            if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current)
                observer.unobserve(containerRef === null || containerRef === void 0 ? void 0 : containerRef.current);
        };
    }, [containerRef, options]);
    return [containerRef, isVisible];
};
exports["default"] = useElementOnScreen;
