import {closeIsEscapeDown} from './utils.js'

const COMMENTS_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const pictureCloseButton = document.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const pictureCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comment');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const loadComments = bigPicture.querySelector('.comments-loader');
const socialFooterText = bigPicture.querySelector('.social__footer-text');

let commentsCount = COMMENTS_STEP;
let currentComments = [];


renderComments = () => {

  socialComments.innerHTML = '';

  commentsCount = (commentsCount > currentComments.length) ? currentComments.length : commentsCount;

  const commentsSelected = currentComments.slice(0, commentsCount);

    if (currentComments.length <= COMMENTS_STEP || commentsCount >= currentComments.length) {
    loadComments.classList.add('hidden');
  }else {
  loadComments.classList.remove('hidden');
  }

  //socialCommentsCount.innerHTML = $span class ={commentsCount}$ из $span class ={currentComments.length}$ комментариев;

  const commentFragment = document.createDocumentFragment();

  commentsSelected.forEach((comment) => {
    const newComment = document.createElement('li');
    const imgComment = document.createElement('img');
    const textComment = document.createElement('p');

    newComment.classList.add('social__comment');
    imgComment.classList.add('social__picture');
    textComment.classList.add('social__text');

    imgComment.src = comment.avatar;
    imgComment.alt = comment.name;
    textComment.textContent = comment.message;

    newComment.append(imgComment);
    newComment.append(textComment);

    commentFragment.append(newComment);


});

socialComments.appendChild(commentFragment);

};


const onLoadCommentsButtonClick = () => {
commentsCount += COMMENTS_STEP;
renderComments();

};

const closeBigPicture = () => {
bigPicture.classList.add('hidden');
document.body.classList.remove('modal-open');

commentsCount = COMMENTS_STEP;
currentComments = [];
socialFooterText.value = '';

};


const onBigPictureEscKeyDown = (evt) => {

  closeIsEscapeDown(evt, () => {
    closeBigPicture();

    document.removeEvetListener('keydown', onBigPictureEscKeyDown);
    loadComments.removeEventListener('click', onLoadCommentsButtonClick);

  });
};

const onCloseBigPictureClick = (evt) => {
closeBigPicture();

pictureCloseButton.removeEventListener('click', onCloseBigPictureClick);


};



const showBigPicture = (picture) => {

const {url, comments, likes, description} = picture;

bigPicture.classList.remove('hidden');
document.body.classList.add('modal-open');

bigPictureImage.src = url;
likesCount.textContent = likes;
pictureCaption.textContent = description;

currentComments = comments.slice();

renderComments();

loadComments.addEventListener('click', onLoadCommentsButtonClick);

document.addEventListener('keydown', onBigPictureEscKeyDown);
pictureCloseButton.addEventListener('click', onCloseBigPictureClick);
};

export {showBigPicture};
