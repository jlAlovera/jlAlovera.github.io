document.getElementById('fetchJokeBtn').addEventListener('click', fetchJoke);

async function fetchJoke() {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = 'Loading...';

    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayJoke(data);
    } catch (error) {
        jokeContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayJoke(joke) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = `
        <p><strong>Joke:</strong> ${joke.setup}</p>
        <p><strong>Punchline:</strong> ${joke.punchline}</p>
    `;
}