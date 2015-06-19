$(document).ready(function () {
    $('.job_prog').mouseover(function () {
        $(this).css('background', 'url(image/box_roxo_hover.png) no-repeat center');
        $('p',this).css('color','white');
    });
    $('.job_prog').mouseout(function () {
        $(this).css('background', 'url(image/box_roxo_normal.png) no-repeat center');
        $('p',this).css('color','#454545');
    });
    $('.job_ux').mouseover(function () {
        $(this).css('background', 'url(image/box_azul_hover.png) no-repeat center');
        $('p',this).css('color','white');
    });
    $('.job_ux').mouseout(function () {
        $(this).css('background', 'url(image/box_azul_normal.png) no-repeat center');
        $('p',this).css('color','#454545');
    });
    $('.job_ilu').mouseover(function () {
        $(this).css('background', 'url(image/box_amarelo_hover.png) no-repeat center');
        $('p',this).css('color','white');
    });
    $('.job_ilu').mouseout(function () {
        $(this).css('background', 'url(image/box_amarelo_normal.png) no-repeat center');
        $('p',this).css('color','#454545');
    });

    var selected = 0;

    $('.blue').click(function () {
        $('.job_ux').fadeTo('slow', 1);
        $('.job_ilu').fadeTo('slow', 0.2);
        $('.job_prog').fadeTo('slow', 0.2);
        $('.job_ux').css('pointer-events', 'all');
        $('.job_ilu').css('pointer-events', 'none');
        $('.job_prog').css('pointer-events', 'none');
        if (selected !== 1) {
            $(this).css('background', 'url(image/botao_azul.png) no-repeat center');
            $('.yellow').css('background', 'url(image/botao_desativado.png) no-repeat center');
            $('.purple').css('background', 'url(image/botao_desativado.png) no-repeat center');
            selected = 1;
        }
    });
    $('.yellow').click(function () {
        $('.job_ux').fadeTo('slow', 0.2);
        $('.job_ilu').fadeTo('slow', 1);
        $('.job_prog').fadeTo('slow', 0.2);
        $('.job_ux').css('pointer-events', 'none');
        $('.job_ilu').css('pointer-events', 'all');
        $('.job_prog').css('pointer-events', 'none');
        if (selected !== 2) {
            $(this).css('background', 'url(image/botao_amarelo.png) no-repeat center');
            $('.blue').css('background', 'url(image/botao_desativado.png) no-repeat center');
            $('.purple').css('background', 'url(image/botao_desativado.png) no-repeat center');
            selected = 2;
        }
    });
    $('.purple').click(function () {
        $('.job_ux').fadeTo('slow', 0.2);
        $('.job_ilu').fadeTo('slow', 0.2);
        $('.job_prog').fadeTo('slow', 1);
        $('.job_ux').css('pointer-events', 'none');
        $('.job_ilu').css('pointer-events', 'none');
        $('.job_prog').css('pointer-events', 'all');
        if (selected !== 3) {
            $(this).css('background', 'url(image/botao_roxo.png) no-repeat center');
            $('.blue').css('background', 'url(image/botao_desativado.png) no-repeat center');
            $('.yellow').css('background', 'url(image/botao_desativado.png) no-repeat center');
            selected = 3;
        }
    });
});



