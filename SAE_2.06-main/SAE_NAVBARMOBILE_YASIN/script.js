
var index = 0;
function change_slider(change) {
    var slidesElement = document.querySelector('.slides');
    var childElements = slidesElement.children;
    var slides = [];
    for (var i = 0; i < childElements.length; i++) {
        var childId = childElements[i].id;
        if (childId) {
            slides.push(childId);
        }
    }
    index += change;
    if (index == 3) {
        index = 0;
    }
    if (index == -1) {
        index = 2;
    }
    location.href = window.location.href.split('#')[0] + '#' + slides[index];
};


function updatemenu(event) {
    // Récupérer la case à cocher
    var checkbox = document.getElementById('responsive-menu');
    
    // Vérifier si la case à cocher est cochée et si l'élément cliqué est le label du menu
    if (checkbox.checked && event.target.htmlFor === 'responsive-menu') {
        // Récupérer l'élément du menu
        var menu = document.getElementById('menu');
        // Mettre à jour le style du menu
        menu.style.borderBottomRightRadius = '0';
        menu.style.borderBottomLeftRadius = '0';
    } else {
        // Si la case à cocher n'est pas cochée ou si l'élément cliqué n'est pas le label du menu, ne rien faire
    }
}