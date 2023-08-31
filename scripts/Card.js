export class Card {

  constructor(cardObject, cardTemplate, openPopupFunction) {
    this._cardName = cardObject.name;
    this._cardLink = cardObject.link;
    this._cardTemplate = document.querySelector(cardTemplate).content.querySelector('.elements__item');
    this._cardNew = this._cardTemplate.cloneNode(true);
    this._cardElementPicture = this._cardNew.querySelector('.photo-card__picture');
    this._cardElementTitle = this._cardNew.querySelector('.photo-card__title');
    this._cardElementButtonLike = this._cardNew.querySelector('.photo-card__button-like');
    this._cardElementButtonDelete = this._cardNew.querySelector('.photo-card__button-delete');
    this._openPopupFunction = openPopupFunction;
  };

  _createCard() {
    this._cardElementPicture.src = this._cardLink;
    this._cardElementPicture.alt = this._cardName;
    this._cardElementTitle.textContent = this._cardName;
  };

  _setEventListeners() {
    this._cardElementButtonLike.addEventListener('click', () => {this._handlePhotoCardLike()});
    this._cardElementButtonDelete.addEventListener('click', () => {this._handlePhotoCardDelete()});
    this._cardElementPicture.addEventListener('click', () => {this._handlePhotoCardOpen()});
  }

  _handlePhotoCardLike() {
    this._cardElementButtonLike.classList.toggle('photo-card__button-like_active');
  };

  _handlePhotoCardDelete() {
    this._cardNew.remove();
  };

  _handlePhotoCardOpen() {
    this._openPopupFunction(this._cardLink, this._cardName);
  };

  placeCard() {
    this._createCard();
    this._setEventListeners();
    return this._cardNew;
  };
}
