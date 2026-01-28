// ⚡️ Just a little JavaScript to detect online/offline status.
window.addEventListener('online', function() {
    document.body.classList.remove('offline');
});
window.addEventListener('offline', function() {
    document.body.classList.add('offline');
});
if (!navigator.onLine) document.body.classList.add('offline');
// It's always nice to be friendly in the console.
if ('console' in window) console.log("\uD83D\uDC4B You can find the full source here: https://github.com/iancmyers/resume.iancmyers.com");
// ⚙️ Let's over-engineer this a little more with a ServiceWorker.
if ('serviceWorker' in navigator) navigator.serviceWorker.register(new URL('../service-worker.js'));

//# sourceMappingURL=index.7370ffd9.js.map
