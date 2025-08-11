function cargarSegundoScript() {
    var preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://abol-yt.github.io/privat/js/game.js';
    preloadLink.as = 'script';
    document.head.appendChild(preloadLink);
    var script2 = document.createElement('script');
    script2.src = 'https://abol-yt.github.io/privat/js/game.js';
    script2.async = true;
    document.head.appendChild(script2)
}
cargarSegundoScript();
