$(document).ready(function () {
    $('.job_prog').mouseover(function () {
        $(this).css('background', 'url(image/box_roxo_hover.png) no-repeat center');
    });
    $('.job_prog').mouseout(function () {
        $(this).css('background', 'url(image/box_roxo_normal.png) no-repeat center');
    });
    $('.job_ux').mouseover(function () {
        $(this).css('background', 'url(image/box_azul_hover.png) no-repeat center');
    });
    $('.job_ux').mouseout(function () {
        $(this).css('background', 'url(image/box_azul_normal.png) no-repeat center');
    });
    $('.job_ilu').mouseover(function () {
        $(this).css('background', 'url(image/box_amarelo_hover.png) no-repeat center');
    });
    $('.job_ilu').mouseout(function () {
        $(this).css('background', 'url(image/box_amarelo_normal.png) no-repeat center');
    });

    $('#blue').click(function () {
        $('.job_ux').fadeTo('slow', 1);
        $('.job_ilu').fadeTo('slow', 0.2);
        $('.job_prog').fadeTo('slow', 0.2);
    });
    $('#yellow').click(function () {
        $('.job_ux').fadeTo('slow', 0.2);
        $('.job_ilu').fadeTo('slow', 1);
        $('.job_prog').fadeTo('slow', 0.2);
    });
    $('#purple').click(function () {
        $('.job_ux').fadeTo('slow', 0.2);
        $('.job_ilu').fadeTo('slow', 0.2);
        $('.job_prog').fadeTo('slow', 1);
    });
});



