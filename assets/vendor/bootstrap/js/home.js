document.addEventListener('DOMContentLoaded', (event) => {
    var options = {
        strings: ["Welcome to my website.","Want to know about me?","Want to get to know me?"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    };

    var typed = new Typed("#typed", options);
});
