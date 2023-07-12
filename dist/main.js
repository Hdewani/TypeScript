"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routers/users"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use("/user", users_1.default);
app.route('/').get((req, res) => {
    res.send("hello world");
});
function main() {
    app.listen(port, () => {
        console.log(`listening at  ${port}`);
    });
}
main();
//# sourceMappingURL=main.js.map