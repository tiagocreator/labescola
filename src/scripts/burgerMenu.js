let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.mobile-nav');
toggleButton.addEventListener('click', () => {
  navBar.classList.toggle('toggle');
  toggleButton.classList.toggle('toggle-btn');
});
