import {loadData} from './api.js';
import {renderPictures} from './renderPhoto.js';
import {showDataErrorMessage} from './messages.js';
import './filters.js';

let photos = [];

const getSuccess = (data) => {

  photos = data.slice();

  renderPictures(photos);

  document.querySelector('.img-filters').classList.remove('img-filters--inactive');

};

loadData(getSuccess, showDataErrorMessage);

export {photos};
