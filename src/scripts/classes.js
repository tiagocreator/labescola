import { turmas } from './data.js';

const renderClasses = () => {
  let output = '';
  turmas.map((turma) => {
    output += `
    <div class="classe-card" id=${turma.turma}>
      <h1>${turma.turma}</h1>
      <p>Curso: <span>${turma.curso}</span></p>
      <p>Início: <span>${turma.inicio}</span></p>
      <p>Término: <span>${turma.término}</span></p>
      <p>Número de alunos: <span>${turma.numeroDeAlunos}</span></p>
      <p>Período: <span>${turma.periodo}</span></p>
      <p>Concluído: <span>${turma.concluida ? 'Sim' : 'Não'}</span></p>
    </div>
    `;
  });
  const classesGrid = document.querySelector('.classes-grid');
  classesGrid.innerHTML = output;
};
renderClasses();

const searchField = document.querySelector('.search');
const form = document.querySelector('.search-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const filterSearch = searchField.value.toLowerCase();
  const classes = document.getElementsByClassName('classe-card');
  for (let i = 0; i < classes.length; i++) {
    if (!classes[i].id.toLowerCase().includes(filterSearch)) {
      classes[i].style.display = 'none';
    } else {
      classes[i].style.display = 'initial';
    }
  }
  searchField.value = '';
});
