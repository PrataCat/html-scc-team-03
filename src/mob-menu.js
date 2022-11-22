(() => {
  const refs = {
    mobMenuBtn: document.querySelector('[data-menu-btn]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
  };

    refs.mobMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.mobMenuBtn.classList.toggle('is-open');
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();