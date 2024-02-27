import { truncateSummary } from "./utilities.js";

export const tvShowCardTemplate = (tvShowData) => {
  // Check if the rating is null and provide a fallback message
  const rating =
    tvShowData.rating.average === null ? "⭐X" : `⭐${tvShowData.rating.average}`;

  // set placeholder image if not exist
  let imageUrl = "../media/logo.png";

  // Choose image URL based on window width
  if (tvShowData.image) {
    imageUrl =
      window.innerWidth > 450
        ? tvShowData.image.original
        : tvShowData.image.medium;
  }

    // Truncate the summary if it's too long
    const truncatedSummary = truncateSummary(tvShowData.summary, 250);

  return `
    <div class="tv-show-item">
        <div class="tv-show-image" style="background-image: url('${imageUrl}');"></div>
        <div class="tv-show-info">
            <div class="title-and-rating">
                <h2 class="tv-show-title">${tvShowData.name}</h2>
                <span class="tv-show-rating"><b>${rating}</b></span>
            </div>
            <p class="tv-show-genre"><b>Genre: ${tvShowData.genres.join(", ")}</b></p>
            <div class="tv-show-description">${truncatedSummary}</div>
            <a href="${tvShowData.url}">More info</a>
        </div>
    </div>
    `;
};

// Function to insert the Tv Show card into a div container
export const createTvShowCard = (divContainer, tvShowData) => {
  const container = document.querySelector(divContainer);
  container.innerHTML += tvShowCardTemplate(tvShowData);
};
