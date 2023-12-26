

function createHeader() {
    const titleContainer = document.createElement("header");
    titleContainer.classList.add("header")
    let title = document.createElement("h1");
    function updateH1() {
        const buttonChangeText = document.createElement("button");
        buttonChangeText.textContent = "change text";
        buttonChangeText.classList.add("buttonChangeText");
        buttonChangeText.addEventListener("click", function () {
            title.textContent = "New text";
        })
        titleContainer.append(buttonChangeText);
    }

    titleContainer.classList.add("titleContainer");
    title.textContent = "my site";
    titleContainer.append(title);
    document.body.append(titleContainer);
    updateH1();

}


createHeader();

function changeBackgroundColor() {

    const button = document.createElement("button");
    button.textContent = "Change background-color";
    button.onclick = function () {
        document.body.classList.toggle("bodyColor");
    }
    document.body.append(button);
}

changeBackgroundColor();

const main = document.createElement("main");
document.body.append(main);

function createAndAppendProducts() {
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("productsContainer");
    let array = [];
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("div");
        const title = document.createElement("h3");
        title.textContent = product.title;
        const description = document.createElement("p");
        description.textContent = product.description;
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");
        const img = document.createElement("img");
        img.src = product.img;
        img.classList.add("img");
        function imgAddClass() {
            imgContainer.onclick = function () {
                img.classList.toggle("imgVisible");
            }
        }
        const price = document.createElement("p");
        price.textContent = product.price + "€";
        function changePriceColor() {
            let r = Math.round(Math.random() * 256);
            let g = Math.round(Math.random() * 256);
            let b = Math.round(Math.random() * 256);
            coloreRgb = "rgb(" + r + "," + g + ", " + b + ")";
            price.onclick = function () {
                this.style.color = coloreRgb;
            }
        }
        setInterval(changePriceColor,1000);
        const linkAmazon = document.createElement("a");
        linkAmazon.href = product.link;
        linkAmazon.target = "_blank";
        linkAmazon.textContent = "link Amazon";
        function linkAmazonAddClass() {
            linkAmazon.classList.add("linkAmazon");
        }
        const reviewContainer = document.createElement("div");
        reviewContainer.classList.add("reviewContainer");
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("input");
        const button = document.createElement("button");
        button.textContent = "review";
        button.classList.add("button");
        reviewContainer.append(input, button);
        button.addEventListener("click", function () {
            array.push(input.value);
            input.value = "";
            console.log(array);
        })
        imgContainer.append(img);
        div.append(title, description, imgContainer, price, linkAmazon, reviewContainer);
        productsContainer.append(div);
        linkAmazonAddClass();
        imgAddClass();
        changePriceColor();
    })
    main.append(productsContainer);
}


createAndAppendProducts();


function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const nameSite = document.createElement("h2");
    nameSite.textContent = "sellphones";
    const divAddress = document.createElement("div");
    divAddress.classList.add("divAddress");
    const address = document.createElement("p");
    address.textContent = "Via Roma, n.7";
    const button = document.createElement("button");
    function updateAddress() {
        button.textContent = "change address";
        button.classList.add("buttonChangeText");
        button.addEventListener("click", function () {
            address.textContent = "Via Pierpaolo Pasolini, n.19";
        })
    }
    divAddress.append(address, button);
    footer.append(nameSite, divAddress);
    document.body.append(footer);
    updateAddress();
}

createFooter();