// Скрипт для отображения модального окна
var feedback_button = document.querySelector(".feedback");
var modal = document.querySelector(".modal");
var modal_close = document.querySelector(".modal_close");

feedback_button.addEventListener("click", function(event){
  event.preventDefault();
  modal.classList.toggle("modal_hidden"); // Отобразим окошко
});

modal_close.addEventListener("click", function(event){
  event.preventDefault();
  modal.classList.toggle("modal_hidden"); // Спрячем окошко
});
