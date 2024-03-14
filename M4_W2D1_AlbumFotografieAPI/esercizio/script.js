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
                return ` <div class='col col-4'> <div class="card mb-4 shadow-sm">
                <img src='${photo.src.large}' />

                <div class="card-body">
                  
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
              </div> </div>`
            })
        })

        .catch((err) => console.log(err));
}

