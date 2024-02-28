import { fetchTVShows } from "./utilities.js";
import { createTvShowCard } from "./template.js";

// Function to fetch and display top-rated shows
const displayTopRatedTvShows = () => {
    fetchTVShows().then(tvShows => {
        // Sort TV shows by rating from high to low
        const sortedTvShows = tvShows.sort((a, b) => {
            const ratingA = a.rating && a.rating.average ? a.rating.average : 0;
            const ratingB = b.rating && b.rating.average ? b.rating.average : 0;
            return ratingB - ratingA;
        });

        // Take the top 100 shows
        const top100TvShows = sortedTvShows.slice(0, 100);

        // Function to get a random'ish selection of shows
        const getRandomShows = (shows, num) => {
            const shuffled = [...shows].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, num);
        };

        // Get 8 random shows from the top 100
        const randomTopRatedTvShows = getRandomShows(top100TvShows, 8);

        const container = document.getElementById("top-rated-tv-shows");
        container.innerHTML = ""; // Clear existing content

        // Use the random shows to create TV show cards
        randomTopRatedTvShows.forEach(tvShow => {
            createTvShowCard("#top-rated-tv-shows", tvShow);
        });
    }).catch(error => console.error("Error fetching top-rated shows:", error));
};

document.addEventListener("DOMContentLoaded", () => {
    displayTopRatedTvShows();
});
