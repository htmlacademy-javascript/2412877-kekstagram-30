import {getData} from './api.js';
import {renderPictures} from './renderPictures.js';
import {setImgUploadFormSubmit} from './image-upload-form.js';
import {showDataErrorMessage, showStatusMessage} from './status-messages.js';

getData(renderPictures, showDataErrorMessage);

setImgUploadFormSubmit(showStatusMessage);
