const CACHE='vita-core-1.5.1';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
const urls=new Set(CORE.map(p=>new URL(p,self.registration.scope).href));
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('vita-core-')&&k!==CACHE)await caches.delete(k);await self.clients.claim();})());});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;if(req.mode==='navigate'&&req.url.startsWith(self.registration.scope)){event.respondWith((async()=>{try{const r=await fetch(req);if(r.ok)return r;}catch(e){}return (await caches.match(new URL('./index.html',self.registration.scope).href))||Response.error();})());return;}if(urls.has(req.url))event.respondWith(caches.open(CACHE).then(async c=>(await c.match(req))||fetch(req)));});
