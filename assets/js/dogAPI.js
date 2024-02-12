const dogPhoto = 'https://dog.ceo/api/breeds/image/random';
// Henter et tilfældig billede af en hund fra et array.
const breedList = 'https://dog.ceo/api/breeds/list/all';
// Henter en liste over alle hunde racer.
const returnImgbyBreed = 'https://dog.ceo/api/breed/hound/images';
// Retunere en array af alle billeder fra en race, i dette tilfælde en "hound".
const returnImgbysubBreed = 'https://dog.ceo/api/breed/hound/list';
// Retunere en liste af en underrace.

// Opret en funktion for at hente data
function fetchData(apiUrl) {
  fetch(apiUrl)
    .then(response => {
      
      return response.json();
    })
    .then(data => {
      // Håndter det modtagne data her
      console.log(data); // Udskriv data til konsollen som et eksempel
    })
}

// Kald funktionen for at starte hentningen af data
fetchData(dogPhoto);
fetchData(breedList);
fetchData(returnImgbyBreed);
fetchData(returnImgbysubBreed);