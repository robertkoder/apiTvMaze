import { searchTVShows } from "./utilities.js";
import { createTopRatedShows } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");

    createTopRatedShows("#search-results", 8)

    if (searchResultsContainer) {
        input.addEventListener("input", (event) => {
            const name = event.target.value.trim();

            // If the search box is empty, clear the results.
            if (name.length === 0) {
                searchResultsContainer.innerHTML = "";
            } else {
                // Otherwise, proceed with the search.
                searchTVShows(name, "#search-results");
            }
        });
    }
});