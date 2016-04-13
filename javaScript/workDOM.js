document.write("<b>referrer</b>: " + document.referrer + "<br>");
document.write("<b>location</b>: " + document.location + "<br>");
document.write("<b>title</b>: " + document.title + "<br>");
document.title = 'JS title';
document.write("<b>title</b>: " + document.title + "<br>");

window.onload = function () {
    var pEl = document.getElementById('pEl');
    pEl.style.color = 'darkMagenta';
    pEl.innerHTML = 'this is from <strong>javaScript</strong>';
    // p.innerText = 'this is from <strong>JavaScript</strong>';

    pEl.previousSibling.innerText = '--- click dark magenta ----';

    pEl.setAttribute('someAttr', 'someAttrVal');
    pEl.set

    pEl.onclick = function () {
        var i;
        var preEl = document.getElementById('preEl');
        var radioButtons = document.getElementsByName("answer");
        // var radioButtons = document.getElementsByTagName("input");
        preEl.innerText = '';
        for (i = 0; i < radioButtons.length; i++) {
            preEl.innerText += radioButtons[i].value + " " + radioButtons[i].checked + "\r\n";
        }
        radioButtons[0].parentNode.style.border = '1px solid darkOrange';
        radioButtons[0].parentNode.style.padding = '4px';

        var divRadio = document.getElementById('divRadio');
        preEl.innerText += '\r\n';
        for (i = 0; i < divRadio.childNodes.length; ++i) {
            if (divRadio.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                preEl.innerText += divRadio.childNodes[i].value + " - " + divRadio.childNodes[i].checked + "\r\n";
            }
        }

        preEl.innerText += '\r\n';
        for (var elem = divRadio.firstChild; elem != null; elem = elem.nextSibling) {
            if (elem.nodeType == Node.ELEMENT_NODE) {
                preEl.innerText += elem.value + " ---- " + elem.checked + "\r\n";
            }
        }

        var divForCreate = document.getElementById('divForCreate');
        var newP = document.createElement('p');
        newP.innerText = 'new paragraph';
        divForCreate.appendChild(newP);
        newP = document.createElement('p');
        newP.innerText = 'before paragraph';
        document.body.insertBefore(newP, divForCreate);
    }
};