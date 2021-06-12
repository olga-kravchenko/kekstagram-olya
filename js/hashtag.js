'use strict';

const MAX_QUANTITY = 5;
const REG_EX = /^#[\w\d]{1,19}(\s|$)/i;

const Message = {
  NO_ERROR: ``,
  ERROR_IN_HASHTAG: `Хэштег начинается с # и длинной не больше 19 символов`,
  ERROR_IN_QUANTITY: `Хэштегов должно быть не больше 5`,
  ERROR_IN_UNIQUE: `Хэштеги должны быть уникальные`,
};

const form = document.querySelector(`.img-upload__form`);
const hashtagInput = form.querySelector(`.text__hashtags`);

let currentErrorMessage;

const onInputResetMessage = () => {
  hashtagInput.setCustomValidity(Message.NO_ERROR);
  hashtagInput.reportValidity();
};

const checkUniqueHashtag = (hashtags) => {
  let isValidity = hashtags.length === new Set(hashtags).size;
  currentErrorMessage = isValidity ? Message.NO_ERROR : Message.ERROR_IN_UNIQUE;
  return isValidity;
};

const checkWithRegex = (hashtags) => {
  let isValidity;
  isValidity = hashtags.every((hashtag) => REG_EX.test(hashtag));
  currentErrorMessage = isValidity ? Message.NO_ERROR : Message.ERROR_IN_HASHTAG;
  return isValidity;
};

const check = () => {
  let isValidity;
  let hashtags = hashtagInput.value.trim().split(` `);
  const isEmpty = hashtagInput.value.trim() === window.constants.EMPTY_STRING;
  if (isEmpty) {
    isValidity = true;
  } else if (hashtags.length > MAX_QUANTITY) {
    isValidity = false;
    currentErrorMessage = Message.ERROR_IN_QUANTITY;
  } else {
    isValidity = checkWithRegex(hashtags);
    if (isValidity === true) {
      isValidity = checkUniqueHashtag(hashtags);
    }
  }
  return isValidity;
};

const showErrorMessage = () => {
  hashtagInput.setCustomValidity(currentErrorMessage);
  hashtagInput.reportValidity();
};

const addListeners = () => {
  hashtagInput.addEventListener(`input`, onInputResetMessage);
};

window.hashtag = {
  check,
  addListeners,
  showErrorMessage,
};
