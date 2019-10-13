import $ from 'jquery';

const targetBtn = $('.nav__btn');
const form = $('.popup-form');
const closeBtn = $('.popup-form__cross');

export default (function () {
  targetBtn.on('click', () => {
    $('html, body').css({
      overflow: 'hidden',
    });

    $(form).css({
      display: 'flex',
    });
  });

  closeBtn.on('click', () => {
    $(form).hide();

    $('html, body').css({
      overflow: 'scroll',
    });
  });

  $(window).on('keydown', (e) => {
    if (e.keyCode === 27) {
      form.hide();

      $('html, body').css({
        overflow: 'scroll',
      });
    }
  });
}());
