
const liTwitter = document.querySelectorAll("aside div:last-of-type ol li:nth-of-type(2)");

liTwitter.forEach((li) => {
    li.remove();
})

const link2 = document.querySelectorAll(".stretched-link");

link2.forEach(a => {
    a.parentElement.remove()
});

const link = document.querySelectorAll(".font-weight-bold");

link.forEach(a => {
    a.parentElement.remove()
});

const author = document.querySelectorAll("main .row .col-md-8 .blog-post:first-of-type .blog-post-meta a");

author.forEach((text) => {
    text.addEventListener("mouseover", function (e) {
        window.alert("hello Marco");
    })
    
});


const authorTwo = document.querySelectorAll("main .row .col-md-8 .blog-post:nth-of-type(2) .blog-post-meta a");

authorTwo.forEach((text) => {
    text.addEventListener("mousemove", function (e) {
        window.alert("hello Jacopo");
    })
    
});


const authorThree = document.querySelectorAll("main .row .col-md-8 .blog-post:nth-of-type(3) .blog-post-meta a");

authorThree.forEach((text) => {
    text.addEventListener("mousemove", function (e) {
        window.alert("hello Christian");
    })
    
});

