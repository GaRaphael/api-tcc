"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = auth;
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = require("jsonwebtoken");
function auth(req, res, next) {
    const headerToken = req.headers.authorization;
    const token = headerToken?.replace('Bearer ', '');
    const secret = process.env.TOKEN_SECRET || '';
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    if (headerToken) {
        try {
            const user = (0, jsonwebtoken_1.verify)(token ?? '', secret);
            req.user = user;
            req.headers.ip = ip;
            next();
        }
        catch (error) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ error: 'Invalid Token Bearer' });
        }
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ error: 'Bearer Token Not Found' });
    }
}
//# sourceMappingURL=auth.js.map