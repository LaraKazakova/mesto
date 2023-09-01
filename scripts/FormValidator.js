export class FormValidator {

  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._formInputs = Array.from(form.querySelectorAll(config.inputSelector));
    this._button = form.querySelector(config.submitButtonSelector);
    this._inputCurrent = null;
  };

  _showInputError() {
    this._inputCurrent.classList.add(this._config.inputErrorClass);
    const span = this._form.querySelector(`.${this._inputCurrent.id}Error`);
    span.textContent = this._inputCurrent.validationMessage;
    span.classList.add(this._config.errorClass);
  };

  _hideInputError() {
    this._inputCurrent.classList.remove(this._config.inputErrorClass);
    const span = this._form.querySelector(`.${this._inputCurrent.id}Error`);
    span.textContent = '';
    span.classList.remove(this._config.errorClass);
  };

  _isValid() {
    if(!this._inputCurrent.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  };

  _hasAnyInvalidValue() {
    return this._formInputs.some((input) => !input.validity.valid);
  };

  _enableSubmitButton() {
    this._button.classList.remove(this._config.inactiveButtonClass);
    this._button.disabled = false;
  };

  _disableSubmitButton() {
    this._button.classList.add(this._config.inactiveButtonClass);
    this._button.disabled = true;
  };

  _toggleSubmitButtonState() {
    if(this._hasAnyInvalidValue()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  _setEventListenersForValidation() {
    this._formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._inputCurrent = input;
        this._isValid();
        this._toggleSubmitButtonState();
      });
    });
    this._form.addEventListener('reset', () => {
      this._disableSubmitButton();
    });
  };

  enableValidation() {
    this._toggleSubmitButtonState();
    this._setEventListenersForValidation();
  };

}
