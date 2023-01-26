let toggleAdmButton = document.querySelector('.toggle-adm-btn');
let hiddenMenu = document.querySelector('.hidden-menu');
toggleAdmButton.addEventListener('click', () => {
  hiddenMenu.classList.toggle('active');
  document.querySelector('.close-btn').classList.toggle('active');
  document.querySelector('.open-btn').classList.toggle('active');
});
