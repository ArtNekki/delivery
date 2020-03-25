import 'what-input';


//polyfill
import './utils/polyfill';

$('[data-open-modal]').on('click', function() {
  $('html').addClass('page--modal-opened');
});

// modal opening
$(document).on('click', function(e) {

  if($(e.target).attr('data-close-modal')) {
    $('html').removeClass('page--modal-opened');
  }
});
