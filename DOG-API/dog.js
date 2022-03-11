// https://api.thedogapi.com/v1/breeds

// console.log("testing");

const loadDog = () => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((rest) => rest.json())
    .then((data) => displayDog(data));
};

const displayDog = (dogList) => {
  console.log(dogList);
};
