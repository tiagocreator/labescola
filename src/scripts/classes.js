import { turmas } from './data.js';

const renderClasses = () => {
  let output = '';
  turmas.map((turma) => {
    output += `
    <div class="classe-card">
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
