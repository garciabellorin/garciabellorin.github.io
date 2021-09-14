'use strict';
$(() => {
    const initMsg = 'Click the "S" to begin.';
    let lost = false;
    const lose = () => {
        lost = true;
        $('.boundary').addClass('youlose');
    };

    $(".boundary").mouseover( () => {
        $('h2#status').text("Sorry, you lost :[");
        $('.boundary').mouseover(lose);
    });

    $('#start').click(() => {
        lost = false;
        $('h2#status').text(initMsg);
        $('.boundary').removeClass('youlose');
        $('#maze').mouseleave(lose);
    });

    $('#end').mouseenter(() => {
        const winMsg = 'You win! :]';
        const loseMsg = 'Sorry, you lost :[';
        const chosenMsg = lost ? loseMsg : winMsg;

        $('h2#status').text(chosenMsg);
    });

    $('.boundary.example').click(() => {
        location.href = '/';
    }).tooltip();
});