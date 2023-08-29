const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'form__input-error_visible'
};

const showInputError = (form, input, config) => {
  input.classList.add(config.inputErrorClass);
  const span = form.querySelector(`.${input.id}Error`);
  span.textContent = input.validationMessage;
  span.classList.add(config.errorClass);
};

const hideInputError = (form, input, config) => {
  input.classList.remove(config.inputErrorClass);
  const span = form.querySelector(`.${input.id}Error`);
  span.textContent = '';
  span.classList.remove(config.errorClass);
};

const isValid = (form, input, config) => {
  if(!input.validity.valid) {
    showInputError(form, input, config);
  } else {
    hideInputError(form, input, config);
  }
};

const hasAnyInvalidValue = (inputs) => {
  return inputs.some((input) => !input.validity.valid);
};

const enableSubmitButton = (button, config) => {
  button.classList.remove(config.inactiveButtonClass);
  button.disabled = false;
};

const disableSubmitButton = (button, config) => {
  button.classList.add(config.inactiveButtonClass);
  button.disabled = true;
};

const toggleSubmitButtonState = (inputs, button, config) => {
  if(hasAnyInvalidValue(inputs))
    disableSubmitButton(button, config);
  else
    enableSubmitButton(button, config);
};

const setEventListenersForValidation = (form, config) => {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);
  toggleSubmitButtonState(inputs, button, config);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(form, input, config);
      toggleSubmitButtonState(inputs, button, config);
    });
  });
  form.addEventListener('reset', () => {
    disableSubmitButton(button, config);
  });
};

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    setEventListenersForValidation(form, config);
  });
};



// enableValidation(validationSettings);
export {validationSettings, enableValidation};


