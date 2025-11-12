"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const request = {
            body: req.body,
            headers: req.headers,
            params: req.params,
            query: req.query,
            files: req.files,
        };
        const { statusCode, headers, body } = await controller.handle(request);
        if (statusCode >= 200 && statusCode <= 299) {
            if (headers) {
                const headersToFilter = ['Authorization'];
                const headersKeys = Object.keys(headers).filter(key => !headersToFilter.includes(key));
                for (const key of headersKeys) {
                    res.set(key, headers[key]);
                }
                res.set('Access-Control-Expose-Headers', headersKeys.join(', '));
            }
            res.status(statusCode).json(body);
        }
        else {
            res.status(statusCode).json({
                error: body.message || body
            });
        }
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=expressRouteAdapter.js.map