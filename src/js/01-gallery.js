// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let list = document.querySelector('.gallery');

/****** Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. ******/
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join('');

list.insertAdjacentHTML('afterbegin', markup);

/****** add SimpleLightbox ******/
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
  animationSpeed: 600,
});
