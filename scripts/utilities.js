import { createTvShowCard } from "./template.js";

// Function to fetch tv shows
export const fetchTVShows = () => {
  return fetch("https://api.tvmaze.com/shows")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching shows:", error);
    });
};

export const fetchTVShowsById = (id) => {
  const response = fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching shows:", error);
    });
  return response;
};

// Function to truncate the summary to a maximum length
export const truncateSummary = (summary, maxLength) => {
    if (summary.length > maxLength) {
        return summary.substring(0, maxLength) + "..."; // Truncate and add ellipsis
    }
    return summary;
};

// Function to create a div with X amount of top rated shows
export const createTopRatedShows = (divContainer) => {
  fetchTVShows().then(tvShows => {
      // Sort TV shows by rating from high to low
      const sortedTvShows = tvShows.sort((a, b) => {
          const ratingA = a.rating && a.rating.average ? a.rating.average : 0;
          const ratingB = b.rating && b.rating.average ? b.rating.average : 0;
          return ratingB - ratingA;
      });

      // Function to get a random'ish selection of shows
      const getRandomShows = (shows, num) => {
          const shuffled = [...shows].sort(() => 0.5 - Math.random());
          return shuffled.slice(0, num);
      };

      // Get 8 random shows from the top 100
      const randomTopRatedTvShows = getRandomShows(sortedTvShows, 8);

      const container = document.querySelector(divContainer);
      container.innerHTML = ""; // Clear existing content

      // Use the random shows to create TV show cards
      randomTopRatedTvShows.forEach(tvShow => {
          createTvShowCard(divContainer, tvShow);
      });
  }).catch(error => console.error("Error fetching top-rated shows:", error));
};
