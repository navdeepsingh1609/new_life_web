'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8849ff479a377925be3150930d9c0408",
"assets/assets/add.svg": "906a8e62cb9294f2955e17eca4d311d2",
"assets/assets/Chat%2520_2.svg": "7638f7399d9fb8131db312e38f62fe66",
"assets/assets/Chat%2520_3.svg": "0f4baac52c2431c100148e55614fe8b4",
"assets/assets/Chat%2520_4.svg": "6e7e3d56dbcc5cee18c84f60a617da82",
"assets/assets/Chat.svg": "b3d8e16c22d8191a4f1263ec7c411e55",
"assets/assets/Chat_1.svg": "281bc758fcf79d52409eba3da1d20768",
"assets/assets/Chat_5.svg": "a16c6048b49df202f4507d9ddfb8a279",
"assets/assets/dark_mode.png": "8f2517b4274a4c755ddb3dba036e400e",
"assets/assets/home.svg": "8b93bd21019b8ea14e5c9a3511726f1a",
"assets/assets/icons/home.svg": "8b93bd21019b8ea14e5c9a3511726f1a",
"assets/assets/icons/icon.png": "66e96e54b1dc8ed1e89af4056613dad3",
"assets/assets/icons/Notification.svg": "dac10b32f87cc0d1cf6c465b768310eb",
"assets/assets/icons/person.svg": "0a33d2262834e826bab2de3d258a226d",
"assets/assets/light_mode.png": "b542fad04c1fae247c425117b55ac64a",
"assets/assets/light_mode_2.png": "ec0f204e3f61d3715cfb6908feebdaab",
"assets/assets/light_mode_3.png": "9af3de266c261c9ce0885f30acbb7811",
"assets/assets/Moon.png": "5b30bc263d9137780b4284d234942cf4",
"assets/assets/msg.png": "db4cd4898c5ca58330500a3c8830d832",
"assets/assets/NewLife.svg": "7871f7fa9169d7b3a72eb4524c4a3733",
"assets/assets/NewLifeLogo%2520.gif": "e025b680379eb40605c13fa0b96b2933",
"assets/assets/NewLifeLogo.gif": "de7d962fffd7de9ffafde3b438c89304",
"assets/assets/NewLifeLogo.svg": "ce7c5bb840cc69809106cdc62086caaf",
"assets/assets/NewLifeLogoDark.gif": "be676245a85a81c3f899b8b19ae17c41",
"assets/assets/NewLifeText.gif": "11e283dfebc4f359d6a3c6d99717f3d8",
"assets/assets/NewLifeText.png": "064249132fe4be62b7736edc6b311ec8",
"assets/assets/NewLifeText.svg": "2d56684c40008745d457928c6de64cc8",
"assets/assets/NewLifeTextDark.png": "3ee3deca5311cacfc437a1b677dce5f6",
"assets/assets/person.gif": "e40c9ee6feb8fd0081c02dbad2b2216c",
"assets/assets/person.png": "7b21ccc7eb7be37d4c753d2eac3e7bc1",
"assets/assets/person.svg": "0a33d2262834e826bab2de3d258a226d",
"assets/assets/profile.png": "352c2ed5e865b842f4e6effeee2c9c7a",
"assets/assets/Profile.svg": "e27ed02406b04c3cccd9a9bf60deca73",
"assets/assets/search.png": "63c25af232ef3511049a5dc18482e19a",
"assets/assets/search.svg": "df70f12fe6c7f9630b4159babf84aa0f",
"assets/assets/upload.png": "69bb263e3c39a397a273cc6e87e08633",
"assets/assets/upload.svg": "5d57dcc37c07da6df70dfb21d6125be2",
"assets/FontManifest.json": "14acb0a64b3828e157d4d6ae4be47def",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Nunito-Italic-VariableFont_wght.ttf": "35214fe3c667c57530f7cc4c9f8d2f48",
"assets/fonts/Nunito-VariableFont_wght.ttf": "bc1d0d2571eadab780ef9f510fb6675c",
"assets/NOTICES": "c625e0d8b699670baf19b644c7d7b3b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "b40500d4d4a4f9e914c75d0fec73806d",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-chrome-192x192.png": "908fff63996c5ff3cd723d45d6c76f34",
"icons/android-chrome-512x512.png": "066bcd25735295a5b126318dfdcfeff7",
"icons/apple-touch-icon.png": "d0c354004f52b319fc3a8d2ecd01f450",
"icons/favicon-16x16.png": "a28114b94847bc5983c1be7c6b022e40",
"icons/favicon-32x32.png": "3609c7f7db9adeaef4a29d1e568c5fc9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0d42ffd8d7e170d8d806da6f434e2f2",
"/": "a0d42ffd8d7e170d8d806da6f434e2f2",
"main.dart.js": "2dd4492eb33ff83fbf215bcd8bf8ae84",
"manifest.json": "d686895c9ab1b40dc94b664d7d24fbe6",
"version.json": "91f872edd74ade8d60854b0169788255"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
