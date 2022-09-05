import Swiper, {Scrollbar , Pagination } from 'swiper';

if (document.querySelector('.experience__slider')) {
  let names = [];
  let slides = document.querySelectorAll('.experience__slider .swiper-slide');
  slides.forEach(element => {
    let nameSlide = element.getAttribute('data-name');
      names.push(nameSlide);
  });

  let experience = new Swiper('.experience__slider', {
    modules: [ Pagination , Scrollbar],
      observer: true,
      observerParents: true,
      slidesPerView: 1,
      spaceBetween: 128,
      watchOverflow: true,
    speed: 800,
    direction: 'horizontal',
      // Dotts
      pagination: {
          el: '#experience__pagination',
          clickable: true,
          renderBullet: function (index, className) {
              return '<span class="pagination__item ' + className + '">' + (names[index]) + '</span>';
          }
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },
    breakpoints: {
      // when window width is >= 480px
      768: {
        direction:'vertical',
      },
      // when window width is >= 640px
      300: {
        direction: 'horizontal',
      }
    }
  });
}