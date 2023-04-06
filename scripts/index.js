const buttonEditProfile = document.querySelector('.profile__edit-button');
const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');
const buttonAddPlace = document.querySelector('.profile__add-button');
// popup - edit profile
const popupEditProfileElement = document.querySelector('.popup_target_edit-profile');
const formEditProfileElement = document.querySelector('.form[name="formEditProfile"]');
const fioInput = popupEditProfileElement.querySelector('.form__input[name="fio"]');
const jobInput = popupEditProfileElement.querySelector('.form__input[name="job"]');
// popup - add place
const popupAddPlaceElement = document.querySelector('.popup_target_add-place');
const formAddPlaceElement = document.querySelector('.form[name="formAddPlace"]');
const nameInput = formAddPlaceElement.querySelector('.form__input[name="name"]');
const urlInput = formAddPlaceElement.querySelector('.form__input[name="url"]');
// popup - show place
const popupShowPlaceElement = document.querySelector('.popup_target_show-place');
const popupShowPlaceImageElement = popupShowPlaceElement.querySelector('.popup__image');
const popupShowPlaceImageCaptionElement = popupShowPlaceElement.querySelector('.popup__image-caption');
// popup - 3 close buttons
const buttonCloseForm = document.querySelectorAll('.popup__button-close');
// photo cards
const photoCardsContainer = document.querySelector('.elements__container');
const photoCardsTemplate = document.querySelector('.photo-cards').content;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
};

const closePopup = (popupElement) => {
  popupElement.target.closest('.popup').classList.remove('popup_opened');
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

  closePopup(evt);
};

const handleFormAddPlaceSubmit = (evt) => {
  evt.preventDefault();

  const obj = { name: nameInput.value, link: urlInput.value };
  placeCard(obj, photoCardsContainer);

  closePopup(evt);
};

// photo cards
const createCard = (card) => {
  const cardNew = photoCardsTemplate.querySelector('.elements__item').cloneNode(true);
  // populate
  cardNew.querySelector('.photo-card__picture').src = card.link;
  cardNew.querySelector('.photo-card__picture').alt = card.name;
  cardNew.querySelector('.photo-card__title').textContent = card.name;
 // listeners
 set3EventListeners(cardNew);
 return cardNew;
};

const placeCard = (cardObject, container, is_initial=false) => {
  const card = createCard(cardObject);
  if(is_initial)
    container.append(card);
  else
    container.prepend(card);
};

const set3EventListeners = (element) => {
  element.querySelector('.photo-card__button-like').addEventListener('click', handlePhotoCardLike);
  element.querySelector('.photo-card__button-delete').addEventListener('click', handlePhotoCardDelete);
  element.querySelector('.photo-card__picture').addEventListener('click', handlePhotoCardOpen);
}

const handlePhotoCardLike = (evt) => {
  evt.target.classList.toggle('photo-card__button-like_active');
};

const handlePhotoCardDelete = (evt) => {
  evt.target.closest('.elements__item').remove();
};

const handlePhotoCardOpen = (evt) => {
  const url = evt.target.src;
  const caption = evt.target.closest('.photo-card').querySelector('.photo-card__title').textContent;
  popupShowPlaceImageElement.src = url;
  popupShowPlaceImageElement.alt = caption;
  popupShowPlaceImageCaptionElement.textContent = caption;
  openPopup(popupShowPlaceElement);
};

const placeInitialCards = () => {
  initialCards.map(item => placeCard(item, photoCardsContainer, true));
};


placeInitialCards();

buttonEditProfile.addEventListener('click', populatePopupEditProfile);
formEditProfileElement.addEventListener('submit', handleFormEditProfileSubmit);

buttonAddPlace.addEventListener('click', () => { openPopup(popupAddPlaceElement); } );
formAddPlaceElement.addEventListener('submit', handleFormAddPlaceSubmit);

buttonCloseForm.forEach(btn => btn.addEventListener('click', closePopup));
