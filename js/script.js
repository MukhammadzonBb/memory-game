document.addEventListener('DOMContentLoaded', () => {
  const cardItem = document.querySelectorAll('.card');
  const resetBtn = document.querySelector('.reset-btn');
  let cardsArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

  function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
  shuffle(cardsArr)

  for (let i = 0; i < cardsArr.length; i++) {
    cardItem[i].textContent = cardsArr[i]
  }

  let card1 = null;
  let card2 = null;
  let openedCards = [];

  cardItem.forEach(el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('card-opened') || document.querySelectorAll('.card-opened').length === 2) return
      el.classList.add('card-opened')
      openedCards.push(el)

      card1 = openedCards[0];
      card2 = openedCards[1];

      if (openedCards.length === 2) {
        if (card1.innerHTML != card2.innerHTML) {
          setTimeout(() => {
            card1.classList.remove('card-opened');
            card2.classList.remove('card-opened');
          }, 800)
        } else {
          card1.classList.remove('card-opened');
          card2.classList.remove('card-opened');
          card1.classList.add('card-success');
          card2.classList.add('card-success');
        }
        openedCards.splice(0, 2);
      }

      if (document.querySelectorAll('.card-success').length === cardsArr.length) resetBtn.classList.toggle('display');
    })
  })

  resetBtn.addEventListener('click', () => {
    resetBtn.classList.toggle('display')
    cardItem.forEach(el => {
      el.classList.remove('card-success');
      shuffle(cardsArr);

      for (let i = 0; i < cardsArr.length; i++) {
        cardItem[i].textContent = cardsArr[i];
      }
    })
  })

})
