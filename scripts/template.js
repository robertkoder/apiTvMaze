export const tvShowCardTemplate = (tvShowData) => {
    // Check if the rating is null and provide a fallback message
    const rating = tvShowData.rating.average === null ? "X" : `⭐${tvShowData.rating.average}`;

    // Choose image URL based on window width
    const imageUrl = window.innerWidth > 450 ? tvShowData.image.original : tvShowData.image.medium;

    return `
    <div class="tv-show-item">
        <div class="tv-show-image" style="background-image: url('${imageUrl}');"></div>
        <div class="tv-show-info">
            <div class="title-and-rating">
                <h2 class="tv-show-title">${tvShowData.name}</h2>
                <span class="tv-show-rating">${rating}</span>
            </div>
            <p class="tv-show-genre">Genre: ${tvShowData.genres.join(", ")}</p>
            <div class="tv-show-description">${tvShowData.summary}</div>
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