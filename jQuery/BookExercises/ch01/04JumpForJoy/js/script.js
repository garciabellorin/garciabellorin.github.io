$(document).ready(function () {
    $(".guess_box").click(checkForCode);
    function getRandmom(num) {
        var my_num = Math.floor(Math.random() * num);
        return my_num;
    }

    var hideCode = function () {
        var numRand = getRandmom(4);
        $(".guess_box").each(function (index, value) {
            if (numRand == index) {
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }
    hideCode();

    function checkForCode() {
        var discount;
        if ($.contains(this, document.getElementById("has_discount"))) {
            var my_num = getRandmom(100);
            discount = "<p>Your Code: CODE" + my_num + "%</p>";
        }
        else {
            discount = "<p>Sorry, no discount this time!</p>";
        }

        $(".guess_box").each(function () {
            if ($.contains(this, document.getElementById("has_discount"))) {
                $(this).addClass("discount");
            }
            else {
                $(this).addClass("no_discount");
            }
            $(this).unbind();
        });

        $("#result").append(discount);

        // $(this).append(discount);
        // $(".guess_box").each(function () {
        //     $(this).unbind("click");
        // });
    }

    $(".guess_box").hover(function () {
        $(this).addClass("my_hover");
    },
        function () {
            $(this).removeClass("my_hover");
        });
});