function biggerDecorations2() {
    var newFontSize = document.getElementById("Text");

    // Part 1
    // newFontSize.style.fontSize = "24pt";

    //Font Timer
    // var x = parseFloat(document.getElementById("Text").style.fontSize);
    var currentFontSize = document.defaultView.getComputedStyle(newFontSize).fontSize;
    newFontSize.style.fontSize = parseFloat(currentFontSize + 2) + "pt";
}

function bling() {
    var blingStyle = document.getElementById("Text");
    var imagebg = document.getElementById("imagebgnd");


    if (blingStatus.checked) {
        blingStyle.style.fontWeight = "bold";
        blingStyle.style.color = "green";
        blingStyle.style.textDecoration = "underline";
        imagebg.src = "/decoratemytext/images/hundred-dollar-bill.jpg";
        imagebg.style.width = "320px";

    }
    else {
        blingStyle.style.fontWeight = "normal";
        blingStyle.style.color = "black";
        blingStyle.style.textDecoration = "none";
    }
}
function biggerDecorations() {
    setInterval(biggerDecorations2, 5000);
}

function IgpayAtinlay() {
    var caseText = document.getElementById("Text").value;
    var splitWords = caseText.split(" ");
    var piggyText = '';
    var vowelRegExp = '^[aieouAIEOU].*';

    for (var i = 0; i < splitWords.length; i++) {

        if (splitWords[i].length === 1) {
            piggyText = piggyText.concat(splitWords[i].concat("ay")).concat(" ");
        }
        else {
            if (splitWords[i].match(vowelRegExp)) {
                piggyText = piggyText.concat(splitWords[i].concat("ay")).concat(" ");
            }

            else {
                piggyText = piggyText.concat(splitWords[i].substring(1))
                    .concat(splitWords[i].charAt(0)
                        .concat("ay")).concat(" ");
            }
        }
    }
    document.getElementById("Text").value = piggyText;
    //remove last space
}

function Malkovitch() {
    var caseText = document.getElementById("Text").value;
    var splitWords = caseText.split(" ");

    for (var i = 0; i < splitWords.length; i++) {
        if (splitWords[i].length >= 5) {
            splitWords[i] = 'Malkovitch';
        }
    }
    document.getElementById("Text").value = splitWords.join(" ");
}