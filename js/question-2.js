const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=137eca6b734a49f186ad4151035f7b65";

const gamesContainer = document.querySelector(".games");


async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const results = data.results;

        gamesContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            let names = results[i].name;
            let ratings = results[i].rating;
            let tags = results[i].tags.length;

            if (i === 8) {
                break;
            }

            gamesContainer.innerHTML +=
                `<div class="gamesinfo"> 
                <h2>Name of game:</h2> 
                <p>${names}</p>
                <h2>Rating:</h2> 
                <p>${ratings}</p>
                <h2>Amount of tags:</h2> 
                <p>${tags}</p>
                </div>`;
        }
    } catch (error) {
        console.log("An error occurred")
        gamesContainer.innerHTML = errorMessage("OPS! An error occurred when calling the API");
    }
}

getGames();