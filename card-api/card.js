const mainDiv = document.getElementById("display-div");

const searchButton = () => {
  const input = document.getElementById("input-value");
  const error = document.getElementById("error-id");
  //   console.log(error);
  const inputValue = parseInt(input.value);
  //   console.log(inputValue);
  if (isNaN(inputValue) || inputValue == "") {
    error.innerText = "Please input a number";
    input.value = "";
    mainDiv.innerHTML = "";
  } else if (inputValue <= 0) {
    error.innerText = "Please give a positive number";
    input.value = "";
    mainDiv.innerHTML = "";

    // Data is displaying from here
    // Data is displaying from here
  } else {
    mainDiv.innerHTML = "";
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
      .then((res) => res.json())
      .then((data) => cardsDisplay(data.cards));

    input.value = "";
    error.innerHTML = "";
  }
};

const cardsDisplay = (cards) => {
  // cards = cards.cards;
  console.log(cards);

  for (const card of cards) {
    console.log(card.image);
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("mb-5");
    div.innerHTML = ` <div class="card" style="width: 18rem;">
      <img src="${card.image}" class="card-img-top " alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${card.suit}</p>
        <p class="card-text"> Code: ${card.code}</p>
        <button href="#" class="btn btn-primary" onclick="cardDetails('${card.code}')" ">Please see details</button>
      </div>
    </div>
    `;
    mainDiv.appendChild(div);
  }
};

const cardDetails = (code) => {
  fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then((res) => res.json())
    .then((data) => {
      const allCards = data.cards;
      // console.log(allCards);
      const singleCard = allCards.find((card) => card.code === code);
      // console.log(singleCard);

      const div = document.createElement("div");
      mainDiv.innerHTML = "";
      div.innerHTML = ` <div class="card" style="width: 18rem;">
      <img src="${singleCard.image}" class="card-img-top " alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${singleCard.suit}</p>
        <p class="card-text"> Code: ${singleCard.code}</p>
      </div>
    </div>`;
      mainDiv.appendChild(div);
    });
};
