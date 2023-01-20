import { cursos } from './data.js';

const renderCourses = () => {
  let output = '';
  cursos.map((curso) => {
    output += `
    <div class="card">
      <h1>${curso.curso}</h1>
      <p>${curso.descrição}</p>
    </div>
    `;
  });
  const coursesCard = document.querySelector('.courses-card');
  coursesCard.innerHTML = output;
};
renderCourses();
