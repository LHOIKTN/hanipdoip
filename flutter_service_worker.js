'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c9387c9ec7ad4735955324fec8474fde",
"assets/AssetManifest.bin.json": "ca86883c570f13c2b48b11fb6e35ff8a",
"assets/AssetManifest.json": "7762a11d159c9355734437b78af4fa02",
"assets/assets/fonts/Hakgyoansim%2520Dunggeunmiso/Hakgyoansim%2520Dunggeunmiso%2520TTF%2520B.ttf": "6c3a789cec0b32bce4e6ffa1d9a93c4a",
"assets/assets/fonts/Hakgyoansim%2520Dunggeunmiso/Hakgyoansim%2520Dunggeunmiso%2520TTF%2520R.ttf": "b9d772d7e16c9c52ecf501a32c60bc6a",
"assets/assets/images/6soo.webp": "94b422c3143f44850a8da9cd2e426d37",
"assets/assets/images/anchovy.webp": "eebf6904fd123d5038601c50eea574a7",
"assets/assets/images/apple.webp": "bcea8f2b0aa487d5cf84bfd7d3385449",
"assets/assets/images/banana.webp": "b9e6bfbad1212a91efda163e53f0dfe2",
"assets/assets/images/barley.webp": "52c5e719c6c8e94ec33788f16938802d",
"assets/assets/images/bean_sprout.webp": "528f00952604ed1e2afd8ebefc86fa1d",
"assets/assets/images/beef.webp": "92bacf05e93975432d5aff34c16a3fa7",
"assets/assets/images/beef_seaweed_soup.webp": "9be1cdc28dbe9181de620106c2e45182",
"assets/assets/images/black_pepper.webp": "594fddf47b25c1e71fba04b545425d64",
"assets/assets/images/black_rice.webp": "ae22b4d6f1bf081c54c961a077bda133",
"assets/assets/images/blueberry.webp": "02f8578009703b51ec4db24d50d83f32",
"assets/assets/images/blueberry_rice.webp": "e248dbc5f27f66b30ed82f835c79ccee",
"assets/assets/images/blueberry_rice_ball.webp": "03f64380cc71c9f8549077306a120f70",
"assets/assets/images/bok_choy.webp": "8dada048983294998185bde4b84397e0",
"assets/assets/images/braised_fish_cake_with_gochujang.webp": "3c6ec94556cdff1dcfc11c2489886852",
"assets/assets/images/bread.webp": "193e840f78a59090733d63a5c72e3ea7",
"assets/assets/images/brown_rice.webp": "2062e5ae941b3049a3002b22e59888e1",
"assets/assets/images/buckwheat.webp": "a8e14f3bbaf1251db306f91764455266",
"assets/assets/images/buckwheat_noodles.webp": "990658ca8db7153cd9833eff331ad0e3",
"assets/assets/images/butter.webp": "df766a2ee48808cfe9c472511da322cc",
"assets/assets/images/butter_potato.webp": "c0ef22762c726fcc1ff618b5f8b9762e",
"assets/assets/images/cabbage.webp": "7d0cbb743048ccbc5b44a754fdefe9ba",
"assets/assets/images/cake.webp": "2ac04f6f4cc9e63b7be770ad7eab4183",
"assets/assets/images/carrot.webp": "9dd13d7de296a7cbd74c5b6253bdb8f0",
"assets/assets/images/cheese.webp": "380a7be1832c6ef818417eb25965ef9d",
"assets/assets/images/chicken.webp": "9f6095152e46500d9489c60210350780",
"assets/assets/images/chunjang.webp": "c0ceaf30759a2ec4b5cc3ab1316e20d7",
"assets/assets/images/cooking.png": "dab459576ce6988d79375b4a19d73534",
"assets/assets/images/corn.webp": "38cfc270f61cc77e736ad9c55f2af8ec",
"assets/assets/images/cow.webp": "d19895a32603545ff06e4210b1b241ff",
"assets/assets/images/cream.webp": "d51d53430af1847fae3187a3dcf349f0",
"assets/assets/images/cubed_radish_kimchi.webp": "fc47474b7ed96d327eb83ab6e517353c",
"assets/assets/images/cucumber.webp": "49a2ae21664c97afa9dab061d3368fc5",
"assets/assets/images/curry.webp": "d5de072699c3ee30d036309d51fdfbfc",
"assets/assets/images/curry_powder.webp": "7f1d5be0ec577c7a07cffb2b353343dc",
"assets/assets/images/curry_rice.webp": "f5eab6b96ebb6b3dcda108fa4027a27e",
"assets/assets/images/cutlet.webp": "8bf1e7ea6ca5bcb1cf16c20a3032038d",
"assets/assets/images/cutlet_cheese.webp": "fac411d3330f5ba11bad3325b10e516e",
"assets/assets/images/cutlet_fish.webp": "b8955fcbee0ce95613259ffdbd66deff",
"assets/assets/images/doenjang.webp": "88fa48b4cfdf0c8944489e2f1a990716",
"assets/assets/images/dotori.webp": "bffc9df180990c1fc7a515115cbfa777",
"assets/assets/images/dotori_jelly.webp": "51b8b812d848fec0e9f39ac17e6d5d69",
"assets/assets/images/dressing.webp": "f3ac1d0824138305779cb0bf4eed6459",
"assets/assets/images/dried_laver.webp": "121e2f425f62fee8d314ec8ebb1fa8aa",
"assets/assets/images/duck.webp": "d1ba48bf8b6107a5527d93d238ef5117",
"assets/assets/images/egg.webp": "bb1770e69d133df92f0b6451d99ab0d3",
"assets/assets/images/eggplant.webp": "e10bf3e56a641c6c34322a5b1d7725f9",
"assets/assets/images/eggplant_moochym.webp": "e3f6f216d215ceaabcfbbd54d2416c31",
"assets/assets/images/extract_lemon.webp": "a8e102a59fd3ce5fe108a4b395b75a90",
"assets/assets/images/fish.webp": "5705cd2f00b35374336365e5248a41e2",
"assets/assets/images/fish_block.webp": "b32ab3e8f09801470ffb8c5f0166eb3b",
"assets/assets/images/fork.webp": "62457b470014f964c29bb92c91f126da",
"assets/assets/images/garaetteok.webp": "4c939797cbecbecf11542d6cc344a8ce",
"assets/assets/images/garlic.webp": "b49bf7f8ee2e59960f9a92a7c0e54342",
"assets/assets/images/gijang.webp": "03fd4170eb00b55979cad02e15d59b97",
"assets/assets/images/ginseng.webp": "3ed51f1d17d5728b5ff2e1a17ad92c5d",
"assets/assets/images/gochu.webp": "f1cf4436d7c0c07a5a2c79251dee5607",
"assets/assets/images/gochugaru.webp": "94ba7731ce38ad57eb448e1a8db0669e",
"assets/assets/images/gochujang.webp": "c1e1a2d728b93580e41565308827c7cf",
"assets/assets/images/gochu_oil.webp": "2d1f49bc508f962796dfb7bc5a8e3d7d",
"assets/assets/images/green_onion.webp": "841ecd42b5da854e1664b78480daaf5b",
"assets/assets/images/ham.webp": "32551151caf05f3c51db8ad3f9edfd34",
"assets/assets/images/heugimja.webp": "ec19333d650090b09e429854e8236b61",
"assets/assets/images/icon.png": "12ff5635f2f269f6602884df244c54a8",
"assets/assets/images/je6bokkeum.webp": "ebb92d5b9be088d19355ce1d1e2680a8",
"assets/assets/images/jorim_tofu.webp": "ba10a1078f45df50d98278d9d2a91736",
"assets/assets/images/kakao.webp": "d5d2cbdfaf1f7b6cc35c8752d4cf241b",
"assets/assets/images/kiwi.webp": "572024b6c726480209abc06105a720d0",
"assets/assets/images/kong_rice.webp": "58347ee7a48c52f879d397acc798006d",
"assets/assets/images/lemon.webp": "5a135a2be8d495b6e41bc9e53dec0780",
"assets/assets/images/lettuce.webp": "1d2a99e9ae5d0aa093a8558171070f02",
"assets/assets/images/macaroni.webp": "1e3b9152ed4620f09d33d255ccbddd4a",
"assets/assets/images/macaroni_corn_salad.webp": "b3cda5ea243f2143b25c3da22a717b21",
"assets/assets/images/mandarin.webp": "d00c6d90f7f3203605b2bfb7e77a89cb",
"assets/assets/images/mandoo.webp": "04d2b7e5d8f9fe355d9a4b455e297812",
"assets/assets/images/mango.webp": "cb30e59f6b0b5662b01c9f287b8aa70d",
"assets/assets/images/mara.webp": "c5dc0b916b0049d64b458b3c41fb5104",
"assets/assets/images/mayonnaise.webp": "b93892f24f9d2ee8d408cef15a629781",
"assets/assets/images/mayo_spam.webp": "18e8fa76303d0b775d896565dc210741",
"assets/assets/images/meju.webp": "0c1153dd2d8af7d07fa07629588f4166",
"assets/assets/images/milk.webp": "fc776f582cada1775c019b3a52889554",
"assets/assets/images/misosoup.webp": "96b3afccfe58d3bcea6a74547d42bb19",
"assets/assets/images/misosoup_.eolgali.webp": "d4f8b7e0cba0b590043b1e9fc84f7d2f",
"assets/assets/images/misosoup_muchroom.webp": "4c4046a4c22dcaf3d6308d7e8d8b23d5",
"assets/assets/images/moochim_oe.webp": "d678e1a449f02dd731780d566ffc876d",
"assets/assets/images/mushroom.webp": "52b113d8dbe29cccd16a0286545bc850",
"assets/assets/images/napa_cabbage.webp": "15993c8e308bcb444bcd1da6626b86f0",
"assets/assets/images/napa_cabbage_kimchi.webp": "8134816bd21c08b41d25242ae65d158f",
"assets/assets/images/noodle.webp": "3eda2234132b82ce57e0488a7d31415c",
"assets/assets/images/octopus.webp": "25a8dc9ae09dad1f47e62962284901c7",
"assets/assets/images/oil.webp": "fd2a1bff23bf77f1ebccee7ac27c04bd",
"assets/assets/images/olive.webp": "f171380e13858e2f6d155b48925d74c5",
"assets/assets/images/olive_oil.webp": "89bf2fa34cfee0046665c458d3d3bfcf",
"assets/assets/images/orange.webp": "bd98568f2625bcbd061b667a0397dc8f",
"assets/assets/images/pajeon.webp": "1485780680e9517f58749c6155795556",
"assets/assets/images/pajeon_haemool.webp": "74806d8cd69d9a3ded2b54b8a8e8b7be",
"assets/assets/images/palae.webp": "41c4b92b5c8fe892b46171f5996a6230",
"assets/assets/images/pickled_yellow_radish.webp": "cf7348c2fd88ad52118888b87da9916f",
"assets/assets/images/pig.webp": "4683d61623c3faec6c71f6e5f08d6e19",
"assets/assets/images/pineapple.webp": "f07e8f34357a1028ec3e4538a9de7f83",
"assets/assets/images/ponytail_radish.webp": "c17bb5dbeae5252eace6dd17468ac8d9",
"assets/assets/images/potato.webp": "40af086f8c5034e93f70a885dedf783d",
"assets/assets/images/pumpkin.webp": "6eb81c287b9b8cee97ee0882b80d30e1",
"assets/assets/images/radish.webp": "279c054abad0cdb16544831be9102abc",
"assets/assets/images/red_tang.webp": "7689e6922a355ce97c9329ca38cda6a5",
"assets/assets/images/rice.webp": "f60024dc4d3aba12f8e035209f6f5cfd",
"assets/assets/images/rice2.webp": "26b4739fd92dcc472bdfe1363033d20e",
"assets/assets/images/rice_ball.webp": "e4516d918c3b68f89d917af3d7682e96",
"assets/assets/images/rice_barley.webp": "af3afc62c0467f46b09841051e85093f",
"assets/assets/images/rice_black_rice.webp": "885a8284a93158d8fffc5e63f7de25f2",
"assets/assets/images/rice_brown_rice.webp": "86108fdbe2f8348a238abda90e4bbec6",
"assets/assets/images/rice_gijang.webp": "d94db7ee16530c1c7d014c3b22941ebc",
"assets/assets/images/rice_multigrain.webp": "16bc4dd6b4bc16e5d4eeb533adf7da5a",
"assets/assets/images/salad.webp": "14db28bd5a1b68ed58e2d202489d145d",
"assets/assets/images/salad_apple.webp": "2af2cf54a59c97bde1b6f662670bd0bc",
"assets/assets/images/salad_tomato.webp": "9ef4cb141a2c20ed6de5365c73ea7a2e",
"assets/assets/images/salmon.webp": "36f2002a432aa888bdba54ac7c078cad",
"assets/assets/images/salmon_steak.webp": "25d45a7878ada224eb3a3b213e259046",
"assets/assets/images/salt.webp": "c1166a036200a551e567aded470c6aab",
"assets/assets/images/sancho.webp": "b80e1b122957f75d17634351d6be213c",
"assets/assets/images/sangchu.webp": "a0b9d8003c815e743bd94aeea45e81ec",
"assets/assets/images/sausage.webp": "b05c5947cb9dcb802d8cc3ae93fe9d24",
"assets/assets/images/seaweed.webp": "37f2e7bfc182bdb307c5d4f0f45c5acf",
"assets/assets/images/seaweed_soup.webp": "6404b76fc4b84e8e5c442cb642db22d4",
"assets/assets/images/sesame.webp": "58c5e3bee4cdcb137956006d77937398",
"assets/assets/images/sesame_oil.webp": "3181c217a3c49cb602c39c38dc68cba9",
"assets/assets/images/shrimp.webp": "e3e398020aa545035cb34e0744305ea8",
"assets/assets/images/soybean.webp": "373f8d44e9d50242d46ce0e7bf087b3c",
"assets/assets/images/soy_sauce.webp": "ab9f78d6adbfb084cd414f8e55c50694",
"assets/assets/images/spinach.webp": "f8cbfcabc07fba536bc3000f655cb266",
"assets/assets/images/spinach_moochym.webp": "2bf5e6b57fb5edcf8fae130c962fd117",
"assets/assets/images/squash.webp": "30223c846c9e1cd427f79ee3f842c558",
"assets/assets/images/squid.webp": "e8033a7d951977dad2fe79703106d5b8",
"assets/assets/images/steamed_egg.webp": "de522ccf05bf171725e8558b1bed2106",
"assets/assets/images/stir_fried_dried_palae.webp": "1785e2c97bf14297e1768f870b1e3d71",
"assets/assets/images/stir_fried_mushroom_zucchini.webp": "ad770f28a5592896ee0f3aabdca04084",
"assets/assets/images/sugar.webp": "a434acd4411bb2410e519f58ca2aeab9",
"assets/assets/images/sweet_potato.webp": "3925a456378f658b112e11a7069c8da7",
"assets/assets/images/sweet_potato_cheese_roll_cutlet.webp": "d89522dd3ddc5cc33cb6656512e18353",
"assets/assets/images/takoyakii.webp": "c9566d32b7406835565f674eb267eec8",
"assets/assets/images/tofu.webp": "e1e100d5cb5c02a4d5de6b6dad4aa2b5",
"assets/assets/images/tomato.webp": "e029462faee34d7d0a1ea2421e13c515",
"assets/assets/images/tomato_sauce.webp": "7f7ad16729a0b8c15ef6ce57be0c2b2f",
"assets/assets/images/tomato_spaghetti.webp": "14ff810f5d30d1e9bf72545572aefab7",
"assets/assets/images/tteokbokki.webp": "6344eb1612948b4a9d72406b7713be20",
"assets/assets/images/vinegar.webp": "0eb36b78af74219e625dae89a94b0648",
"assets/assets/images/watermelon.webp": "2d49661e996e10a974718cea48697f98",
"assets/assets/images/water_morning_glory.webp": "3f3e762f901489a66ee44d267ce2d3c8",
"assets/assets/images/wheat.webp": "73f209e118c727376dce4a663e651ebd",
"assets/assets/images/wheat_flour.webp": "82d78a8045661d54837df591c104b1b7",
"assets/assets/images/yogurt.webp": "e6fe96b581c4ef1a2a6e9160ab938beb",
"assets/assets/images/young_radish_doenjang_gug.webp": "505b9ca6307af187741818e51c986477",
"assets/FontManifest.json": "da3b98e1d684773b4786ae074e95a000",
"assets/fonts/MaterialIcons-Regular.otf": "24426534c08749c0884e2d85a285c504",
"assets/NOTICES": "37be575cc007f9d40f8b7995a1bd1f12",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5263db7bb869a78c78538841b0529258",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "949c9f7f7a18a8cf8461d52a258e7ee4",
"icons/Icon-192.png": "14a7a96e5a02061db9ddd57a1773cfb6",
"icons/Icon-512.png": "462d84c534e176b5f11962d50b233169",
"icons/Icon-maskable-192.png": "14a7a96e5a02061db9ddd57a1773cfb6",
"icons/Icon-maskable-512.png": "462d84c534e176b5f11962d50b233169",
"index.html": "185068ef00c9c6c4c619be7e3610f18b",
"/": "185068ef00c9c6c4c619be7e3610f18b",
"main.dart.js": "e3e2508548f67c210d553c54f2f320db",
"manifest.json": "20ff3e1d25a599f2d3e23f72fd24eb36",
"version.json": "5c931d2ccbcac99c5b6a7d23ea79b1a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
