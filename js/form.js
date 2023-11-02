import { isEscapeKey } from './utils.js';
import {scalePicture} from './scale-photo.js';
import {getErrorMessage, validateHashtags} from './hastags.js';
import { chooseEffect } from './effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('.img-upload__input');
const editForm = document.querySelector('.img-upload__overlay');
const editHashtagsInput = document.querySelector('.text__hashtags');
const editCommentArea = document.querySelector('.text__description');
const editCloseButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const scaleFormField = document.querySelector('.scale');
const effectsList = document.querySelector('.effects__list');

const pristine = new Pristine(uploadForm , {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

const closeImgEditModal = () => {
  editForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  pristine.reset();
  uploadInput.value = '';
  editHashtagsInput.value = '';
  editCommentArea.value = '';
  document.querySelector('.img-upload__preview img').style.transform = 'scale(1)';
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  document.querySelector('.img-upload__preview img').style.filter = 'none';
};

const onImgEditCloseButtonClick = () => {
  closeImgEditModal();

  editCloseButton.removeEventListener('click', onImgEditCloseButtonClick);
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt) &&
  !evt.target.classList.contains('text__hashtags') &&
  !evt.target.classList.contains('text__description')
  ) {
    evt.preventDefault();

    closeImgEditModal();

    document.removeEventListener('keydown', onEscKeydown);
  }
};

const openImgEditModal = () => {
  editForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const onImgUploadButtonChange = () => {
  openImgEditModal();

  editCloseButton.addEventListener('click', onImgEditCloseButtonClick);
  document.addEventListener('keydown', onEscKeydown);
};

uploadInput.addEventListener('change', onImgUploadButtonChange);

scaleFormField.addEventListener('click', scalePicture);

effectsList.addEventListener('click', chooseEffect);

pristine.addValidator(editHashtagsInput, validateHashtags, getErrorMessage);

const ohHashtagInput = () => {
  if (pristine.validate()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

editHashtagsInput.addEventListener('input', ohHashtagInput);

uploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();

  if(!isValid) {
    evt.preventDefault();
  }
});
