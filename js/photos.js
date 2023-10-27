
const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = (url, description, comments, likes) => {

const createThumbnail = pictureTemplate.cloneNode(true);

thumbnail.querySelector('.picture__img').src = url;
thumbnail.querySelector('.picture__comments').textContent = comments.length;
thumbnail.querySelector('.picture__comments').textContent = comments.length;
thumbnail.querySelector('.picture__likes').textContent = likes;
thumbnail.querySelector('.picture__img').alt = description;

return thumbnail;


};

const renderThumbnails = (pictures) => {

const fragment = document.createDocumentFragment();


pictures.forEach((picture) => {

  const thumbnail = createThumbnail(picture)
  fragment.append(thumbnail);

});

container.append(fragment);

};

export {renderThumbnails};
