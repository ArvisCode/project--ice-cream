(() => {
    const refs = {
    openModalBtnMade: document.querySelector('[data-modal-open-made]'),
    closeModalBtnMade: document.querySelector('[data-modal-close-made]'),
     modalMade: document.querySelector('[data-modal-made]'),
   
  };

  refs.openModalBtnMade.addEventListener('click', toggleModal);
  refs.closeModalBtnMade.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalMade.classList.toggle('is-hidden');
  }
})();