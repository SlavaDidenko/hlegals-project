import Swiper, { Pagination } from 'swiper';

  let team = new Swiper('.team__slider', {
    modules: [ Pagination],
      observer: true,
      observerParents: true,
      slidesPerView: 1,
      spaceBetween: 128,
      watchOverflow: true,
      speed: 800,
      pagination: {
        el: '.team__pagination',
        type: 'bullets',
        clickable: true,
      },
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    // },
  });