"use strict";
let number = [1, 2, 3];
let user = [14, "hitika"];
user.push(1);
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
let mysize = size.medium;
console.log(mysize);
let mytize = "m";
console.log(mytize);
//# sourceMappingURL=array.js.map