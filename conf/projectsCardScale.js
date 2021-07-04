window.onload = () => {
  let cards = document.getElementsByClassName("card");
  let cardsSpace = document.getElementsByClassName("cardSpace");
  let cardMaxH;

  if (cards.length > 0) {
    cardMaxH = cards[0].offsetHeight;
  }
  for (let i = 0; i < cards.length; i++) {
    if (cardMaxH < cards[i].offsetHeight) {
      cardMaxH = cards[i].offsetHeight;
    }
  }

  for (let i = 0; i < cards.length; i++) {
    cardsSpace[i].style.height = cardMaxH-cards[i].offsetHeight+"px";
    cards[i].style.height = cardMaxH + "px";
  }
}