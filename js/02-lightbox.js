import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryList = item =>
  item.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
        <li class="gallery">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        </li>
        `,
    ''
  );

const galleryDiv = document.querySelector('.gallery');

galleryDiv.insertAdjacentHTML('beforeend', galleryList(galleryItems));

galleryDiv.addEventListener('click', evt => {
  evt.preventDefault();
});

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 1000,
  captionType: 'attr',
  captionsData: 'alt',
  overlayOpacity: 0.9,
  animationSpeed: 500,
  docClose: false,
});
