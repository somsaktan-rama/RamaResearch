self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // ปล่อยผ่านการโหลดข้อมูล เพื่อให้ดึงข้อมูลใหม่จาก GAS เสมอ (ป้องกัน Cache เพี้ยน)
    e.respondWith(fetch(e.request));
});
