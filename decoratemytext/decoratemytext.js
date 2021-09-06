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

function IgpayAtinlay(){
   
    
}
