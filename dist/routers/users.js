"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users = [
    {
        name: 'john',
        age: 20,
    },
    {
        name: 'doe',
        age: 21,
    },
];
router.get('/', (req, res) => {
    return res.json(users);
});
router.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    return res.json({ message: 'Hello from post!' });
});
exports.default = router;
//# sourceMappingURL=users.js.map