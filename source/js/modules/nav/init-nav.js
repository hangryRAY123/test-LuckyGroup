import {FocusLock} from '../../utils/focus-lock';

export const initNav = () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  const header = document.querySelector('.header');
  const isEscapeKey = (key) => key === 'Escape';
  const focus = new FocusLock();

  header.classList.remove('header--nojs');
  navList.style.top = '-150vh';

  const navClose = () => {
    navList.style.top = '-150vh';
    focus.unlock();
  };

  const navOpen = () => {
    navList.style.top = '-30px';
    focus.lock('.nav__list');
  };

  const onEscKeydown = (evt) => {
    if (isEscapeKey(evt.key)) {
      evt.preventDefault();
      navClose();
      navToggle.classList.toggle('is-active');
    }
  };

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('is-active');
      if (navList.style.top !== '-150vh') {
        navClose();
        document.removeEventListener('keydown', onEscKeydown);
      } else {
        navOpen();
        document.addEventListener('keydown', onEscKeydown);
      }
    });
  }
};
