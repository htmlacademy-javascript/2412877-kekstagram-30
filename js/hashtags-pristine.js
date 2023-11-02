const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;


const buttonSubmit = document.querySelector('#upload-submit')
const formUpload = document.querySelector('.img-upload__form');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__item',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__item',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error',
});

const inputHashtag = document.querySelector('.text__hashtags');

let errorMessage = '';

const error = () => errorMessage;

const hashtagHandler = (value) => {
  errorMessage = '';

  const inputText = value.toLowerCase().trim();

  if(!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

  if(inputArray.length === 0) {
    return;
  }

  const rules = [
    {
      check: inputArray.some((item) => item === '#'),
      error: 'Хештэг не может состоять только из одной решётки',
    },

    {
      check: inputArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хештэг содержит недопустимые символы',
    },

    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хештэг должен начинаться с символа #',
    },

    //{
      //check: inputArray.some((item) => item.indexOf('#', 1) => 1),
      //error: 'Хэштеги разделяются пробелами',
   // },

    {
      check: inputArray.some((item, num, arr) => arr.includes(item, num + 1)),
      error: 'Хэштеги не должны повторяться'
    },

    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS),
      error: 'Максимальная длина одного Хэштега ${MAX_SYMBOLS} символов, включая решётку',
    },

    {
      check: inputArray.length > MAX_HASHTAGS,
      error: 'Нельзя указать больше ${MAX_HASHTAGS} хештегов',
    },
  ];

  return.rules.every((rule) => {
    const isInvalid = rule.check;
    if(isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

pristine.addValidator(inputHashtag, hashtagHandler, error, 2, false);

const onHashtagInput = () => {
  if(pristine.validate()) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
};

inputHashtag.addEventListener('input', onHashtagInput);

formUpload.addEventListener('submit', (evt) => {
evt.preventDefault();

pristine.validate();
});

export {inputHashtag};
