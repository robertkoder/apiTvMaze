export const tvShowCardTemplate = (tvShowData) => {
    return `
    <div class="show-item">
        <div class="tv-show-image" style="background-image: url('${tvShowData.image ? tvShowData.image.medium : null}');"></div>
        <div class="tv-show-info">
            <div class="title-and-rating">
                <h2 class="tv-show-title">${tvShowData.name}</h2>
                <span class="tv-show-rating">⭐${tvShowData.rating.average}</span>
            </div>
            <p class="tv-show-genre">Genre: ${tvShowData.genres.join(", ")}</p>
            <div class="tv-show-description">${tvShowData.summary}</div>
        </div>
    </div>
    `;
};
  
// Function to insert the Tv Show card into a div container
export const createTvShowCard = (divContainer, tvShowData) => {
    const container = document.querySelector(divContainer);
    container.innerHTML += tvShowCardTemplate(tvShowData);
};