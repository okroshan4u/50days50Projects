
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const bg = card.getAttribute('data-bg');
    document.body.style.background = `${bg}, #34398C`; // Fallback color
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  });

  card.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#34398C';
    document.body.style.filter = 'none';
  });
});



