document.addEventListener('DOMContentLoaded', function() {

let kanyeQuoteButton = document.getElementById('kanyeQuoteGenerator');
kanyeQuoteButton.addEventListener('click', fetchKanyeQuote);
});

function fetchKanyeQuote() {
const url = "https://api.kanye.rest"
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => showKanyeQuote(data));
}

function showKanyeQuote(data) {

let newQuote = document.createElement('p');
newQuote.innerHTML = data.quote;

document.querySelector("div").appendChild(newQuote);
}
