removeItems();

addEventListener('scroll', (event) => {
    removeItems();
});

function removeItems() {
    var matches = document.querySelectorAll('.js-quote-selection-container');
    matches.forEach((element) => {
        element.parentElement.removeChild(element);
    });
}

