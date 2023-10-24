
const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = (photo) => {

const pictureElement = pictureTemplate.cloneNode(true);

pictureElement.querySelector('.picture__img').src = photo.url;
pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
pictureElement.querySelector('.picture__likes').textContent = photo.likes;


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
