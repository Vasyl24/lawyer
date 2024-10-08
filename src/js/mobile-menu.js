const burgerBtn = document.querySelector('#burger-btn');
const burgerIcon = document.querySelector('#burger-icon');
const crossIcon = document.querySelector('#cross-icon');
const mobMenu = document.querySelector('#mob-menu');

burgerBtn.addEventListener('click', () => {
  toggleClasses();
});

mobMenu.addEventListener('click', onClickMenu);

function toggleClasses() {
  burgerIcon.classList.toggle('hidden');
  burgerIcon.classList.toggle('visible');

  crossIcon.classList.toggle('hidden');
  crossIcon.classList.toggle('visible');

  mobMenu.classList.toggle('hidden-menu');
  mobMenu.classList.toggle('visible-menu');

  if (mobMenu.classList.contains('visible-menu')) {
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = '';
    document.documentElement.style.overflowY = '';
  }
}

function onClickMenu(evt) {
  if (evt.target.nodeName !== 'A') {
    return;
  }

  toggleClasses();
}
