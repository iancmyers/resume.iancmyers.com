window.addEventListener('online', function () {
  document.body.classList.remove('offline');
});

window.addEventListener('offline', function () {
  document.body.classList.add('offline');
});