
/** menu js **/
$('.toggle-menu').click (function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});

$('#menu .main-nav a').click (function(){
    $('#menu').toggleClass('open');
    $('.toggle-menu').removeClass('active');
});


