import {getRandomArrayElement, getRandomInt, getRandomInteger} from './utils.js';

const PICTURE_COUNT =25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;

const DESCRIPTION = [

  'фото кружки',
  'фото чего другого',
  'ненужное фото',
  'круто получилось',
  'здорово!',
  'вот это да !',
  'попробуй ещё раз',
  'виноград',
  'чайник',
  'классное фото',
  'должно быть норм',

];
const NAME = [
  'Заяц',
  'Волк',
  'программист',
  'нубяра',
  'петух',
  'лиса',
];

const COMMENTS_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Зачётное барахло !',
  'Это нужно посмотреть поближе',
  'Дайте две )',
  'Что за фигня, я сфоткаю лучше...',
  'Можно сделать также'
];

//const getPhotoId = getRandomInt (1,25);
//const getCommentId = getRandomInt (1, 25);
//const getLikes = getRandomInt (1, 200);

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>  Array.from (
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENTS_LINES),
).join('');

const createComment = () => ({
  id: generateCommentId(),
  avatar: 'img/avatar-${ getRandomInteger(1, AVATAR_COUNT)}.svg',
  message: createMessage(),
  name: getRandomArrayElement(NAME)
  //123
});

const generatePhotoId = createIdGenerator();

const createPicture = (index) => ({

  id: generatePhotoId(),
  url: 'photos/${index}.jpg',
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  // eslint-disable-next-line no-use-before-define
  comments: Array.from({length: getRandomInteger (0, COMMENT_COUNT) }, createComment,),

});

const getPhotos = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

getPhotos();

export {getPhotos};
