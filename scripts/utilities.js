import { createTvShowCard } from "./template.js";

// Function to fetch tv shows
export const fetchTVShows = () => {
    return fetch("https://api.tvmaze.com/shows")
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error("Error fetching shows:", error);
      });
};

// Function to truncate the summary to a maximum length
export const truncateSummary = (summary, maxLength) => {
    if (summary.length > maxLength) {
        return summary.substring(0, maxLength) + "..."; // Truncate and add ellipsis
    }
    return summary;
};

// Function to create a div with X amount of top rated shows
export function createTopRatedShows(divContainer, count = 6) {
    fetchTVShows().then(tvShows => {
        // Sort TV shows by rating from high to low, then slice to get the first X shows
        const topRatedTvShows = tvShows.sort((a, b) => b.rating.average - a.rating.average).slice(0, count);

        // Clear previous content in the container
        document.querySelector(divContainer).innerHTML = "";

        // Use the sorted shows to create TV show cards
        topRatedTvShows.forEach(tvShow => {
            createTvShowCard(divContainer, tvShow);
        });
    })
    .catch(error => console.error("Error fetching top-rated shows:", error));
}