import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = item =>
  item.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
<div class="gallery__item">
  <a class="gallery__link" rel="nofollow, noopener, noreferrer" download="" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
    ''
  );

const galleryDiv = document.querySelector('.gallery');
galleryDiv.insertAdjacentHTML('beforeend', galleryList(galleryItems));

galleryDiv.addEventListener('click', ImgClick);

function ImgClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) return;
  const modalImg = basicLightbox.create(
    `<img width="800" height="600" src="${e.target.dataset.source}">`
  );
  modalImg.show();

  galleryDiv.addEventListener('keydown', EscPress);
  EscPress();
}

function EscPress(e) {
  if (e?.code !== 'Escape') return;

  const modal = document.querySelector('.modal');
  modal.remove();
  galleryDiv.removeEventListener('keydown', EscPress);
}
