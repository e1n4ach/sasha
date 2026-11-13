const heart = document.querySelector('.heart');
const note = document.querySelector('.heart-note');

heart.addEventListener('click', () => {
  note.textContent = 'и ещё тысяча сердечек ♥';
  heart.classList.remove('is-beating');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => heart.classList.add('is-beating'));
  });
});
