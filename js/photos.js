import { showBigPicture } from "./big-picture";


const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = (picture) => {

const {url, comments, likes, description} = picture;
const pictureElement = pictureTemplate.cloneNode(true);

pictureElement.querySelector('.picture__img').src = url;
pictureElement.querySelector('.picture__comments').textContent = comments.length;
pictureElement.querySelector('.picture__likes').textContent = likes;
pictureElement.querySelector('.picture__img').alt = description;


const onPictureElementClick = (evt) => {
evt.preventDefault();

showBigPicture(picture);

};

pictureElement.addEventListener('click', onPictureElementClick);

return pictureElement;

};

const renderPhotos = (photos) => {

const fragment = document.createDocumentFragment();


photos.forEach((item) => {

fragment.append(renderPhoto(item));


});

pictures.append(fragment);

};

export {renderPhotos};
