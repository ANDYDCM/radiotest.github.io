function updateVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', () => {
  updateVh();
  setTimeout(updateVh, 500);
});
window.addEventListener('resize', updateVh);
window.addEventListener('orientationchange', updateVh);
