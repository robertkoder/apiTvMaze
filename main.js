import * as search from "./scripts/search.js";
import { createTvShowCard } from "./scripts/template.js";
import * as randomizer from "./scripts/randomizer.js";

// API: https://www.tvmaze.com/api
const url = "https://api.tvmaze.com/shows"

// Fetch top-rated shows and display them
fetch(url)
    .then(response => response.json())
    .then(tvShows => {
        // basic sort function for now that sorts high to low, only first 6 shows (maybe look into infinite scroll here or smth?)
        const topRatedTvShows = tvShows.sort((a, b) => b.rating.average - a.rating.average).slice(0, 6);

        console.log(tvShows)
        
        topRatedTvShows.forEach(tvShow => {
            createTvShowCard("#top-rated-tv-shows", tvShow);
        });
    })
    .catch(error => console.error("Error fetching top-rated shows:", error)
);