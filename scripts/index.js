import {initialCards} from './cards-array.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';


const buttonEditProfile = document.querySelector('.profile__edit-button');
const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');
const buttonAddPlace = document.querySelector('.profile__add-button');
// popups
const popups = Array.from(document.querySelectorAll('.popup'));
// popup - edit profile
const popupEditProfileElement = document.querySelector('.popup_target_edit-profile');
const formEditProfileElement = document.forms['formEditProfile'];
const fioInput = popupEditProfileElement.querySelector('.form__input[name="fio"]');
const jobInput = popupEditProfileElement.querySelector('.form__input[name="job"]');
// popup - add place
const popupAddPlaceElement = document.querySelector('.popup_target_add-place');
const formAddPlaceElement = document.forms['formAddPlace'];
const nameInput = formAddPlaceElement.querySelector('.form__input[name="name"]');
const urlInput = formAddPlaceElement.querySelector('.form__input[name="url"]');
// popup - show place
const popupShowPlaceElement = document.querySelector('.popup_target_show-place');
const popupShowPlaceImageElement = popupShowPlaceElement.querySelector('.popup__image');
const popupShowPlaceImageCaptionElement = popupShowPlaceElement.querySelector('.popup__image-caption');
// photo cards
const photoCardsContainer = document.querySelector('.elements__container');


const closePopupViaClickOnEsc = (evt) => {
  if(evt.code === 'Escape')
    closePopup(document.querySelector('.popup_opened'));
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

// listeners to close popups: by clicking on overlay and button X
const setEventListenersToClosePopups = () => {
  popups.forEach((popup) => {
    popup.addEventListener('mouseup', (evt) => {
      const targetClassList = evt.target.classList;
      if(targetClassList.contains('popup') || targetClassList.contains('popup__button-close'))
        closePopup(popup);
    })
  });
};

const populatePopupEditProfile = () => {
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

const handleFormAddPlaceSubmit = (evt) => {
  evt.preventDefault();

  const obj = { name: nameInput.value, link: urlInput.value };
  const card = new Card(obj, '.photo-cards', openCardImage);
  photoCardsContainer.prepend(card.placeCard());

  formAddPlaceElement.reset();

  closePopup(popupAddPlaceElement);
};

const handleAddPlaceOpen = () => {
  openPopup(popupAddPlaceElement);
};

buttonEditProfile.addEventListener('click', populatePopupEditProfile);
formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);

buttonAddPlace.addEventListener('click', handleAddPlaceOpen);
formAddPlaceElement.addEventListener('submit', handleFormAddPlaceSubmit);

setEventListenersToClosePopups();


// photo cards
const placeInitialCards = () => {
  initialCards.map(item => {
    const card = new Card(item, '.photo-cards', openCardImage);
    photoCardsContainer.append(card.placeCard());
  });
};
placeInitialCards();


// validation
const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'form__input-error_visible'
};

const startValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    const validator = new FormValidator(config, form);
    validator.enableValidation();
  });
};

startValidation(validationSettings);
