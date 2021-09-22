$(document).ready(function () {
    $('#search').click(function (event) {
        event.preventDefault();

        var word = document.getElementById('word').value;
        $.post('http://localhost:8085/search', { word })
            .done(function (data) {
                getdefinition(data);
            })
            .fail(function (err) {
                showError(err);
            });
    });
});

function getdefinition(obj) {
    $('.divTable').empty();
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].wordtype == '') {
            $('.divTable').append(
                `<div class="divRow">${i + 1}:: ${obj[i].definition}</div>`
            );
        } else {
            $('.divTable').append(
                `<div class="divRow">${i + 1}(${obj[i].wordtype}):: ${
                    obj[i].definition
                }</div>`
            );
        }
    }
}
function showError(err) {
    $('.divTable').empty();
    console.log(err);
    $('.divTable').append(
        `<div class="divRow">${
            err.responseText ? err.responseText : err.statusText
        }`
    );
}
