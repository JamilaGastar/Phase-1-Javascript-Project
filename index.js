document.addEventListener('DOMContentLoaded', function() {

let kanyeQuoteButton = document.getElementById('kanyeQuoteGenerator');
kanyeQuoteButton.addEventListener('click', fetchKanyeQuote);

let praiseHands = document.getElementById('praiseHands');
praiseHands.addEventListener('click', praiseQuote)

let like = document.getElementById('like');
like.addEventListener('click', likeQuote)

let laughingCrying = document.getElementById('laughingCrying');
laughingCrying.addEventListener('click', laughingCryingToQuote)

});

function fetchKanyeQuote() {
const url = "https://api.kanye.rest"
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => showKanyeQuote(data));
}

function showKanyeQuote(data) {
let newQuote = document.getElementById('newQuote')
newQuote.innerHTML = data.quote;

let insertQuote = document.getElementById('insertQuote');
insertQuote.appendChild(newQuote);

let leaveAReaction = document.getElementById('leaveAReaction');
    leaveAReaction.style.visibility = "visible";

}

function praiseQuote() {

    let leaveAReaction = document.getElementById('leaveAReaction');

    let praisedByUser = document.createElement('p');
    praisedByUser.innerHTML= ('&#128588');
    leaveAReaction.appendChild(praisedByUser);

    let reactionEmojis = document.getElementsByClassName('reactionEmoji');
    reactionEmojis.remove();
}

function likeQuote() {
    let leaveAReaction = document.getElementById('leaveAReaction');
    leaveAReaction.style.visibility = "hidden";

}

function laughingCryingToQuote() {
    let leaveAReaction = document.getElementById('leaveAReaction');
    leaveAReaction.style.visibility = "hidden";

}
