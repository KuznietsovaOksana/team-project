const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoHeight: true,
  grabCursor: true,
});
