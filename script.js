const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');

menuOpen.addEventListener('click', () => {
  menu.classList.add('active');
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
});
