const CACHE_NAME = 'data-analysis-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// アプリのインストール時にコアファイルをキャッシュ
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 起動時は通信を待たずにキャッシュから秒速で画面を描画
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
