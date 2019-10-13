import $ from 'jquery';

const scrollBtn = $('.btn-scroll');

export default scrollBtn.on('click', () => {
  $('html, body').animate({
    scrollTop: $('.home-footer').offset().top,
  }, 3000);
});
