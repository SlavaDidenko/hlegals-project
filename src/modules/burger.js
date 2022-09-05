const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerNav = document.querySelector('.header__nav');
const closeBtn = document.querySelector('.close-button');

hamburgerMenu.addEventListener('click', () => {
  headerNav.classList.add('active-menu');
})

closeBtn.addEventListener('click', () => {
  headerNav.classList.remove('active-menu');
})

window.addEventListener('click', (e) => {
  if ( !e.target.closest('.nav__list') && !e.target.closest('.hamburger-menu') ) {
    headerNav.classList.remove('active-menu');
  }
})