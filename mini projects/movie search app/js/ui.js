const loading = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");
const movieCard = document.getElementById("movie-container");

export function showLoading() {
    loading.style.display = "block";
}

export function hideLoading() {
    loading.style.display = "none";
}

export function showError(message) {
    errorMessage.textContent = message;
}

export function clearError() {
    errorMessage.textContent = "";
}

export function showMovie(data) {

    movieCard.innerHTML = `
        <div class="card">
            <img src="${data.Poster}" alt="${data.Title}">

            <div class="card-body">
                <h2>${data.Title}</h2>

                <p>Year: ${data.Year}</p>

                <p>IMDb Rating: ${data.imdbRating}</p>
            </div>
        </div>
    `;
}

export function clearMovie() {
    movieCard.innerHTML = "";
}