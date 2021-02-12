$(document).ready(function() {

    // WE ARE tabs hover effect
    $("#myTab").mouseover(function() {
        $("#myTabContent").addClass("wa-tab-c-effect");
    });
    $("#myTab").mouseleave(function() {
        $("#myTabContent").removeClass("wa-tab-c-effect");
    });

});


// Scroll on Fixed Nav Background
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('nav').addClass('ft-bg');
    } else {
        $('nav').removeClass('ft-bg');
    }
});