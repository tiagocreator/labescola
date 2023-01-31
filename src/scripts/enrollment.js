import { alunos } from './data.js';

const newStudentsArr = [...alunos];

let checkboxesArr = [];
const checkboxes = document.querySelectorAll('.checkbox');
const studentCourse = document.querySelector('.course');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (!checkboxesArr.includes(checkbox.value)) {
      checkboxesArr.push(checkbox.value);
    } else {
      checkboxesArr.pop(checkbox.value);
    }
    studentCourse.value = checkboxesArr.join(', ');
  });
});

const form = document.querySelector('.enrollment-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const studentName = document.querySelector('.name').value;
  const studentClass = document.querySelector('.class').value;
  const studentInstallments = document.querySelector('.installments').value;

  newStudentsArr.push({
    estudante: studentName,
    turma: studentClass,
    curso: (studentCourse.value = checkboxesArr.join(', ')),
    numeroDeParcelas: studentInstallments,
  });
  showResult();
});

const showResult = () => {
  const resultContainer = document.querySelector('.form-result');
  resultContainer.innerHTML = `
    <h1>Aluno Matriculado<img src="./src/img/success.png" alt="" /></h1>
    <p>Nome: <span>${
      newStudentsArr[newStudentsArr.length - 1].estudante
    }</span></p>
    <p>Curso: <span>${
      newStudentsArr[newStudentsArr.length - 1].curso
    }</span></p>
    <p>Turma: <span>${
      newStudentsArr[newStudentsArr.length - 1].turma
    }</span></p>
  `;
  form.reset();
  checkboxesArr = [];
  studentCourse.value = '';
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};
