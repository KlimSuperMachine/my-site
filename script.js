let page = document.querySelector('.page');
let button = document.querySelector('.theme-button');

button.onclick = function () {
  page.classList.toggle('dark-theme');
  
  if (page.classList.contains('dark-theme')) {
    button.textContent = 'Night';
  } else {button.textContent = 'Day'}
};