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

const showAll = document.querySelector('.show-all');
showAll.addEventListener('click', () => {
  window.location.reload();
});

const searchField = document.querySelector('.search');
const form = document.querySelector('.search-form');
const warning = document.querySelector('.not-found');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  warning.style.display = 'none';
  const containerArr = [];
  const filterSearch = searchField.value.toLowerCase();
  const classes = document.getElementsByClassName('classe-card');
  for (let i = 0; i < classes.length; i++) {
    if (!classes[i].id.toLowerCase().includes(filterSearch)) {
      classes[i].style.display = 'none';
      containerArr.push(classes[i]);
    } else {
      classes[i].style.display = 'initial';
    }
  }

  if (containerArr.length === classes.length) warning.style.display = 'flex';

  searchField.value = '';
});
