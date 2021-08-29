const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=137eca6b734a49f186ad4151035f7b65";

const resultsContainer = document.querySelector(".games");


async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const results = data.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            let names = results[i].name;
            let ratings = results[i].rating;
            let tags = results[i].tags.length;

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML +=
                `<div class="gamesinfo"> <h2>Name of game:</h2> ${names}<h2>Rating:</h2> ${ratings} <h2>Amount of tags:</h2> ${tags}</div>`;
        }
    } catch (error) {
        console.log("An error occurred")
        resultsContainer.innerHTML = errorMessage("OPS! An error occurred when calling the API");
    }
}

getGames();