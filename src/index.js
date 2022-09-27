import pageload from './pageload';
import contact from './contact';
import menu from './menu';
import clear from './clear';

pageload();

let homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    clear();
    pageload();
  });

let menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    clear();
    menu();
  });

let contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => {
    clear();
    contact();
  });