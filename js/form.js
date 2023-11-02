import { isEscapeKey } from './utils';

const body = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const fileUpLoad = document.querySelector('#upload-file');
const formUploadClose = document.querySelector('#upload-cancel');
const imagePreview = document.querySelector('.img-upload__preview');

const closeForm = () => {

  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imagePreview.style.transform = '';
  imagePreview.className = 'img-upload__preview';
  imagePreview.style.filter = '';
  formUpload.reset();
};

const onCloseFormEscKeyDown = (evt) => {
  if(isEscapeKey(evt) &&

  evt.target.classList.contains('text__hashtags') &&
  evt.target.classList.contains('text__description')

  ){
    evt.preventDefault();
    closeForm();
    document.removeEventListener('keydown', onCloseFormEscKeyDown);
  }

};

const onFileUploadChange = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onCloseFormEscKeyDown);
};

fileUpLoad.addEventListener('change', onFileUploadChange);

formUploadClose.addEventListener = ('click', () => {

  closeForm();
});
