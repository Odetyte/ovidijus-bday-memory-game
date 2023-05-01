//Grab html selectors
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

//Genereta data  for cards
const getData = () => [
    {imgSrc: './images/Ovidijus1.JPG'},
    {imgSrc: './images/Ovidijus2.JPG'},
    {imgSrc: './images/Ovidijus3.JPG'},
    {imgSrc: './images/Ovidijus4.JPG'},
    {imgSrc: './images/Ovidijus6.JPG'},
    {imgSrc: './images/Ovidijus7.JPG'},
    {imgSrc: './images/Ovidijus8.JPG'},
    {imgSrc: './images/Ovidijus9.JPG'},
    {imgSrc: './images/Ovidijus1.JPG'},
    {imgSrc: './images/Ovidijus2.JPG'},
    {imgSrc: './images/Ovidijus3.JPG'},
    {imgSrc: './images/Ovidijus4.JPG'},
    {imgSrc: './images/Ovidijus6.JPG'},
    {imgSrc: './images/Ovidijus7.JPG'},
    {imgSrc: './images/Ovidijus8.JPG'},
    {imgSrc: './images/Ovidijus9.JPG'}
];

// randomize cards
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
   
}
//Card generator function
const cardGenerator = () => {
    const cardData = randomize();
    // Generate HTML
    cardData.forEach((item)=> {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //Attach info to cards
        face.src = item.imgSrc;
        // Attach cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
       
    })
   


}

cardGenerator();
// [{imgSrc: './images/Ovidijus1.JPG'}]

// images.src = imgSrc