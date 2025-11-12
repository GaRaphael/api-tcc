"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = exports.checkPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const checkPassword = async (saved, provided) => await bcryptjs_1.default.compare(saved, provided);
exports.checkPassword = checkPassword;
const generatePassword = async (password) => {
    const salt = await bcryptjs_1.default.genSalt(10);
    return await bcryptjs_1.default.hash(password, salt);
};
exports.generatePassword = generatePassword;
//# sourceMappingURL=auth.js.map