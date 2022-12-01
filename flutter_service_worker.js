'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "28380b8b7bedcb5822788a0b502fea3f",
"favicon.ico": "49860b60914ac0ba5baab1ee6321d975",
"index.html": "8d3d0cd2fa6788cc2822d4fc60520dc1",
"/": "8d3d0cd2fa6788cc2822d4fc60520dc1",
"main.dart.js": "d94557713cdabbbf415dfb4cfca8f362",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-192.png": "8d08ea1990e43ed79221e70e8eaa8872",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon-512.png": "40e5d8902e1e24f4db709b0dea57a792",
"manifest.json": "6706be8fe19aa7dd2040d3efd8442785",
"assets/AssetManifest.json": "d5360b1df43f6032954fcad758013ad3",
"assets/NOTICES": "9cc3e246e8dc2e8861a809413a2a9e8b",
"assets/FontManifest.json": "b2d2420b197eab1068d5a8e519f9782a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/eva_icons_flutter/lib/fonts/evaicons.ttf": "b600c99b39c9837f405131463e91f61a",
"assets/shaders/ink_sparkle.frag": "335508600bed30a729f0b8b2c886d324",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/template1/recipe3x.jpeg": "ea94f512a5f8df5e1f12d4e654b8982f",
"assets/assets/template1/treva3x.jpeg": "ea8d105bc38a550c98765b2f1dea5fe8",
"assets/assets/template1/crypto3x.jpeg": "bd55da18ec188ee9d5b6b8696fb5bf80",
"assets/assets/template1/github.png": "9c6503f184c8474a28ba2c50e1b735de",
"assets/assets/template1/web3x2.jpeg": "3fb970cbacf0de08b32e0291a556d3c0",
"assets/assets/template1/foodie3x.jpeg": "3f362d595b3031cef6aae648012cf9ed",
"assets/assets/template1/event3x.jpeg": "7619791260fe03bb85058f82497c565b",
"assets/assets/template1/logo.png": "4185c5199927f22106fa146b3c5a6066",
"assets/assets/template1/pp3.jpeg": "29a2f00cc5fb5a9ef9ddb6ab0f82ecec",
"assets/assets/template1/linkedin.png": "113e8266381e572d692e72d09652aadc",
"assets/assets/template1/dribble.png": "c8d83ef01fe0805cc236e5051539efce",
"assets/assets/template1/whatsapp.png": "61c52a3836ef11485942f67875269a3c",
"assets/assets/template1/codecanyon.png": "8cceef58d992207c6d3ec64b2a953f1f",
"assets/assets/font/IBMPlexMono-Thin.ttf": "7d2bf8a4b8269922bca1106daefe14e9",
"assets/assets/font/OpenSans-SemiBold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/font/IBMPlexMono-Bold.ttf": "833884d70558d56ce20c08ef08cd1216",
"assets/assets/font/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/font/IBMPlexMono-Regular.ttf": "741a5a72744c8ec2fa447690bdf1dcc6",
"assets/assets/font/IBMPlexMono-Light.ttf": "1a78bb494af05a31029c68015bb4c168",
"assets/assets/font/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/font/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/font/IBMPlexMono-SemiBold.ttf": "2ef28306dae476a5ffd43d1ba8483576",
"assets/assets/font/Poppins/Poppins-ExtraLight.otf": "4918ffef121897b111a9cd50fa23ba34",
"assets/assets/font/Poppins/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/font/Poppins/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/font/Poppins/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/font/Poppins/Poppins-Thin.otf": "21792aea22dc450c1b24a2ffc656f6e0",
"assets/assets/font/Poppins/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/font/Poppins/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/font/Poppins/Poppins-ExtraBold.otf": "162a9aeb6c2ca8567f36a62f0d06da07",
"assets/assets/font/Sofia/SofiaProMedium.otf": "b307c6ce73c3d573c228ecd5de070f45",
"assets/assets/font/Sofia/SofiaProSemiBold.otf": "a57bde9593a32d99ff54c3716859cc19",
"assets/assets/font/Sofia/SofiaProBold.otf": "28b75bc6b4d35b59ecf476db59bc4ecf",
"assets/assets/font/Sofia/SofiaProLight.otf": "52fa5a506994382612ed5936f1e94660",
"assets/assets/font/Sofia/SofiaProUltraLight.otf": "4bdc72d871a96c7a9bf467f5d5cff5f0",
"assets/assets/font/Sofia/SofiaProRegular.otf": "bd0a6d0d1ce78e95fb1629450636bc6f",
"assets/assets/font/Sofia/SofiaProExtraLight.otf": "8b590b229ee431c83a27e8930ad80781",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
