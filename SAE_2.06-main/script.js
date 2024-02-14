
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