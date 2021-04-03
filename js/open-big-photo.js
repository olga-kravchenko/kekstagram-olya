'use strict';

const bigPhoto = document.querySelector(`.big-picture`);
const socialComments = bigPhoto.querySelector(`.social__comments`);

const comments = photos[0].comments;

const commentCount = document.querySelector(`.social__comment-count`);
const commentLoader = document.querySelector(`.comments-loader`);

bigPhoto.classList.remove(`hidden`);
commentCount.classList.add(`hidden`);
commentLoader.classList.add(`hidden`);
document.querySelector(`body`).classList.add(`modal-open`);

const createNewElement = (tagName, className, text) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  if (text) {
    newElement.textContent = text;
  }
  return newElement;
};

const cleanContent = (cleaningPlace) => {
  cleaningPlace.innerHTML = ``;
};

const addCommentsToParent = (parent) => {
  cleanContent(socialComments);

  for (let i = 0; i < comments.length; i++) {
    const newComment = createNewElement(`li`, `social__comment`);
    parent.appendChild(newComment);

    const avatar = createNewElement(`img`, `social__picture`);
    avatar.src = comments[i].avatar;
    avatar.alt = comments[i].name;
    newComment.appendChild(avatar);

    const text = createNewElement(`p`, `social__text`, comments[i].message);
    newComment.appendChild(text);
  }
};

const fillBigPhotoByformation = (photo) => {
  bigPhoto.querySelector(`.big-picture__img img`).src = photo.url;
  bigPhoto.querySelector(`.likes-count`).textContent = photo.likes;
  bigPhoto.querySelector(`.comments-count`).textContent = photo.comments.length;
  bigPhoto.querySelector(`.social__caption`).textContent = photo.description;
  addCommentsToParent(socialComments);
};
fillBigPhotoByformation(photos[0]);