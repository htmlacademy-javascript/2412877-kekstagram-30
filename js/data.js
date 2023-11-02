import {getRandomInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const PHOTO_COUNT = 25;

const Likes = {
  MIN: 15,
  MAX: 200
};

const Comments = {
  MIN: 0,
  MAX: 30
};

const Avatars = {
  MIN: 1,
  MAX: 6
};

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AUTHOR_NAMES = [
  'Артемида',
  'Афина',
  'Афродита',
  'Зевс',
  'Танатос',
  'Никс',
  'Загрей',
  'Аид',
  'Ахиллес',
  'Арес',
  'Дионис'
];

const DESCRIPTIONS = [
  'Снимок заката на океане, где небо окрашено в яркие оттенки оранжевого и розового.',
  'Портрет счастливой семьи, гуляющей в парке, улучшающей летний день.',
  'Фотография пышных гор на фоне ясного голубого неба.',
  'Макро снимок капель дождя на листьях, отражающих мир в своих каплях.',
  'Архитектурный кадр с изогнутым мостом в городском парке.',
  'Морская панорама с величественными волнами и маяком на горизонте.',
  'Пейзаж с горным хребтом, покрытым снегом, и заснеженной деревней внизу.',
  'Мистический лес с солнечными лучами, проникающими сквозь деревья.',
  'Фото цветущего вишневого дерева в весеннем саду.',
  'Портрет собаки, счастливо играющей на пляже.',
  'Городской пейзаж с ночными огнями и множеством автомобилей.',
  'Макро снимок падающих капель дождя на асфальте.',
  'Портрет молодой художницы, окруженной своими произведениями.',
  'Абстрактное искусство с яркими красками и геометрическими фигурами.',
  'Пейзаж с золотистыми полями и старой ветряной мельницей.',
  'Фотография старинного книжного магазина с полками, набитыми книгами.',
  'Архитектурный снимок древнего замка с мостом через ров.',
  'Снимок городской улицы в дождливый день, отражающейся в мокрых асфальтовых дорогах.',
  'Портрет молодой балерины в костюме, выполняющей изящные движения.',
  'Морской закат с игрой отражений на воде и мягкими пастельными оттенками.'
];

const addComment = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${ getRandomPositiveInteger(Avatars.MIN, Avatars.MAX) }.svg`,
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(AUTHOR_NAMES)
});

const addComments = () => {
  const commentsArr = [];
  for (let i = 0; i < getRandomPositiveInteger(Comments.MIN, Comments.MAX); i++) {
    commentsArr.push(addComment(i));
  }
  return commentsArr;
};

const addPhoto = (index) => ({
  id: index + 1,
  url: `photos/${ index + 1 }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(Likes.MIN, Likes.MAX),
  comments: addComments()
});

const generatedPhotos = [];
const addPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    generatedPhotos.push(addPhoto(i));
  }
  return generatedPhotos;
};
const photos = addPhotos();
export {photos};













/*import {getRandomArrayElement, getRandomInteger} from './utils.js';

const PICTURE_COUNT = 25;
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
  name: getRandomArrayElement(NAME),
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
*/
