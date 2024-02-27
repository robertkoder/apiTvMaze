import { createTvShowCard } from "./scripts/template.js";

export const fetchTVShows = () => {
    return fetch("https://api.tvmaze.com/shows")
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error("Error fetching shows:", error);
      });
};

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