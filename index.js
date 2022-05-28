document.addEventListener('DOMContentLoaded', function() {

//slideshow of Kanye Images begins when document loads, changes to random images in object every .9 seconds//
let imgElement = document.querySelector('figure#imagesSlideshow img')
let images = ['./kanyeImages/img1.jpg', './kanyeImages/img2.jpg', './kanyeImages/img3.jpg', './kanyeImages/img4.jpg', './kanyeImages/img5.jpg', './kanyeImages/img6.jpg', './kanyeImages/img7.jpg', './kanyeImages/img8.jpg', './kanyeImages/img9.jpg', './kanyeImages/img10.jpg', './kanyeImages/img11.jpg', './kanyeImages/img12.jpg', './kanyeImages/img13.jpg', './kanyeImages/img14.jpg'];
setInterval(function(){
    let random = Math.floor(Math.random() * 14);
    imgElement.src = images[random];
}, 900);

//On quote button click, envokes fetchKanyeQuote, createLikes and clearlikes functions
let kanyeQuoteButton = document.getElementById('kanyeQuoteGenerator');
kanyeQuoteButton.addEventListener('click', function() {
    fetchKanyeQuote();
    createLikes();
    clearLikes();
});

//On heart symbol click, toggles colour and like vs unlike
let heartSymbol = document.getElementById('like-symbol');
heartSymbol.addEventListener('click', function() {
    heartSymbol.classList.toggle("liked");

    if (heartSymbol.className=== ("liked")) {
        like();
    } else if (heartSymbol.className === ('')) {
        unlike();
    }

});


function fetchKanyeQuote() {
const url = "https://api.kanye.rest"
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => showKanyeQuote(data));
}

function showKanyeQuote(data) {
let newQuote = document.getElementById('newQuote')
newQuote.innerHTML = `"${data.quote}"`;

let insertQuote = document.getElementById('insertQuote');
insertQuote.appendChild(newQuote);

}

function createLikes() {
let heartSymbol = document.getElementById('like-symbol')
heartSymbol.innerHTML= ('&#x2665');
heartSymbol.classList.remove("liked");
}

let likeCount = 0;
function like() {
likeCount++;
const newLike = document.getElementById('likeCount'); 
newLike.innerHTML = `${likeCount} Likes`;
}

function clearLikes() {
likeCount = 0;
const newLike = document.getElementById('likeCount'); 
newLike.innerHTML = `${likeCount} Likes`;
}

function unlike() {
    likeCount--;
    const newLike = document.getElementById('likeCount'); 
    newLike.innerHTML = `${likeCount} Likes`;
}

}














)
