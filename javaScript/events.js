window.onload = pageOnLoad();
function pageOnLoad (event) {
    event = event || window.event;
}

window.addEventListener("load", function () {

    var strContainer = document.getElementById("strContainer");

    strContainer.addEventListener("keypress", function (event) {

        if (String.fromCharCode(event.charCode) != '1'
            && String.fromCharCode(event.charCode) != '0') {
            event.preventDefault();
        } else {
            event.target.style.background = 'lightGrey';
        }

    }, true);

}, false);

window.onbeforeunload = function () {
    return "Вы уверены, что хотите закрыть окно?";
}