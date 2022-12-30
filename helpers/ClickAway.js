"use strict";
exports.__esModule = true;
var clickAway = function (content, toggle) {
    if (process.browser) {
        document.addEventListener("mousedown", function (e) {
            var _a, _b, _c, _d, _e;
            if ((toggle === null || toggle === void 0 ? void 0 : toggle.current) && ((_a = toggle === null || toggle === void 0 ? void 0 : toggle.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                (_b = content === null || content === void 0 ? void 0 : content.current) === null || _b === void 0 ? void 0 : _b.classList.toggle("active");
            }
            else if ((content === null || content === void 0 ? void 0 : content.current) && !((_c = content === null || content === void 0 ? void 0 : content.current) === null || _c === void 0 ? void 0 : _c.contains(e.target))) {
                (_d = content === null || content === void 0 ? void 0 : content.current) === null || _d === void 0 ? void 0 : _d.classList.toggle("active");
                (_e = content === null || content === void 0 ? void 0 : content.current) === null || _e === void 0 ? void 0 : _e.classList.remove("active");
            }
        });
    }
};
exports["default"] = clickAway;
