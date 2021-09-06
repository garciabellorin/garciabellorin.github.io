function biggerDecorations2() { //renamed as biggerDecorations2 for use as helper method
    var newFontSize = document.getElementById("Text");

    // Exercise Part 1
    // newFontSize.style.fontSize = "24pt";

    //Font Timer
    var currentFontSize = document.defaultView.getComputedStyle(newFontSize).fontSize;
    newFontSize.style.fontSize = parseFloat(currentFontSize + 2) + "pt";
}

function biggerDecorations() { //new function using previous as helper method
    setInterval(biggerDecorations2, 500);
}

function bling() { //bling bling
    var blingStyle = document.getElementById("Text");
    var imagebg = document.getElementById("imagebgnd");


    if (blingStatus.checked) {
        blingStyle.style.fontWeight = "bold";
        blingStyle.style.color = "green";
        blingStyle.style.textDecoration = "underline";
        imagebg.src = "/decoratemytext/images/hundred-dollar-bill.jpg"; //just replacing immahe url
        imagebg.style.width = "320px"; //a little bit of adjustment

    }
    else { //would like to know how to store the real current style to really revert when required. Global var???
        blingStyle.style.fontWeight = "normal";
        blingStyle.style.color = "black";
        blingStyle.style.textDecoration = "none";
    }
}


function IgpayAtinlay() {
    var caseText = document.getElementById("Text").value;
    var splitWords = caseText.split(" "); //to treat each word separatedly
    var vowelRegExp = '^[aieouAIEOU].*'; //RegExp case for words starting with vowel


    for (var i = 0; i < splitWords.length; i++) {
        //if word is single letter or starts with vowel is the same case
        if (splitWords[i].length === 1 || splitWords[i].match(vowelRegExp)) {
            splitWords[i] = splitWords[i].concat("ay");
        }
        //if word does not start with vowel (could be number, symbol)
        else {
            splitWords[i] = splitWords[i].substring(1).concat(splitWords[i].charAt(0).concat("ay"));
        }
    }
    document.getElementById("Text").value = splitWords.join(" "); //output and replace
}

function Malkovitch() {
    var caseText = document.getElementById("Text").value;
    var splitWords = caseText.split(" "); //to treat each word separatedly

    for (var i = 0; i < splitWords.length; i++) {
        if (splitWords[i].length >= 5) {
            splitWords[i] = 'Malkovitch'; //Malkovitching the word
        }
    }
    document.getElementById("Text").value = splitWords.join(" "); //output and replace
}