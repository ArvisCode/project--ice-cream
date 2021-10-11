(() => {
  function toggleReadMore(e) {
    const dots = e.target.previousElementSibling.querySelector('.products__text--dots');
    const moreText = e.target.previousElementSibling.querySelector('.products__text--more');

    dots.classList.toggle('hidden');
    moreText.classList.toggle('hidden');
  }

  const productBtns = document.getElementsByClassName('products__button');

  Array.from(productBtns).forEach(btn => btn.addEventListener('click', toggleReadMore));
})();
