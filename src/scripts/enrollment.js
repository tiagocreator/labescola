import { alunos } from './data.js';

const newStudentsArr = [...alunos];

const form = document.querySelector('.enrollment-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const studentName = document.querySelector('.name').value;
  const studentCourse = document.querySelector('.course').value;
  const studentClass = document.querySelector('.class').value;
  const studentInstallments = document.querySelector('.installments').value;

  newStudentsArr.push({
    estudante: studentName,
    turma: studentCourse,
    curso: studentClass,
    numeroDeParcelas: studentInstallments,
  });
  showResult();
  console.log(newStudentsArr);
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
};
