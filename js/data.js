import {getRandomArrayElement, getRandomInt} from './utils.js';

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
  'лиса'
];

const MESSAGE_FIRST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'];
const MESSAGE_SECOND = [ 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getPhotoId = getRandomInt (1,25);
const getCommentId = getRandomInt (1, 25);
const getLikes = getRandomInt (1, 200);


const addPhoto = () => ({

  id: getPhotoId(),
  url: 'photos/${ getRandomArrayElement(1, 25)}.jpg',
  description: getRandomArrayElement(DESCRIPTION),
  likes: getLikes(),
  comments: Array.from({length: getRandomInt (0, 30) }, addComment)

});

const addComment = () => ({
  id: getCommentId(),
  avatar: 'img/avatar-${ getRandomArrayElement(1, 6) } .svg',
  message: '${getRandomArrayElement(MESSAGE_FIRST) } ${ getRandomArrayElement(MESSAGE_SECOND)}',
  name: getRandomArrayElement(NAME)
  //123
});
  //123
const getPictures = Array.from({length: 25}, addPhoto);

export{getPictures};
