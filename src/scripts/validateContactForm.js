const form = document.querySelector('.form');
const formControl = document.querySelectorAll('.form-control');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const message = document.querySelector('.message');
const fields = document.querySelectorAll('.requiredField');

function error(field, error) {
  const selectFormCTRL = field.parentElement;
  selectFormCTRL.className = 'form-control error';
  const small = selectFormCTRL.querySelector('small');
  small.innerText = error;
}

function success(field, success) {
  const selectFormCTRL = field.parentElement;
  selectFormCTRL.className = 'form-control success';
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (re.test(email.value.trim())) {
    success(email);
  } else {
    error(email, 'Email inválido');
  }
}

function checkRequeriments(fields) {
  fields.forEach((field) => {
    if (field.value.trim() === '') {
      error(field, `${getFieldsName(field)} é um campo obrigatório`);
    } else {
      success(field);
    }
  });
}

function checkLength(field, min, max) {
  if (field.value.length < min) {
    error(
      field,
      `${getFieldsName(field)} deve ter no mínimo ${min} caracteres.`
    );
  } else if (field.value.length > max) {
    error(
      field,
      `${getFieldsName(field)} deve ter no máximo ${max} caracteres.`
    );
  } else {
    success(field);
  }
}

function getFieldsName(field) {
  const element = field.parentElement;
  const textContent = element.querySelector('label').innerText;
  return textContent;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequeriments([username, email, message]);
  checkLength(username, 4, 20);
  validateEmail(email);
  checkLength(message, 20, 150);
  submitForm();
});

function submitForm() {
  const checkArr = [];

  formControl.forEach(function (form) {
    if (form.classList.contains('success')) {
      checkArr.push(true);
    } else {
      checkArr.push(false);
    }
  });

  const allEqual = (arr) => arr.every((v) => v === true);

  if (allEqual(checkArr)) {
    clearFields();
    showModal();
  }
}

function clearFields() {
  formControl.forEach(function (form) {
    const fields = document.querySelectorAll('.requiredField');
    fields.value = '';
  });
}

function showModal() {
  const modal = document.querySelector('.modal');
  const modalText = document.querySelector('.modal-text');
  const modalLoader = document.querySelector('.loader');
  const modalBtn = document.querySelector('.modal-btn');

  modal.style.display = 'flex';

  setTimeout(function () {
    modalBtn.style.visibility = 'visible';
    modalText.textContent = `Obrigado por entrar em contato ${username.value}, nós retornatemos para o seu endereço de email o mais rápido possível`;
    modalLoader.innerHTML = '<i class="fas fa-check"></i>';
  }, 3000);

  modalBtn.addEventListener('click', function () {
    window.location.href = '/contato.html';
  });
}
