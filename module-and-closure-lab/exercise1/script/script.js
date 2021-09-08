var rudyTimer = (function () {
    var timer = null; // stores ID of interval timer
    var delayMsg = function delayMsg2() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    };
    function rudy() { // called each time the timer goes off
        document.getElementById("output").innerHTML += "Rudy!";
    }

    return delayMsg;

})();