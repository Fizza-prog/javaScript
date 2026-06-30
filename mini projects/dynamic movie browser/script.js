const allMoviesBtn = document.getElementById('all-btn');
const actionMoviesBtn = document.getElementById('action-btn');
const romanceMoviesBtn = document.getElementById('romance-btn');
const SciFiMoviesBtn = document.getElementById('sci-fi-btn');
const sortByRatingBtn = document.getElementById('sort-btn');

const movieContainer = document.getElementById('movie-container');

const MovieContainer = [
    {title: "Dabang", genre: "Action", rating: 8.5},
    {title: "The Notebook", genre: "Romance", rating: 7.8},
    {title: "Interstellar", genre: "Sci-Fi", rating: 9.2},
    {title: "Mission Impossible", genre: "Action", rating: 8.0},
    {title: "Kabhi Khushi Kabhi Gham", genre: "Romance", rating: 7.5},
    {title: "Lucy", genre: "Sci-Fi", rating: 9.0},
    {title: "Singham", genre: "Action", rating: 8.3},
    {title: "My Fault", genre: "Romance", rating: 7.9},
    {title: "Oppenheimer", genre: "Sci-Fi", rating: 9.1},
    {title: "Spider-Man", genre: "Action", rating: 8.2},
];

function displayMovies(MovieContainer) {

    const cards = MovieContainer.map(movie => {
        return `
            <div class="movie-card">
                <h2>${movie.title}</h2>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
            </div>
        `;
    });

    movieContainer.innerHTML = cards.join("");
}

function displayRomanceMovies() {
    const romanceMovies =
        MovieContainer.filter(movie => movie.genre === "Romance");

    displayMovies(romanceMovies);
}

function displayActionMovies() {
    const actionMovies =
        MovieContainer.filter(movie => movie.genre === "Action");

    displayMovies(actionMovies);
}

function displaySciFiMovies() {
    const sciFiMovies =
        MovieContainer.filter(movie => movie.genre === "Sci-Fi");

    displayMovies(sciFiMovies);
}

function sortMoviesByRating() {
    const sortedMovies =
        [...MovieContainer].sort((a, b) => b.rating - a.rating);

    displayMovies(sortedMovies);
}

allMoviesBtn.addEventListener('click', () => {
    displayMovies(MovieContainer);
});

actionMoviesBtn.addEventListener('click', () => {
    displayActionMovies();
});

romanceMoviesBtn.addEventListener('click', () => {
    displayRomanceMovies();
});

SciFiMoviesBtn.addEventListener('click', () => {
    displaySciFiMovies();
});

sortByRatingBtn.addEventListener('click', () => {
    sortMoviesByRating();
});

displayMovies(MovieContainer);