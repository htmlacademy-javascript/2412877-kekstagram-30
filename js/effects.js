const sliderField = document.querySelector('.img-upload__effect-level');
const imageToApplyEffectOn = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

sliderField.classList.add('hidden');

const applyEffect = (effect, filter, options, unit = '') => {
  sliderField.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(options);

  sliderElement.noUiSlider.on('update', () => {
    effectLevel.value = sliderElement.noUiSlider.get();
    imageToApplyEffectOn.style.filter = `${filter}(${effectLevel.value}${unit})`;
  });
};

const chooseEffect = (evt) => {

  if (evt.target.matches('#effect-none')) {

    sliderField.classList.add('hidden');
    imageToApplyEffectOn.style.filter = 'none';

  } else if (evt.target.matches('#effect-chrome')) {

    applyEffect('chrome', 'grayscale', {
      range: { min: 0, max: 1 },
      step: 0.1,
      start: 1
    });

  } else if (evt.target.matches('#effect-sepia')) {

    applyEffect('sepia', 'sepia', {
      range: { min: 0, max: 1 },
      step: 0.1,
      start: 1
    });

  } else if (evt.target.matches('#effect-marvin')) {

    applyEffect('marvin', 'invert', {
      range: { min: 0, max: 100 },
      step: 1,
      start: 100
    }, '%');

  } else if (evt.target.matches('#effect-phobos')) {

    applyEffect('phobos', 'blur', {
      range: { min: 0, max: 3 },
      step: 0.1,
      start: 3
    }, 'px');

  } else if (evt.target.matches('#effect-heat')) {

    applyEffect('heat', 'brightness', {
      range: { min: 1, max: 3 },
      step: 0.1,
      start: 3
    });

  }

};

export {chooseEffect};

/*
Не работает ЗУМ и ручка

const DEFAULT_EFFECT_LEVEL = 100;
const RADIX = 10;
const EFFECTS_STEP = 0.01;
const MAX_BLUR_VALUE = 3;
const MAX_BRIGHTNESS = 3;

const Slider = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
};

const uploadForm = document.querySelector('.img-upload__form');
const effectsList = uploadForm.querySelector('.effects__list');
const imagePreview = uploadForm.querySelector('.img-upload__preview');
const sliderUpload = uploadForm.querySelector('.img-upload__effect-level');
const effectLevelValue = uploadForm.querySelector('.effect-level__value');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const image = imagePreview.querySelector('img');

effectLevelValue.value = DEFAULT_EFFECT_LEVEL;
let currentEffect = '';

sliderUpload.classList.add('visually-hidden');

const effects = {
  none: () => {
    sliderUpload.classList.add('visually-hidden');
    return 'none';
  },

  chrome: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectLevelValue.value, RADIX) * EFFECTS_STEP})`;
  },

  sepia: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevelValue.value, RADIX) * EFFECTS_STEP})`;
  },

  marvin: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `invert(${Math.floor(effectLevelValue.value)}%)`;
  },

  phobos: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `blur(${(parseInt(effectLevelValue.value, RADIX) * MAX_BLUR_VALUE) * EFFECTS_STEP}px)`;
  },

  heat: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `brightness(${(parseInt(effectLevelValue.value, RADIX) * MAX_BRIGHTNESS) * EFFECTS_STEP})`;
  },
};

const onEffectsListClick = (evt) => {
  let target = evt.target;

  if(target.classList.contains('effects__label')) {
    target = evt.target.querySelector('span');
  }

  if(target.classList.contains('effects__preview')) {
    if(currentEffect !== '') {
      image.classList.remove('currentEffect');
    }

    sliderElement.noUiSlider.set(Slider.MAX);
    effectLevelValue.value = Slider.MAX;

    currentEffect = target.classList[1];
    image.classList.add(currentEffect);
    image.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
  }
};

effectsList.addEventListener('click', onEffectsListClick);

noUiSlider.create(sliderElement, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  step: Slider.STEP,
  connect: 'lower',

});

sliderElement.noUiSlider.on('change', () => {
  effectLevelValue.value = sliderElement.noUiSlider.get();

  image.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
});

export {effects, image};
*/
