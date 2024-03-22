// const cardContainerGroup = document.getElementById("card-container-group");
const main = document.getElementsByTagName("main");
const input = document.getElementById("inputSearch");
const searchButton = document.getElementById("search-button");
const emptyButton = document.getElementById("empty-button");
const section = document.getElementById("section");
const modalBody = document.getElementById("modal-body");
const cartNumber = document.getElementById("cart-number");
const saveCart = JSON.parse(localStorage.getItem("cart"));
const cart = saveCart? saveCart : [];

const addBookToCart = (book) => {
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
    console.log(cart);
};

function createCard(book) {
    const card = document.createElement("div");
    card.setAttribute("id", "card-generated");

    card.innerHTML =
        ` <div class="card rounded-top-3" style="width: 18rem; ">
         <img src="${book.img}" class="card-img-top  " alt="...">
         <div class="card-body">
             <h5 class="card-title text-truncate ">${book.title}</h5>
             <p class="card-text">${book.category} - ${book.price}€</p>
             <a href="#" class="btn btn-success aggiungiButton">Aggiungi al carrello</a><span>
             <a  href="#" class="btn btn-success saltaButton">salta</a></span>
            <a href="dettagli.html?id=${book.asin}" class="btn btn-success mt-3 dettagliButton">Dettagli</a>
         </div>
     </div>`

    card.querySelector(".aggiungiButton").addEventListener("click", () => {
        addBookToCart({ title: book.title, price: book.price });
        console.log(cart);
    });

    card.querySelector(".saltaButton").addEventListener("click", () => {
        card.remove();
    });

    section.append(card);
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

    const filterBooks = async (query) => {
        const books = await getBooks();
        console.log(books);
        return books.filter((book) => {
            const title = book.title.toLowerCase();
            const toLowerQuery = query.toLowerCase();
            return title.includes(toLowerQuery);
        })

    }

    input.addEventListener("change", () => {
        if (input.value === "") {
            getBooks().then(books => {
                books.map((book) => {
                    createCard(book);

                })
            })
        }
    });

    searchButton.addEventListener("click", async () => {
        section.innerHTML = ""
        filterBooks(input.value).then(books => {
            console.log(books);
            books.map((book) => {
                createCard(book);
            })
        })
    })
});


const populateCardModal = () => {
    if (saveCart) {
        saveCart.map((cartItem) => {
            const div = document.createElement("div");
            div.innerHTML = `<p>${cartItem.title}, ${cartItem.price}</p>`;
            modalBody.append(div);
        })
    }else {
       const div2 = document.createElement("div");
       div2.innerHTML = `<p>Carrello vuoto</p>`;
       modalBody.append(div2);
       
    }
}

populateCardModal();

const emptyCart = () => {
    emptyButton.addEventListener("click", () => {
        localStorage.removeItem("cart");
        window.location.reload();
    })
}

emptyCart();

const showNumberCart = () => {
    if (saveCart) {
        const length = saveCart.length;
        cartNumber.innerText = length;
    }else{
        cartNumber.innerText = 0;
    }

}

showNumberCart();
