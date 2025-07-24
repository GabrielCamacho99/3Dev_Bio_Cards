document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Unflip all cards
      cards.forEach(c => {
        if (c !== card) {
          c.querySelector('.card-inner').classList.remove('flipped');
        }
      });

      // Toggle flipped state on clicked card
      card.querySelector('.card-inner').classList.toggle('flipped');
    });
  });
});