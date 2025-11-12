"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_1 = __importDefault(require("./user"));
const auth_1 = __importDefault(require("./auth"));
const notice_1 = __importDefault(require("./notice"));
const meeting_1 = __importDefault(require("./meeting"));
const comment_1 = __importDefault(require("./comment"));
const reaction_1 = __importDefault(require("./reaction"));
router.get('/healthCheck', (__, res) => {
    res.status(200).send({
        message: 'OK',
        uptime: process.uptime()
    });
});
router.use(user_1.default);
router.use(auth_1.default);
router.use(notice_1.default);
router.use(meeting_1.default);
router.use(comment_1.default);
router.use(reaction_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map