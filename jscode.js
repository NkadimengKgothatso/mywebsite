// script.js
const url = "https://meme-api.com/gimme";

async function loadMeme() {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("meme-image").src = data.url;
    document.getElementById("meme-title").innerText = data.title;
    document.getElementById("author").innerText = "Posted by: " + data.author;
}