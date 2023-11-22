const getRandomPositiveInteger = (number1, number2) => {
  const lower = Math.ceil(Math.min(Math.abs(number1), Math.abs(number2)));
  const upper = Math.floor(Math.max(Math.abs(number1), Math.abs(number2)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const getDebounce = (callback, timeoutDelay = 500) => {

  let timeoutId;

  return (...rest) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

  };
};


const shufflePhotos = (photos) => {
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }
  return photos;
};


const sortPhotos = (photos) => {
  photos.sort((primary, secondary) => secondary.comments.length - primary.comments.length);

  return photos;
};

export {getRandomPositiveInteger, getRandomArrayElement, isEscapeKey, getDebounce, shufflePhotos, sortPhotos};
