const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPage = 1;
const cardsPerPage = 10;

function showCards() {
  cards.forEach((card, index) => {
    if (index < currentPage * cardsPerPage && index >= (currentPage - 1) * cardsPerPage) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

showCards();

prevBtn.addEventListener('click', () => {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
  }
  showCards();
});

nextBtn.addEventListener('click', () => {
  const maxPage = Math.ceil(cards.length / cardsPerPage);

  currentPage++;
  
  if (currentPage > maxPage) {
    currentPage = maxPage;
  }
  showCards();
});
