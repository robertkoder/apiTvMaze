import { createTvShowCard } from "./template.js";

export function searchTVShows(name, divContainer) {
    const searchUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(name)}`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(results => {
            // The search endpoint wraps each show in a { show: {...} } object
            const shows = results.map(result => result.show);

            // Clear previous content in the container
            document.querySelector(divContainer).innerHTML = "";

            // Use the shows to create TV show cards
            shows.forEach(tvShow => {
                // Ensure that `createTvShowCard` can handle the TV show object structure
                // You might need to adapt it if it's specifically tailored to the shows endpoint
                createTvShowCard(divContainer, tvShow);
            });
        })
        .catch(error => console.error("Error searching for TV shows:", error));
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');

    input.addEventListener('input', (event) => {
        const name = event.target.value.trim();

        // If the search box is empty, clear the results.
        if (name.length === 0) {
            searchResultsContainer.innerHTML = '';
        } else {
            // Otherwise, proceed with the search.
            searchTVShows(name, '#search-results'); // Adjust the selector as necessary
        }
    });
});