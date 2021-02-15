$(document).ready(function() {

    // WE ARE tabs hover effect
    $("#myTab").mouseover(function() {
        $("#myTabContent").addClass("wa-tab-c-effect");
    });
    $("#myTab").mouseleave(function() {
        $("#myTabContent").removeClass("wa-tab-c-effect");
    });



    // who-we-are-section
    let waAboutFounder = document.querySelector('#wa-about-founder');
    let whoWeAreBack = document.querySelector('#who-we-are-back');
    waAboutFounder.addEventListener('click', () => {
        $('.wa-wwa').css({ 'left': '-100vw', 'position': 'relative', 'transition': '1s' });
        $('#wa-wwa-section').addClass('wwa-section');
    });
    whoWeAreBack.addEventListener('click', () => {
        $('.wa-wwa').css({ 'left': '0vw' });
        $('#wa-wwa-section').removeClass('wwa-section');
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


// Slider
(function() {
    let slider = document.querySelector('.slider');
    let slides = document.querySelector('.slides');
    let slide = document.querySelectorAll('.slide').length;
    let counter = 1;

    setInterval(function() {

    });



})();