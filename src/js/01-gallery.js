// Described in documentation;
import SimpleLightbox from 'simplelightbox';

// Additional styles import
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Create Gallery
const galleryContainer = document.querySelector('.gallery');

const galleryImage = galleryItems.map(element => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('galery__link');
  galleryLink.href = element.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = element.preview;
  image.alt = element.description;

  galleryLink.appendChild(image);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
});

galleryContainer.append(...galleryImage);

// Initialization of SimpleLightbox
const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 200,
  fadeSpeed: 300,
});
