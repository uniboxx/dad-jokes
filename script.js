const jokeEl = document.querySelector(`#joke`);
const jokeBtn = document.querySelector(`#jokeBtn`);

async function fetchJoke() {
  try {
    const jokeUrl = `https://icanhazdadjoke.com/`;
    const config = {
      headers: { Accept: 'application/json' },
    };
    const res = await fetch(jokeUrl, config);
    console.log(res);
    const data = await res.json();
    console.log(data);
    jokeEl.textContent = data.joke;
  } catch (err) {
    console.error(err);
  }
}

fetchJoke();

jokeBtn.addEventListener('click', fetchJoke);
