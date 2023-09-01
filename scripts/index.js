import {initialCards} from './cards-array.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

/** section of profile elements */
const buttonEditProfile = document.querySelector('.profile__edit-button');
const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');
const buttonAddPlace = document.querySelector('.profile__add-button');
/** section of popups */
const popups = Array.from(document.querySelectorAll('.popup'));
/** popup - edit profile */
const popupEditProfileElement = document.querySelector('.popup_target_edit-profile');
const formEditProfileElement = document.forms['formEditProfile'];
const fioInput = popupEditProfileElement.querySelector('.form__input[name="fio"]');
const jobInput = popupEditProfileElement.querySelector('.form__input[name="job"]');
/** popup - add place */
const popupAddPlaceElement = document.querySelector('.popup_target_add-place');
const formAddPlaceElement = document.forms['formAddPlace'];
const nameInput = formAddPlaceElement.querySelector('.form__input[name="name"]');
const urlInput = formAddPlaceElement.querySelector('.form__input[name="url"]');
/** popup - show place */
const popupShowPlaceElement = document.querySelector('.popup_target_show-place');
const popupShowPlaceImageElement = popupShowPlaceElement.querySelector('.popup__image');
const popupShowPlaceImageCaptionElement = popupShowPlaceElement.querySelector('.popup__image-caption');
/** photo cards */
const photoCardsContainer = document.querySelector('.elements__container');
/** validation object */
const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'form__input-error_visible'
};


const closePopupViaClickOnEsc = (evt) => {
  if(evt.code === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

const openCardImage = (url, caption) => {
  popupShowPlaceImageElement.src = url;
  popupShowPlaceImageElement.alt = caption;
  popupShowPlaceImageCaptionElement.textContent = caption;
  openPopup(popupShowPlaceElement);
};

const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupViaClickOnEsc);
};

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupViaClickOnEsc);
};

/** listener which closes the popup: by clicking on overlay or on button X */
const setEventListenersToClosePopups = () => {
  popups.forEach((popup) => {
    popup.addEventListener('mouseup', (evt) => {
      const targetClassList = evt.target.classList;
      if(targetClassList.contains('popup') || targetClassList.contains('popup__button-close')) {
        closePopup(popup);
      }
    })
  });
};

const openPopupEditProfile = () => {
  fioInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
  openPopup(popupEditProfileElement);
};

const handleFormEditProfileSubmit = (evt) => {
  evt.preventDefault();

  nameElement.textContent = fioInput.value;
  jobElement.textContent = jobInput.value;

  closePopup(popupEditProfileElement);
};

const createPhotoCard = (cardData) => {
  return new Card(cardData, '.photo-cards', openCardImage).createCard();
};

const placeInitialCards = () => {
  initialCards.map(item => {
    photoCardsContainer.append(createPhotoCard(item));
  });
};

const handleFormAddPlaceSubmit = (evt) => {
  evt.preventDefault();

  const cardData = { name: nameInput.value, link: urlInput.value };
  photoCardsContainer.prepend(createPhotoCard(cardData));

  formAddPlaceElement.reset();

  closePopup(popupAddPlaceElement);
};

const handleAddPlaceOpen = () => {
  openPopup(popupAddPlaceElement);
};

/**
 * @param {object} config
 */
const startValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    const validator = new FormValidator(config, form);
    validator.enableValidation();
  });
};


placeInitialCards();
setEventListenersToClosePopups();
startValidation(validationSettings);

buttonEditProfile.addEventListener('click', openPopupEditProfile);
formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);

buttonAddPlace.addEventListener('click', handleAddPlaceOpen);
formAddPlaceElement.addEventListener('submit', handleFormAddPlaceSubmit);
