import { alunos, cursos } from './data.js';

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

let courseValue = 0;
let studentInstallments = 0;

const form = document.querySelector('.enrollment-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const studentName = document.querySelector('.name').value;
  const studentClass = document.querySelector('.class').value;
  studentInstallments = document.querySelector('.installments').value;

  for (let i = 0; i < checkboxesArr.length; i++) {
    for (let j = 0; j < cursos.length; j++) {
      if (checkboxesArr[i] === cursos[j].curso) {
        courseValue += cursos[j].valor;
      }
    }
  }

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

  const installmentDiscout = () => {
    let discount = 20;
    return studentInstallments <= 2
      ? courseValue - courseValue * (discount / 100)
      : courseValue;
  };

  const coursesDiscount = () => {
    let discountPercentage = 0;
    if (checkboxesArr.length < 2) {
      return discountPercentage;
    } else if (checkboxesArr.length === 2) {
      discountPercentage = 10;
      return (courseValue * discountPercentage) / 100;
    } else {
      discountPercentage = 15;
      return (courseValue * discountPercentage) / 100;
    }
  };

  const totalValue = () => {
    return installmentDiscout() - coursesDiscount();
  };

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
    <br/>
    <p>O valor do pagamento é de R$:${totalValue()},00${
    studentInstallments <= 2 ? ' com 20% de desconto em até 2 parcelas' : ''
  }${
    checkboxesArr.length === 2
      ? ', na compra de 2 cursos, tem um desconto adicional de 10%'
      : checkboxesArr.length === 3
      ? ', na compra de 3 cursos, tem um desconto adicional de 15%'
      : ''
  }.</p>
    <br/>
    <p>Parcelado em ${studentInstallments}</strong> ${
    studentInstallments > 1 ? 'vezes' : 'vez'
  } de R$:${(totalValue() / studentInstallments).toFixed(2)} reais.</p>
  `;
  form.reset();
  courseValue = 0;
  checkboxesArr = [];
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};
