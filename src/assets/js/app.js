import 'what-input';


//polyfill
import './utils/polyfill';
import './modules/form-validation';

$(document).ready(function () {

  $('.promo-item b').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
});

$('[data-open-modal]').on('click', function() {
  $('html').addClass('page--modal-opened');
});

$('[data-open-form]').on('click', function() {
  $('html').addClass('page--form-opened');
});

// modal opening
$(document).on('click', function(e) {
  if($(e.target).attr('data-close-modal')) {
    $('html').removeClass('page--modal-opened');
    $('html').removeClass('page--form-opened');
  }
});
