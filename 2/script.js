
  const cards = document.querySelectorAll('.card');
  const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');

  let showingBg1 = true;

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const imageUrl = card.getAttribute('data-bg');
      const newBg = showingBg1 ? bg2 : bg1;
      const oldBg = showingBg1 ? bg1 : bg2;

      // Set the new background image and bring it in
      newBg.style.backgroundImage = `url(${imageUrl})`;
      newBg.style.width = '100%';

      // Hide the previous background
      oldBg.style.width = '0%';

      // Swap tracking flag
      showingBg1 = !showingBg1;
    });
  });

