// vue.config.js
module.exports = {
  devServer: {
    host: "demo.datar.com"
  },
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      navigateFallback: "/index.html",
      runtimeCaching: [{
        urlPattern: new RegExp('https://api.datar.online/v1/data'),
        handler: 'networkFirst',
        options: {
          networkTimeoutSeconds: 10,
          cacheName: 'datar-api-cache',
          cacheableResponse: {
            statuses: [200],
          },
        },
      }]
    }
  }
};
