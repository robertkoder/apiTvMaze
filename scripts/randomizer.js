import { createTvShowCard } from "./utilities.js";
import { fetchTVShowsById } from "./utilities.js";

const buttonEl = document.querySelector("#randomizer-btn");
const divEl = document.querySelector("#random-show-card");

// 74970

// first page only has 250 shows use ?page=0 for more

// random number from 1 to 74970
// fetch from https://api.tvmaze.com/shows/74970 with given random number

const generateRandomShow = async () => {
  const randomNumber = Math.floor(Math.random() * 74970);
  let randomShow = await fetchTVShowsById(randomNumber);
  console.log(randomShow);
  if (randomShow.status == 404 || !randomShow.summary) {
    console.log("Error or no summary, fetching a different show...");
    return generateRandomShow(); // Return the result of the recursive call
  } else {
    return randomShow;
  }
};

buttonEl.addEventListener("click", async () => {
  divEl.innerHTML = "";

  const randomShow = await generateRandomShow();
  if (randomShow) {
    createTvShowCard("#random-show-card", randomShow);
  }
});
