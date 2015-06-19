$(document).ready(function () {
    $('#deactivated').hide();
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
        $('#deactivated').fadeIn();
        $('.job_ux').fadeTo('slow', 1);
        $('.job_ilu').fadeTo('slow', 0.2);
        $('.job_prog').fadeTo('slow', 0.2);
        $('.job_ux').css('pointer-events', 'all');
        $('.job_ilu').css('pointer-events', 'none');
        $('.job_prog').css('pointer-events', 'none');
    });
    $('#yellow').click(function () {
        $('#deactivated').fadeIn();
        $('.job_ux').fadeTo('slow', 0.2);
        $('.job_ilu').fadeTo('slow', 1);
        $('.job_prog').fadeTo('slow', 0.2);
        $('.job_ux').css('pointer-events', 'none');
        $('.job_ilu').css('pointer-events', 'all');
        $('.job_prog').css('pointer-events', 'none');
    });
    $('#purple').click(function () {
        $('#deactivated').fadeIn();
        $('.job_ux').fadeTo('slow', 0.2);
        $('.job_ilu').fadeTo('slow', 0.2);
        $('.job_prog').fadeTo('slow', 1);
        $('.job_ux').css('pointer-events', 'none');
        $('.job_ilu').css('pointer-events', 'none');
        $('.job_prog').css('pointer-events', 'all');
    });

    $('#deactivated').click(function () {
        $(this).fadeOut();
        $('.job_ux').fadeTo('slow', 1);
        $('.job_ilu').fadeTo('slow', 1);
        $('.job_prog').fadeTo('slow', 1);
        $('.job_ux').css('pointer-events', 'all');
        $('.job_ilu').css('pointer-events', 'all');
        $('.job_prog').css('pointer-events', 'all');
    });
});



