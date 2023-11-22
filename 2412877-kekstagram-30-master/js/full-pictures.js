import { isEscapeKey } from './utils.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');
const commentsLoaderButton = bigPictureContainer.querySelector('.comments-loader');
const commentsList = bigPictureContainer.querySelector('.social__comments');
const commentsShownCount = bigPictureContainer.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPictureContainer.querySelector('.social__comment-total-count');

let start = 0;
const limit = 5;

let currentPictureComments = [];

const createComment = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = 35;
  commentAvatar.height = 35;

  const commentMessage = document.createElement('p');
  commentMessage.classList.add('social__text');
  commentMessage.textContent = comment.message;

  commentElement.append(commentAvatar, commentMessage);

  return commentElement;
};

const renderComments = (comments) => {
  if (currentPictureComments.length <= limit || start + limit >= currentPictureComments.length) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }

  commentsList.innerHTML = '';
  commentsTotalCount.textContent = currentPictureComments.length;

  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment, index) => {
    if (index < start + limit) {
      commentsFragment.append(createComment(comment));
    }

    commentsList.append(commentsFragment);

    commentsShownCount.textContent = document.querySelectorAll('.social__comment').length;
  });
};

const getLoadCommentsClick = () => {
  start += limit;

  renderComments(currentPictureComments);
};

const closePicture = () => {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');

  commentsList.innerHTML = '';
  start = 0;
  currentPictureComments.splice(0, currentPictureComments.length);
};

const getDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    closePicture();

    document.removeEventListener('keydown', getDocumentKeydown);
    commentsLoaderButton.removeEventListener('click', getLoadCommentsClick);
  }
};

const getCloseBigPictureClick = () => {
  closePicture();

  bigPictureCloseButton.removeEventListener('click', getCloseBigPictureClick);
  commentsLoaderButton.removeEventListener('click', getLoadCommentsClick);
};

const openPicture = (item) => {
  bigPictureContainer.querySelector('.big-picture__img img').src = item.url;
  bigPictureContainer.querySelector('.likes-count').textContent = item.likes;
  bigPictureContainer.querySelector('.social__caption').textContent = item.description;
  commentsShownCount.textContent = start;

  currentPictureComments = item.comments.slice();

  renderComments(currentPictureComments);

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', getDocumentKeydown);
  bigPictureCloseButton.addEventListener('click', getCloseBigPictureClick);
  commentsLoaderButton.addEventListener('click', getLoadCommentsClick);
};

export {openPicture, closePicture};
