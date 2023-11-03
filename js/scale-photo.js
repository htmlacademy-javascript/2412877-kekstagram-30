const SCALE_STEP = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_MIN_VALUE = 25;

const scaleControlInput = document.querySelector('.scale__control--value');
const defaultImg = document.querySelector('.img-upload__preview img');


const scalePicture = (evt) => {

  let scaleControlInputValue = parseInt(scaleControlInput.value, 10);

  if (scaleControlInputValue < SCALE_MAX_VALUE) {

    if (evt.target.matches('.scale__control--bigger')) {
      scaleControlInputValue += SCALE_STEP;
    }

  }

  if (scaleControlInputValue > SCALE_MIN_VALUE) {

    if (evt.target.matches('.scale__control--smaller')) {
      scaleControlInputValue -= SCALE_STEP;
    }

  }

  const scaleFactor = scaleControlInputValue / 100;
  scaleControlInput.value = `${scaleControlInputValue}%`;
  defaultImg.style.transform = `scale(${scaleFactor})`;
};

export {scalePicture};

/*const Zoom = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const body = document.querySelector('body');
const scaleControlInput = document.querySelector('.scale__control--value');
const defaultImg = document.querySelector('.img-upload__preview');// img
const minusButton = body.querySelector('.scale__control--smaler');
const plusButton = body.querySelector('.scale__control--bigger');

const changeZoom = (factor = 1) => {
  let size = parseInt(scaleControlInput.value, 10) + (Zoom.STEP * factor);

  if(size < Zoom.MIN) {
    size = Zoom.MIN;
  }

  if(size > Zoom.MAX) {
    size = Zoom.MAX
  }

  scaleControlInput.value = `${size}%`;
  defaultImg.style.transform = `scale(${size / 100})`;

};

const onMinusButtonClick = () => {
  changeZoom(-1);
};

const onPlusButtonClick = () => {
  changeZoom();
};

minusButton.addEventListener('click', onMinusButtonClick);
plusButton.addEventListener('click', onPlusButtonClick);
*/
