const movieCard = document.getElementById('movie-container');
const addMoviebtn = document.getElementById('add-btn');
const formContainer = document.getElementById('form-container');

let movie;
let rating;

// Load data from localStorage
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

// Save to localStorage
function saveWatchlist() {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

// Get input values
function getInput() {
    movie = document.getElementById('movie-name').value.trim();
    rating = document.getElementById('movie-rating').value.trim();

    showCard();
}

// Add movie
function showCard() {

    if (movie === "" || rating === "") {
        alert("Please fill in both fields");
        return;
    }

    watchlist.push({
        movie: movie,
        rating: rating
    });

    saveWatchlist();
    renderMovies();

    document.getElementById('movie-name').value = "";
    document.getElementById('movie-rating').value = "";
}

// Display all movies
function renderMovies() {

    movieCard.innerHTML = "";

    watchlist.forEach((item, index) => {

        movieCard.innerHTML += `
        <div class="movie-card">
            <h2>${item.movie}</h2>
            <p>⭐ Rating: ${item.rating}</p>
            <button class="delete-btn" data-index="${index}">
                Delete
            </button>
        </div>
        `;
    });

}

// Delete movie
movieCard.addEventListener('click', function (e) {

    if (e.target.classList.contains('delete-btn')) {

        const index = e.target.dataset.index;

        watchlist.splice(index, 1);

        saveWatchlist();

        renderMovies();
    }

});

// Add button
addMoviebtn.addEventListener('click', getInput);

// Show movies when page loads
renderMovies();