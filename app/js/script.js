const body = document.querySelector('body');
const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

header.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    //Close menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function (el) {
      el.classList.remove('fade-in');
      el.classList.add('fade-out');
    });
  } else {
    //open menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function (el) {
      el.classList.remove('fade-out');
      el.classList.add('fade-in');
    });
  }
});
