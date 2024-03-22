const sectionContainer = document.getElementById('dettagli-section');

window.onload = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const bookID = searchParams.get("id");
    console.log(bookID);


    fetch("https://striveschool-api.herokuapp.com/books/" + bookID)
    .then(response => response.json())
    .then(body =>{
        showDetails(body);
    })
}

function showDetails(cardBook) {
    const card = document.createElement("div");

    card.innerHTML =
        ` <div class="card rounded-top-3" style="width: 18rem; ">
         <img src="${cardBook.img}" class="card-img-top  " alt="...">
         <div class="card-body">
             <h5 class="card-title text-truncate ">${cardBook.title}</h5>
             <p class="card-text">${cardBook.category} - ${cardBook.price}€ - ${cardBook.asin}</p>
             <a href="#" class="btn btn-success aggiungiButton">Aggiungi al carrello</a><span>
             <a  href="#" class="btn btn-success saltaButton">salta</a></span>
            <a href="dettagli.html?id=${cardBook.asin}" class="btn btn-success mt-3 dettagliButton">Dettagli</a>
         </div>
     </div>`

     sectionContainer.append(card);
}