$(document).ready(function () {
    totop();
});

function totop() {


    $('a[href=#a1]').click(function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    $('a[href=#a1]').click(function () {
        $('html, body').animate({scrollTop: $("#a1").offset().top}, 'slow');
    });
    $('a[href=#a2]').click(function () {
        $('html, body').animate({scrollTop: $("#a2").offset().top}, 'slow');
    });
    $('a[href=#a3]').click(function () {
        $('html, body').animate({scrollTop: $("#a3").offset().top}, 'slow');
    });
    $('a[href=#a4]').click(function () {
        $('html, body').animate({scrollTop: $("#a4").offset().top}, 'slow');
    });
    $('a[href=#a5]').click(function () {
        $('html, body').animate({scrollTop: $("#a5").offset().top}, 'slow');
    });
    $('a[href=#a6]').click(function () {
        $('html, body').animate({scrollTop: $("#a6").offset().top}, 'slow');
    });

    $('#header a').click(function () {
        $('.menuSelected').removeClass('menuSelected');
        $(this).addClass('menuSelected');
    });
}