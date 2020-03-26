import 'just-validate/dist/js/just-validate';

document.addEventListener('DOMContentLoaded', function() {
  new window.JustValidate('#feedback', {
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        phone: true
      },
      text: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Укажите имя"
      },
      phone: {
        required: "Укажите телефон",
        phone: "Телефон указан неверно"
      },
      text: {
        required: "Это поле не может быть пустым"
      },
    }
  });
});
