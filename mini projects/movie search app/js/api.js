const API_KEY = "78e2bdd6";
const BASE_URL = "https://www.omdbapi.com/";

export async function getMovie(movie) {

    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&t=${movie}`
    );

    return await response.json();
}