const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/api", '/auth/gogle'],
        createProxyMiddleware({
            target: "http://localhost:3000",
        })
    );
};