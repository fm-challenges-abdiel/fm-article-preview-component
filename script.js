const button = document.querySelector('.share');
const bubble = document.querySelector('.bubble');

button.addEventListener('click', () => {
  bubble.classList.toggle('show');
  button.classList.toggle('toggled');
});
