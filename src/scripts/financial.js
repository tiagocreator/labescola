import { alunos } from './data.js';

const searchField = document.querySelector('.studentName');
const form = document.querySelector('.student-report-form');
const formResult = document.querySelector('.student-report-result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const filterSearch = searchField.value.toLowerCase();
  for (let i = 0; i < alunos.length; i++) {
    const studentName = alunos[i].estudante;
    if (!studentName.toLowerCase().includes(filterSearch)) {
      formResult.innerHTML = '<p>Aluno não encontrado</p>';
    } else {
      const foundStudent = alunos[i];
      return (formResult.innerHTML = `
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
