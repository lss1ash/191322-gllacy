// Скрипт для отображения модального окна
var feedback_button = document.querySelector(".feedback");
var modal = document.querySelector(".modal");
var modal_close = document.querySelector(".modal_close");
var modal_form = document.querySelector(".modal form");

feedback_button.addEventListener("click", function(event){
  event.preventDefault();
  modal.classList.toggle("modal_hidden"); // Отобразим окошко
  modal_form.classList.toggle("modal_animated"); // Анимируем окошко
});

modal_close.addEventListener("click", function(event){
  event.preventDefault();
  modal.classList.toggle("modal_hidden"); // Спрячем окошко
  modal_form.classList.toggle("modal_animated"); // Уберём анмацию окошка
});
