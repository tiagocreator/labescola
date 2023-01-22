import { alunos, cursos } from './data.js';

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

let coursesArr = [];
let courseValue = 0;
let installmentValue = 0;

const shopCartForm = document.querySelector('.shop-cart-form');
shopCartForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const courseInput = document.querySelector('.shop-cart-course');

  if (!coursesArr.includes(courseInput.value)) {
    coursesArr.push(courseInput.value);
  }

  for (let i = 0; i < cursos.length; i++) {
    if (courseInput.value === cursos[i].curso) {
      courseValue += cursos[i].valor;
    }
  }

  installmentValue = document.querySelector('.installments').value;

  const shopCartFormResult = document.querySelector('.installment-form-result');
  shopCartFormResult.innerHTML = `
  <h1>${coursesArr.length < 2 ? 'Curso' : 'Cursos'}</h1>
  <p><strong>${coursesArr.join(', ')}</strong></p>
  <br/>
  <h1>Valor</h1>
  <p>Valor total de <strong>R$:${courseValue},00</strong> dividido em <strong>${installmentValue}</strong> vezes de <strong>${(
    courseValue / installmentValue
  ).toFixed(2)}</strong> reais<p>
    <button class="clear-btn primary-button">Limpar</button>
  `;

  document.querySelector('.installments').value = '';
  courseInput.value = '';

  document.querySelector('.clear-btn').addEventListener('click', () => {
    shopCartFormResult.innerHTML = '';
  });
});
