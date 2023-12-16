const globalData = {
    navbar: {
        logo: "https://picsum.photos/200/300",
        title: {
            text: "il mio sito",
            type: "h1",
        },
        menu: [
            "menu1",
            "menu2",
            "menu3",
            "menu4",
        ]
    },
    main: {
        card: [
            {
                title: "Titolo card 1",
                img: "https://picsum.photos/seed/picsum/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,",
                isvisible: true,
                price: 23,
            },
            {
                title: "Titolo card 2",
                img: "https://picsum.photos/seed/picsum/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,",
                isvisible: true,
                price: 16,
            },
            {
                title: "Titolo card 3",
                img: "https://picsum.photos/seed/picsum/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,",
                isvisible: false,
                price: 13,
            },
            {
                title: "Titolo card 4",
                img: "https://picsum.photos/seed/picsum/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,",
                isvisible: true,
                price: 3,
            },
            {
                title: "Titolo card 5",
                img: "https://picsum.photos/seed/picsum/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,",
                isvisible: false,
                price: 73,
            },
            {
                title: "Titolo card 6",
                img: "https://picsum.photos/seed/picsum/200/300",
                description: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,",
                isvisible: true,
                price: 43,
            },
        ]
    }

}

const navBar = document.getElementById("nav");
const main = document.getElementById("main");

function createAndAppendLogo() {
    const logoContainer = document.createElement("div");
    const img = document.createElement("img");
    img.src = globalData.navbar.logo;
    logoContainer.append(img);
    navBar.append(logoContainer);
}

function createAndAppendTitle() {
    const titleContainer = document.createElement("div");
    const title = document.createElement(globalData.navbar.title.type);
    title.textContent = globalData.navbar.title.text;
    titleContainer.append(title);
    navBar.append(titleContainer);
}

function createAndAppendMenu() {
    const ulMenu = document.createElement("ul");
    const menuItems = globalData.navbar.menu.map((menuItems) => {
        const liMenu = document.createElement("li");
        liMenu.textContent = menuItems;
        ulMenu.append(liMenu);
        navBar.append(ulMenu);

    });

    // globalData.navbar.menu.forEach((menuItems) => {
    //     const liMenu = document.createElement("li");
    //     liMenu.textContent = menuItems;
    //     ulMenu.append(liMenu);
    //     navBar.append(ulMenu);
    // })

    // for( i = 0; i < globalData.navbar.menu.length; i++){
    //     const liMenu = document.createElement("li");
    //     liMenu.textContent = globalData.navbar.menu[i];
    //     ulMenu.append(liMenu);
    //     navBar.append(ulMenu);
    // }
}

function createAndAppendCard(){
    globalData.main.card.forEach((card) => {
       if(card.isvisible){
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("cards");
        const cardTitle = document.createElement("h2");
        cardTitle.textContent = card.title;
        const cardImg = document.createElement("img");
        cardImg.src = card.img;
        const cardDescription = document.createElement("p");
        cardDescription.textContent = card.description;
        const cardPrice = document.createElement("p");
        cardPrice.textContent = card.price + "€";
        cardContainer.append(cardTitle,cardImg,cardDescription,cardPrice);
        main.append(cardContainer);
       }
    })
}

let sumTotal = 0;
function createAndAppendTotal(){
    const totalContainer = document.createElement("div");
    const price = globalData.main.card.map((card) => {
        if(card.isvisible){
            return card.price;
        }else return 0;
    })
    price.forEach((price) => {
        sumTotal += price;
    })
    totalContainer.append(sumTotal);
    main.append(totalContainer);
}

createAndAppendLogo();
createAndAppendTitle();
createAndAppendMenu();
createAndAppendCard();
createAndAppendTotal();
