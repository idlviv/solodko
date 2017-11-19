var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/], // <-- necessary for Firebase OAuth
  stripPrefix: 'public',
  root: 'public/',
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'solodko',
      filename: 'service-worker.js',
      staticFileGlobs: [
        'public/index.html',
        'public/**.js',
        'public/**.css',
      ],
      stripPrefix: 'public/assets/',
      mergeStaticsConfig: true // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
    }),
  ]
};
