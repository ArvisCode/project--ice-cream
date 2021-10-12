(() => {
    const refs = {
    openModalBtnContacts: document.querySelector('[data-modal-open-contacts]'),
    closeModalBtnContacts: document.querySelector('[data-modal-close-contacts]'),
    modalContacts: document.querySelector('[data-modal-contacts]'),
   
  };

  refs.openModalBtnContacts.addEventListener('click', toggleModal);
  refs.closeModalBtnContacts.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalContacts.classList.toggle('is-hidden');
  }
})();