const buttonEditProfile = document.querySelector('.profile-block__edit-button');
let nameElement = document.querySelector('.profile-block__title');
let jobElement = document.querySelector('.profile-block__subtitle');
let popupElement = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input[name="fio"]');
let jobInput = formElement.querySelector('.form__input[name="job"]');
const buttonCloseForm = document.querySelector('.popup__button-close');

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

buttonEditProfile.addEventListener('click', handlePopupOpen);
formElement.addEventListener('submit', handleFormSubmit);
buttonCloseForm.addEventListener('click', handlePopupClose);
