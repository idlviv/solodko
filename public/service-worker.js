/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["../public/0.239af166946daa273891.chunk.js","9c4b0b4ffbee20b1eafaf6a63252ec7a"],["../public/1.1f3f4f6a02bf0469dd9b.chunk.js","5c169f93d1c843abe4a55656b3eeca24"],["../public/2.ac71dc8361663bb91118.chunk.js","5a0fbb4942e40f7377e41dec3304fa2a"],["../public/3.4b5db3aac2f513f124af.chunk.js","fb22d6494ed16fa2919f23fe7a230eca"],["../public/3rdpartylicenses.txt","91677ebeeb067b46878d12434b2c1b87"],["../public/assets/images/composition-flowers_wedding-pion.jpg","f0f6e0eaf178656fc3c47fd19506955b"],["../public/assets/images/composition-sweets_delicacy.jpg","8e3255a228abb980803b798be6a3bf32"],["../public/assets/images/composition-sweets_guitar.jpg","6d61843a8d589b04aba8d711b7ae8cae"],["../public/assets/images/composition-sweets_tank.jpg","31352a691755f0ae76eb2de1e0cb5080"],["../public/assets/images/composition-veg-fr_with-pepper.jpg","fcee2ebff13b807f09d1095ab7f45dfc"],["../public/assets/images/decor_wedding1.jpg","620d14ba6947729c3773c357901c661d"],["../public/assets/images/favicon-original.jpg","13d351fd5dbde8e5aa72f5ee4d8a2fd1"],["../public/assets/images/icons/android-icon-144x144.png","3cd923ceb6d8aac6034a332333689931"],["../public/assets/images/icons/android-icon-192x192.png","7e166a48b716f30d84919cef16425419"],["../public/assets/images/icons/android-icon-36x36.png","123c851c09bc41c2d02917df4c685642"],["../public/assets/images/icons/android-icon-48x48.png","6717d4638c409673c35cc0ab1a8ff9f9"],["../public/assets/images/icons/android-icon-72x72.png","c9b81ea8be7760a04d37f0b12c2be8f9"],["../public/assets/images/icons/android-icon-96x96.png","128a5ffc8397f8207fecde2abe1f6f59"],["../public/assets/images/icons/apple-icon-114x114.png","24bb235078cdd71e798dd2a3707d1b04"],["../public/assets/images/icons/apple-icon-120x120.png","54e014517b30775c2e44ddcd17c3b92b"],["../public/assets/images/icons/apple-icon-144x144.png","3cd923ceb6d8aac6034a332333689931"],["../public/assets/images/icons/apple-icon-152x152.png","00cac4dda7a3dc900da23893db4e80c0"],["../public/assets/images/icons/apple-icon-180x180.png","b2971a35fb167fd7311b5e8cf503e8b2"],["../public/assets/images/icons/apple-icon-57x57.png","f4279fb75c1bf75d07a21f22c8196757"],["../public/assets/images/icons/apple-icon-60x60.png","aa95137f7a29bb26382f46b56519e74f"],["../public/assets/images/icons/apple-icon-72x72.png","c9b81ea8be7760a04d37f0b12c2be8f9"],["../public/assets/images/icons/apple-icon-76x76.png","775b9263047a5cb8f5520c9af5782b3a"],["../public/assets/images/icons/apple-icon-precomposed.png","90035dd9745155e2408eb7f7774b73f2"],["../public/assets/images/icons/apple-icon.png","90035dd9745155e2408eb7f7774b73f2"],["../public/assets/images/icons/favicon-16x16.png","be097a299f5f5fd1e05a5ee255039c89"],["../public/assets/images/icons/favicon-32x32.png","01ad45ec0fce5d000fc0601e89aebca1"],["../public/assets/images/icons/favicon-96x96.png","128a5ffc8397f8207fecde2abe1f6f59"],["../public/assets/images/icons/ms-icon-144x144.png","3cd923ceb6d8aac6034a332333689931"],["../public/assets/images/icons/ms-icon-150x150.png","005bb3fa19c902cc7e3bd873b168367e"],["../public/assets/images/icons/ms-icon-310x310.png","6659f3f5560d7a66a81ca3cd4f4803f0"],["../public/assets/images/icons/ms-icon-70x70.png","1b0fabb95d58754be1caaf21239dace8"],["../public/assets/images/main-banner.png","9b6467c80cadb7910749e982be7b03c0"],["../public/assets/images/main-banner1.png","044ec9889a76d5669d922680d31a4f19"],["../public/assets/images/main-banner2.png","890a91b32a10c95927633b8791eecc04"],["../public/assets/images/toys_rabbit-gentleman.jpg","b92ba44572365679f2335fcabf4ae4ec"],["../public/assets/images/toys_sheep-shon.jpg","80ab6f88b0d1b604786c9ff33af719ea"],["../public/assets/images/toys_snail-leo.jpg","89a82562ed90fca1e3019f442e194079"],["../public/assets/images/wreath_blue-and-yellow.jpg","ced2c55a84ad5224dcbc08dd14439396"],["../public/assets/images/wreath_purple.jpg","1005e95da561a6ac0971b468498fb7ef"],["../public/assets/images/wreath_violet.jpg","df314608d5ff22e0882ab79e804da972"],["../public/assets/samples/150x300.png","deca5324155af81d6fd22fffd24908e5"],["../public/assets/samples/200x300.png","d9da17d7bdb68e01415fd82ad5eaa1f1"],["../public/assets/samples/240x180.png","3247f14e6bde449adcae91e23c39635a"],["../public/assets/samples/350x150.png","e484e3fa1959913947378735eddd969f"],["../public/assets/samples/doodles.png","86377fca9a2188d4d1eaafa1576cf3e1"],["../public/assets/samples/doodles1.png","9176354b4222183601b4f5ea8e1ed15d"],["../public/assets/samples/doodles2.png","ae3a4edec9f81269fbe08a7b47083f3d"],["../public/favicon.ico","98fd334c396daf403ca21ccc64404bcd"],["../public/index.html","74baf2d6232a72e98ada324a58640c8a"],["../public/inline.7c9e63584d40a7f65c1a.bundle.js","72bafb9c4e6fb474f92d82756625f0fb"],["../public/main.332e5df348b48bde06ab.bundle.js","180c9fb10a28c39b5ccebfa43caef356"],["../public/manifest.json","43f8f29ccdd232ff01523192352c822c"],["../public/polyfills.c3daa39787283fa064c7.bundle.js","c6a599fcb967771255d8d9d342fdbacd"],["../public/styles.24ce49003c7771e69a84.bundle.css","24ce49003c7771e69a848d643a45b625"],["../public/vendor.9ec4dc2fed5b901c41b2.bundle.js","452f1a2b271971322ed13ca6d71adbd0"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







