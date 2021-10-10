(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    links: document.querySelectorAll('.mobile-menu__link')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.links.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  
  }
})();