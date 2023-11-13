import {debounce, shuffleArray, sortCommentsArray} from './utils.js';
import {renderPictures} from './renderPhoto.js';
import {photos} from './main.js';

const SHUFFLED_PHOTOS_COUNT = 10;
const ACTIVE_CLASS = 'img-filters__button--active';

const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');

const availableFilters = {
  'filter-default': () => photos.slice(),
  'filter-random': () => shuffleArray(photos.slice()).slice(0, SHUFFLED_PHOTOS_COUNT),
  'filter-discussed': () => sortCommentsArray(photos.slice())
};

const isButton = (evt) => evt.target.tagName === 'BUTTON';

const onImgFiltersFormClick = debounce((evt) => {
  if (isButton(evt)) {
    renderPictures(availableFilters[evt.target.id]());
  }
});

const onButtonClick = (evt) => {
  if (isButton(evt)) {
    const selectedButton = imgFiltersForm.querySelector(`.${ACTIVE_CLASS}`);

    if (selectedButton) {
      selectedButton.classList.remove(ACTIVE_CLASS);
    }

    evt.target.classList.add(ACTIVE_CLASS);
  }
};

imgFiltersForm.addEventListener('click', onImgFiltersFormClick);
imgFiltersForm.addEventListener('click', onButtonClick);
