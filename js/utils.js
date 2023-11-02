function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];



const Keys = {
  ESCAPE : 'Escape',
  ESC : 'Esc',

};

const isEscapeKey = (evt) => evt.key === Keys.ESCAPE || evt.key === Keys.ESC;

const closeIsEscapeDown = (evt, cb) => {
  if (isEscapeKey(evt)) {
    cb();
  };
};



export {getRandomArrayElement, getRandomInt, isEscapeKey, closeIsEscapeDown, getRandomInteger};
