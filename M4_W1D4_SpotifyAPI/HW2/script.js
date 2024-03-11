




// fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     }).then(data => {
//         data.data.forEach(Element => {
//             search(Element.title, Element.album.cover);
//         })
//     })
//     .catch(error => {
//          console.log(error);
//      })


// const buttonSearch = async () => {
//     const buttonToSearch = document.querySelector("#button-search");
//     buttonToSearch.addEventListener("click", () => {
//         const inputSearchValue = document.querySelector("#seacrhField");
//         search("https://striveschool-api.herokuapp.com/api/deezer/search?q" + inputSearchValue.value);
//     })
// }



// const search = async (title, img) => {
//     const containerAlbum = document.createElement("div");
//     const titleArtist = document.createElement("h3");
//     const imgAlbum = document.createElement("img");


//     titleArtist.innerHTML = '<h3>${title}</h3>';
//     imgAlbum.innerHTML = `<img src="${img} />`;
//     containerAlbum.append(titleArtist, imgAlbum);
//     document.body.append(containerAlbum);
//     buttonSearch()
// }

// const showResults = async () => {

// }

const eminemCardContainer = document.querySelector("#eminem");


const urlEminem = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";
const url1 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica";
const url2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

const getCardsEminem = async () => {
    try {
        const response = await fetch(urlEminem);
        const data = await response.json();

        console.log(data);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}



const songs = getCardsEminem().then(res => {
    res.map(song => createCard(song))
});


console.log(songs);


const createCard = (song) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-5", "w-50");

    const title = document.createElement("h3");
    title.classList.add("card-title", "text-dark", "text-center");
    title.innerHTML = song.title;

    const img = document.createElement("img");
    img.src = song.album.cover;
    img.classList.add("card-img-top", "img-fluid", "w-100", "h-100");

    card.append(title,img);
    eminemCardContainer.appendChild(card);
};


