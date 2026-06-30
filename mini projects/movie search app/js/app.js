import { getMovie } from "./api.js";

import {
    showLoading,
    hideLoading,
    showMovie,
    showError,
    clearError,
    clearMovie
} from "./ui.js";

const searchBtn = document.getElementById("search-btn");
const movieInput = document.getElementById("movie-input");

async function searchMovie() {

    const movie = movieInput.value.trim();

    if (movie === "") {
        alert("Please enter a movie name");
        return;
    }

    try {

        showLoading();
        clearError();

        const data = await getMovie(movie);

        if (data.Response === "False") {
            showError(data.Error);
            clearMovie();
            return;
        }

        showMovie(data);

    }

    catch {

        showError("An error occurred while searching.");

    }

    finally {

        hideLoading();

    }

}

searchBtn.addEventListener("click", searchMovie);