import Swiper, { Pagination } from 'swiper';

  let achievments = new Swiper('.achievments__slider', {
    modules: [ Pagination],
      observer: true,
      observerParents: true,
      watchOverflow: true,
      speed: 800,
      pagination: {
        el: '.achievments__pagination',
        type: 'bullets',
        clickable: true,
      },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
      }
  });