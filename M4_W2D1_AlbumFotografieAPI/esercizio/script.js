const url = "https://api.pexels.com/v1/search?query="

const fetchPhoto = (query) => {
    fetch(url + query, {
        headers: {
            Authorization: "SqewINZLHJj4wwakmYsv6YYX96jn5cqUs0eNdgpEniEJRdWyQRFNZFzP",
        },
    })
        .then(response => response.json())
        .then(data => {
            const containerCards = document.getElementById("containerCards");
            containerCards.innerHTML = data.photos.map((photo) => {
                return `<img src='${photo.src.medium}' />`
            })
        })
        .catch((err) => console.log(err));
}

