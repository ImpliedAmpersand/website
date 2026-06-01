const artworkData = [
  {
    id: "thumbnail_1", 
    imageSrc: "../src/assets/leopard.webp",
    title: "\"Snow Leopard\""
  },
  {
    id: "thumbnail_2", 
    imageSrc: "../src/assets/sunrise point.webp",
    title: "\"Sunrise Point\""
  },
  {
    id: "thumbnail_3", 
    imageSrc: "../src/assets/talonflame_painting.webp",
    title: "\"Talonflame\""
  },
  {
    id: "thumbnail_4", 
    imageSrc: "../src/assets/alakazam.jpg",
    title: "\"Alakazam\""
  },
  {
    id: "thumbnail_5", 
    imageSrc: "../src/assets/ampersand_3_sitting.webp",
    title: "\"Fox Sitting\""
  },
  {
    id: "thumbnail_6", 
    imageSrc: "../src/assets/betty.webp",
    title: "\"Bling-slinger Betty\""
  },
  {
    id: "thumbnail_7", 
    imageSrc: "../src/assets/balance.png",
    title: "\"Balance\""
  },
  {
    id: "thumbnail_8", 
    imageSrc: "../src/assets/mudkip_and_wooper.webp",
    title: "\"Mudkip and Wooper\""
  },
  {
    id: "thumbnail_9", 
    imageSrc: "../src/assets/torterra_1.webp",
    title: "\"Torterra\""
  },
  {
    id: "thumbnail_10", 
    imageSrc: "../src/assets/vivinova_1.webp",
    title: "\"Vivinova\""
  }
];

const artworkLocation = document.getElementById("artwork_location");

const artworkTitleLocation = document.getElementById("artwork_title");

function updateArtwork (artwork_id) {
    var artwork_data = artworkData.find( data => data.id === artwork_id );
    artworkLocation.src = artwork_data.imageSrc;
    artworkTitleLocation.textContent = artwork_data.title;
}


document.querySelectorAll('.thumbnail-button').forEach(element => {
    element.addEventListener('click', (event) => {
        updateArtwork(element.id);
    });
});