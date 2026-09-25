const CACHE_NAME = "meu-app-v1";


const arquivos = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js"
];


// Instala o aplicativo

self.addEventListener(
"install",
evento => {

evento.waitUntil(

caches.open(CACHE_NAME)

.then(cache => {

return cache.addAll(arquivos);

})

);

});


// Busca arquivos salvos

self.addEventListener(
"fetch",
evento => {


evento.respondWith(

caches.match(evento.request)

.then(resposta => {


return resposta || fetch(evento.request);


})

);


});
