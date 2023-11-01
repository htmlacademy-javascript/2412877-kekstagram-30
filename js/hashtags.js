const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;

const inputHashtag = document.querySelector('.text__hashtags');

const addBorder = () => inputHashtag.style.border = '2px solid red';

const removeBorder = () => inputHashtag.style.border = 'none';

const onHashtagInput = () => {
  inputHashtag.setCustomValidity('');

  const inputText = inputHashtag.value.toLowerCase().trim();

  if(!inputText) {
    removeBorder();
    return;
  }

  const inputArray = inputText.split(/\s+/);

  if(inputArray.length === 0) {
    removeBorder();
    return;
  };

  const invalidMessage = [];
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

    {
      check: inputArray.some((item) => item.indexOf('#', 1) => 1),
      error: 'Хэштеги разделяются пробелами',
    },

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
};
