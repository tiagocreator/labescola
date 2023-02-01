import { alunos, cursos } from './data.js';

//Formulario Estudantes
const searchField = document.querySelector('.studentName');
const studentsForm = document.querySelector('.student-report-form');
const studentsFormResult = document.querySelector('.student-report-result');

studentsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const filterSearch = searchField.value.toLowerCase();
  for (let i = 0; i < alunos.length; i++) {
    const studentName = alunos[i].estudante;
    if (!studentName.toLowerCase().includes(filterSearch)) {
      studentsFormResult.innerHTML = '<p>Aluno não encontrado</p>';
    } else {
      const foundStudent = alunos[i];
      return (studentsFormResult.innerHTML = `
      <p>Aluno: <span>${foundStudent.estudante}</span></p>
      <p>Turma: <span>${foundStudent.turma}</span></p>
      <p>Curso: <span>${foundStudent.curso}</span></p>
      <p>Valor total: <span>${foundStudent.valor}</span></p>
      <p>Valor parcela: <span>${foundStudent.valorDaParcela}</span></p>
      <p>N.º parcelas: <span>${foundStudent.numeroDeParcelas}</span></p>
      `);
    }
  }
  searchField.value = '';
});

//Formulario Financeiro
let checkboxesArr = [];

const checkboxes = document.querySelectorAll('.checkbox');
const shopCartCourse = document.querySelector('.shop-cart-course');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (!checkboxesArr.includes(checkbox.value)) {
      checkboxesArr.push(checkbox.value);
    } else {
      checkboxesArr.pop(checkbox.value);
    }
    shopCartCourse.value = checkboxesArr.join(', ');
  });
});

let courseValue = 0;
let installmentValue = 0;

const shopCartForm = document.querySelector('.shop-cart-form');
shopCartForm.addEventListener('submit', (e) => {
  e.preventDefault();

  for (let i = 0; i < checkboxesArr.length; i++) {
    for (let j = 0; j < cursos.length; j++) {
      if (checkboxesArr[i] === cursos[j].curso) {
        courseValue += cursos[j].valor;
      }
    }
  }

  const calculateDiscout = () => {
    let discount = 20;
    return installmentValue <= 2
      ? courseValue - courseValue * (discount / 100)
      : courseValue;
  };

  installmentValue = document.querySelector('.installments').value;
  const shopCartFormResult = document.querySelector('.installment-form-result');
  shopCartFormResult.innerHTML = `
  <h1>${checkboxesArr.length < 2 ? 'Curso' : 'Cursos'}</h1>
  <p><strong>${checkboxesArr.join(', ')}</strong></p>
  <br/>
  <h1>Valor</h1>
  <p>Valor total de <strong>R$:${calculateDiscout()},00</strong> dividido em <strong>${installmentValue}</strong> ${
    installmentValue > 1 ? 'vezes' : 'vez'
  } de <strong>${(calculateDiscout() / installmentValue).toFixed(
    2
  )}</strong> reais.</p>
  ${
    installmentValue <= 2
      ? '<p>Foi condedido um desconto de <strong>20%.</strong></p>'
      : ''
  }
    <button class="clear-btn primary-button">Limpar</button>
  `;

  shopCartForm.reset();
  courseValue = 0;
  checkboxesArr = [];
  shopCartCourse.value = '';
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  document.querySelector('.installments').value = '';

  document.querySelector('.clear-btn').addEventListener('click', () => {
    shopCartFormResult.innerHTML = '';
  });
});
