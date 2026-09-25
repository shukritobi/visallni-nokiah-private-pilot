const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.style.opacity = window.scrollY > 260 ? '0.78' : '1';
});
