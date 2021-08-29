// Make a call to the Rawg API.

// THIS IS THE KEY TO USE IN FETCH REQUEST: 137eca6b734a49f186ad4151035f7b65

// Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=137eca6b734a49f186ad4151035f7b65

//Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags(not the tag details, just the amount of tags)

// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async / await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.


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
        resultsContainer.innerHTML = errorMessage("An error occurred when calling the API");
    }
}

getGames();