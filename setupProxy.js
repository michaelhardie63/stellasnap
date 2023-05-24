const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.tripadvisor.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/partner/2.0/location/123456789/reviews',
      },
    })
  );
};