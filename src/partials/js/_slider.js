import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
