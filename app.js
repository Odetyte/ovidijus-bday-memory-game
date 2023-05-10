document.addEventListener("DOMContentLoaded", (e) => {
console.log(e);
cardGenerator();
board();
});

const playerLivesCount = document.querySelector('span');
let playerlives = 10;
playerLivesCount.textContent = playerlives

const cardGenerator = () => {
//We generate the object 🧑🏻‍💻
let cardData = [
{imgSrc: './images/Ovidijus1.JPG', id: 1, name: "ovidijus1" },
{imgSrc: './images/Ovidijus2.JPG', id: 2, name: "ovidijus2" },
{imgSrc: './images/Ovidijus3.JPG', id: 3, name: "ovidijus3"},
{imgSrc: './images/Ovidijus4.JPG', id: 4, name: "ovidijus4"},
{imgSrc: './images/Ovidijus6.JPG', id: 5, name: "ovidijus6"},
{imgSrc: './images/Ovidijus7.JPG', id: 6, name: "ovidijus7"},
{imgSrc: './images/Ovidijus8.JPG', id: 7, name: "ovidijus8"},
{imgSrc: './images/Ovidijus9.JPG', id: 8, name: "ovidijus9"},
{imgSrc: './images/Ovidijus1.JPG', id: 9, name: "ovidijus1"},
{imgSrc: './images/Ovidijus2.JPG', id: 10, name: "ovidijus2"},
{imgSrc: './images/Ovidijus3.JPG', id: 11, name: "ovidijus3"},
{imgSrc: './images/Ovidijus4.JPG', id: 12, name: "ovidijus4"},
{imgSrc: './images/Ovidijus6.JPG', id: 13, name: "ovidijus6"},
{imgSrc: './images/Ovidijus7.JPG', id: 14, name: "ovidijus7"},
{imgSrc: './images/Ovidijus8.JPG', id: 15, name: "ovidijus8"},
{imgSrc: './images/Ovidijus9.JPG', id: 16, name: "ovidijus9"}
];
//We need to shuffle the cards 🃏
cardData.sort(() => Math.random() - 0.5);
//We generate the cards ♣️
cardData.forEach((item) => {
const section = document.querySelector("section");
const card = document.createElement("div");
card.classList = "card";

card.setAttribute("id", item.id);
card.setAttribute("name", item.name);

const face = document.createElement("img");
face.classList = "face";
face.src = item.imgSrc;


const back = document.createElement("div");
back.classList = "back";

section.appendChild(card);
card.appendChild(face);
card.appendChild(back);

const restart = (text) => {
cardData.sort(() => Math.random() - 0.5);
let faces = document.querySelectorAll('.face');
let cards = document.querySelectorAll('.card');
section.style.pointerEvents = 'none';

cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");

    setTimeout(() => {
    cards[index].style.pointerEvents = 'all';
    faces[index].src = item.imgSrc;
    cards[index].setAttribute('name', item.name);
    section.style.pointerEvents = 'all';
    }, 1000)
})
playerlives = 10;
playerLivesCount.textContent = playerlives;
setTimeout(() =>  {
    window.alert(text), 100
})

}
const checkCards = (e) => {
const clickedCard = e.target;
console.log(clickedCard)
clickedCard.classList.add("flipped");
const flippedCards = document.querySelectorAll(".flipped")
const toggleCard = document.querySelectorAll(".toggleCard")

    if(flippedCards.length === 2){
        if(
            flippedCards[0].getAttribute("name") === 
            flippedCards[1].getAttribute("name")
            ){
            console.log("match")
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = 'none';
            })
            } else {
            console.log("wrong")
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000)
            })
            playerlives--
            playerLivesCount.textContent = playerlives
            if(playerlives === 0){
                restart("👎 nebus dovanos - mėgink dar kartą");
            }
        }
    }
    // Run the check if we won the game
    if(toggleCard.length === 16){
        restart("🥂 Laimėjai - prašom kreiptis į administraciją dėl prizo");
    }
    
;};
card.addEventListener("click", (e) => {
//Run our flip animation
//face.classList.toggle("toggleCard");
card.classList.toggle("toggleCard");
checkCards(e);
});
});

};

const board = () => {
console.log("Ovidijo Prisiminimai");
};