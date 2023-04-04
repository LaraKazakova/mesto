const buttonEditProfile = document.querySelector('.profile__edit-button');
const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');
const popupElement = document.querySelector('.popup');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__input[name="fio"]');
const jobInput = formElement.querySelector('.form__input[name="job"]');
const buttonCloseForm = document.querySelector('.popup__button-close');
// photo cards
const photoCardsTemplate = document.querySelector('.photo-cards');
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
const photoCardsContainer = document.querySelector('.elements__container');

function handlePopupOpen() {
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
  popupElement.classList.add('popup_opened');
}

function handlePopupClose() {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  handlePopupClose();
}

// photo cards
function createCard(card) {
  const cardsTemplate = photoCardsTemplate.content;
  const cardNew = cardsTemplate.querySelector('.elements__item').cloneNode(true);
  // populate
  cardNew.querySelector('.photo-card__picture').src = card.link;
  cardNew.querySelector('.photo-card__picture').alt = card.name;
  cardNew.querySelector('.photo-card__title').textContent = card.name;
 // listeners
 cardNew.querySelector('.photo-card__button-like').addEventListener('click', handlePhotoCardLike);
 cardNew.querySelector('.photo-card__button-delete').addEventListener('click', handlePhotoCardDelete);
 cardNew.querySelector('.photo-card__picture').addEventListener('click', handlePhotoCardOpen);
 return cardNew;
}
function placeCard(cardObject, container) {
  const card = createCard(cardObject);
  container.prepend(card);
}

function handlePhotoCardLike() {
  console.log('like this photo-card');
}
function handlePhotoCardDelete() {
  console.log('delete this photo-card');
}
function handlePhotoCardOpen() {
  console.log('open this photo-card');
}

function placeInitialCards() {
  initialCards.map(item => placeCard(item, photoCardsContainer));
}
placeInitialCards();


buttonEditProfile.addEventListener('click', handlePopupOpen);
formElement.addEventListener('submit', handleFormSubmit);
buttonCloseForm.addEventListener('click', handlePopupClose);
