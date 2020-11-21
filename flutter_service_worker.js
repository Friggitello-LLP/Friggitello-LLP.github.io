'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dbd687b423b7f8cc2a615f03c5bc584b",
"index.html": "b23d059129db72dcd097c2a7bdbcfbd4",
"/": "b23d059129db72dcd097c2a7bdbcfbd4",
"main.dart.js": "d5889e549d0a094bc7d35d0755868e1d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "11c7a1cf5608b90049095b85acec51af",
"assets/AssetManifest.json": "f9c8525167c5390e317e9a80c7714029",
"assets/NOTICES": "ec339d00e7ec7c31d26ecd41cbe7888f",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_google_maps/assets/images/marker_a.png": "9b687e681fcc41298dfab9c1304b66d0",
"assets/packages/flutter_google_maps/assets/images/marker_b.png": "bb8df73622307b582f89602743f4f02f",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/assets/images/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/assets/images/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/assets/images/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/assets/images/bag_4.png": "0d85b194c8a5c71c60f84d899de86c31",
"assets/assets/images/bag_5.png": "3144272695836710191b7f953cc6fb7e",
"assets/assets/images/location-pin.png": "7bbbfdd3d32641ffc7b0146ff13fc39a",
"assets/assets/images/smartphone.png": "2a9fe1bfe49e95860328d29665ed814e",
"assets/assets/images/bag_6.png": "c51f90dc78a7bc817fd14f20d6567d94",
"assets/assets/images/healthCare.png": "e01bf98668e96bde7438d47b36f5d2fa",
"assets/assets/images/family.png": "7a812f5e6a43931aef4c3cce26388403",
"assets/assets/images/visa.png": "bfe7518ec1239e46f91d89054460a8f2",
"assets/assets/images/bag_2.png": "1d5fd0aaf3e6cbf6b8fa23aed72b0523",
"assets/assets/images/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/images/bag_3.png": "d069787fd88889b6d9c0d3b7a054e0bd",
"assets/assets/images/pet-cat2.png": "76b65e1994eb8ebad952c4de4c6f9862",
"assets/assets/images/bag_1.png": "e9506b6861af2660221107684bbebd97",
"assets/assets/images/passport.png": "767bd2433b925e6752f79e2d95ecaed3",
"assets/assets/images/pet-cat1.png": "8d0a7de6f2fa896fbcb0748e1f53a0e7",
"assets/assets/images/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/assets/images/id-card.png": "e63f21a7163c9ba0e0b759443bb17c92",
"assets/assets/images/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/langs/ur.json": "4ce1d7dcb7019a3acffb00741aa266c6",
"assets/assets/langs/ml.json": "ea832d9dfe3acdae9af0d53087088435",
"assets/assets/langs/en.json": "b1d3be4049cbea4c95ce4f326c922a6f",
"assets/assets/langs/hi.json": "553d12c36252439f889aeace439bef6c",
"assets/assets/langs/ar.json": "2fbf13c7458acbf1734a41d5919b1238",
"assets/assets/icons/search.svg": "654e22ab2ad459d56cff69b1e077c53f",
"assets/assets/icons/bag_1.svg": "63e5245b06f0a2341dba8d0d9f81014b",
"assets/assets/icons/smartphone.svg": "b47c5fe04edad20be0783b4e3f7c8fe9",
"assets/assets/icons/document_service.svg": "69ab4e812b5d7387f3aa22c2f3293d4e",
"assets/assets/icons/sad.svg": "a2ac6c931f06c3e24bb28d433f6e4617",
"assets/assets/icons/cart.svg": "fd320d807686c8432b2e449a583296b1",
"assets/assets/icons/past_orders.svg": "727854140d2197beacacb75d69619aff",
"assets/assets/icons/dashboard.svg": "5c71b77d727ef7e617d47cf4e66a5091",
"assets/assets/icons/our_center.svg": "8e10dc0b1eb2466235715941265cb5d7",
"assets/assets/icons/back.svg": "1b13e0b59c27ec75d6f5051e5d66e8d9",
"assets/assets/icons/google.svg": "02d31de090b561394cf0e18c8419927d",
"assets/assets/icons/add_to_cart.svg": "0eb1a5e481ee24dba9de843a9dacdde1",
"assets/assets/icons/empty-cart.svg": "302b7b48f67d89aee5179073649b89b9",
"assets/assets/icons/shopping-cart.svg": "82014922cac4a56b0d33a5be43c1b0d2",
"assets/assets/icons/heart.svg": "1c996a5addb1570d53d2093a229b8ac8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
