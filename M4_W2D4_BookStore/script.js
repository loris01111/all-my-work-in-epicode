// const cardContainerGroup = document.getElementById("card-container-group");
const input = document.getElementById("inputSearch");
const searchButton = document.getElementById("search-button");
const main = document.getElementById("main");

function createCard(book) {
    //     const card = document.createElement("div");

    //     card.innerHTML = `div class="card" style="width: 18rem;">
    //     <img src="${book.img}" class="card-img-top" alt="...">
    //     <div class="card-body">${book.title}</h5>
    //         <p class="card-text">${book.category} - ${book.price}</p>
    //         <a href="#" class="btn btn-primary">Aggiungi al carrello</a>
    //     </div>
    // </div>`  
    //     cardContainerGroup.append(card);

    // non mi prende i backtick, quindi non li userò 
    const rowCols = document.createElement("div");
    rowCols.classList.add("row", "row-cols-1", "row-cols-md-2", "g-4", "mt-5");

    const col = document.createElement("div");

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = book.img;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-text");
    cardPrice.textContent = book.price;

    const button = document.createElement("a");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Aggiungi al carrello";

    cardBody.append(cardPrice, button);
    card.append(img, cardBody)
    col.append(card);
    rowCols.append(col);
    main.append(rowCols);

}


const getBooks = async () => {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books');
        const books = await response.json();
        return books;
    } catch (error) {
        console.log(error);
    }
}

getBooks().then(books => {
    books.map((book) => {
        createCard(book);

    })
})


const filterBooks = async(query) => {
    const books = await getBooks();
    console.log(books);
    return books.filter((book) => {
        const title = book.title.toLowerCase();
        const toLowerQuery = query.toLowerCase();
        return title.includes(toLowerQuery);
    })
   
}

input.addEventListener("change",  () => {
if (input.value === "") {
    getBooks().then(books => {
        books.map((book) => {
            createCard(book);
    
        })
    })
}
});

searchButton.addEventListener("click", async () => {
main.innerHTML = ""
filterBooks(input.value).then(books => {
    console.log(books);
    books.map((book) => {
        createCard(book);
})
})})