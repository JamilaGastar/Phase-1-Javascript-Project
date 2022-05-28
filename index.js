document.addEventListener('DOMContentLoaded', function() {

let imgElement = document.querySelector('figure#imagesSlideshow img')
let images = ['./kanyeImages/img1.jpg', './kanyeImages/img2.jpg', './kanyeImages/img3.jpg', './kanyeImages/img4.jpg', './kanyeImages/img5.jpg', './kanyeImages/img6.jpg', './kanyeImages/img7.jpg', './kanyeImages/img8.jpg', './kanyeImages/img9.jpg', './kanyeImages/img10.jpg', './kanyeImages/img11.jpg', './kanyeImages/img12.jpg', './kanyeImages/img13.jpg', './kanyeImages/img14.jpg'];

    setInterval(function(){
    let random = Math.floor(Math.random() * 14);
    imgElement.src = images[random];
}, 900);

let kanyeQuoteButton = document.getElementById('kanyeQuoteGenerator');
kanyeQuoteButton.addEventListener('click', fetchKanyeQuote);

let praiseHands = document.getElementById('praiseHands');
praiseHands.addEventListener('click', praiseQuote)

let like = document.getElementById('like');
like.addEventListener('click', likeQuote)

let laughingCrying = document.getElementById('laughingCrying');
laughingCrying.addEventListener('click', laughingCryingToQuote)

});

// titleBlinker = setInterval(function () {
//     let title = document.querySelector('h1');
//     title.style.visibility = (title.style.visibility == 'hidden' ? '' : 'hidden');
// }, 1000);


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

// let leaveAReaction = document.getElementById('leaveAReaction');
//     leaveAReaction.style.visibility = "visible";

}

function praiseQuote() {

    // let leaveAReaction = document.getElementById('leaveAReaction');

    // let praisedByUser = document.createElement('p');
    // praisedByUser.innerHTML= ('PRAISE KANYE');
    // leaveAReaction.appendChild(praisedByUser);

}

function likeQuote() {
    let leaveAReaction = document.getElementById('leaveAReaction');
    leaveAReaction.style.visibility = "hidden";

}

function laughingCryingToQuote() {
    let leaveAReaction = document.getElementById('leaveAReaction');
    leaveAReaction.style.visibility = "hidden";

}
