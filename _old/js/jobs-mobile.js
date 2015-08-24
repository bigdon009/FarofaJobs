$(document).ready(function () {
    newAlign();
    $('#bannerTop').css({'background': 'url(' + template_url + '/images/logo.png)', 'background-size': '95% auto', 'background-repeat': 'no-repeat', 'background-position': 'center'});
    $('#bannerBg').css('background', 'url(' + template_url + '/images/faixa_clear.png)');

    $('nav').css({'background-color': 'white', 'height': '150px', 'width': '100%'});
    $('#menu').css({'width': '100%', 'margin-top': '20px', 'margin-left': '0'});
    $('#menu ul').css({'padding-left': '0', 'list-style-type': 'none'});
    $('.jobs').css({'width': '100%', 'height': '100%', 'padding-top': '30px'});

    $('li').css({'float': 'left', 'margin-top': '0', 'margin-left': '0'});
    $('li span').css({'text-align': 'left', 'text-indent': '10px', 'font-size': '20px', 'line-height': '50px'});

    $('#emailResult').css('font-size', '14px');

    $('.purple, .yellow, .blue').css({'width': '100%', 'height': '50px'});
    $('.purple').css({'background': '#8e48d6'});
    $('.yellow').css({'background': '#ffcb05'});
    $('.blue').css({'background': '#0dbeff'});

    $('#white_content').css({'width': '100%', 'height': '1100px', 'left': '0', 'overflow': 'visible', 'top': '0'});
    $('#white_content p').css({'width': '90%'});
    $('#black_overlay').css({'width': '100%', 'height': '100%'});

    $('form').css({'width': '100%', 'height': '70%'});
    $('form input').css('width', '90%');
    $('form textarea').css('width', '100%');
    $('form .left').css({'float': 'none', 'width': '100%', 'height': '50%', 'padding-left': '26px'});
    $('form .right').css({'float': 'none', 'width': '100%', 'padding-left': '26px', 'margin-top': '20px'});

    function newAlign() {
        $('.job_ilu, .job_prog, .job_ux').css({'margin-left': '0', 'margin-right': '0', 'margin-top': '10px', 'width': '30%'});
    }

    $('.job_ilu').click(function () {
        $('#close_btn').css('background', 'url(' + template_url + '/images/fechar_amarelo_m.png) no-repeat center');
        $('html, body').animate({scrollTop: 0}, 100);
    });
    $('.job_prog').click(function () {
        $('#close_btn').css('background', 'url(' + template_url + '/images/fechar_roxo_m.png) no-repeat center');
        $('html, body').animate({scrollTop: 0}, 100);
    });
    $('.job_ux').click(function () {
        $('#close_btn').css('background', 'url(' + template_url + '/images/fechar_azul_m.png) no-repeat center');
        $('html, body').animate({scrollTop: 0}, 100);
    });

    $('#close_btn').css({'width': '40px', 'height': '40px'});

    $('footer').css({'width': '100%'});

    $('.blue').click(function () {
        newAlign();
        $('.job_ux').fadeTo('slow', 1);
        $('.job_ilu, .job_prog').css('display', 'none');
        $(this).css('background', '#0dbeff');
        $('.yellow').css('background', '#ffcb05');
        $('.purple').css('background', '#8e48d6');
    });
    $('.yellow').click(function () {
        newAlign();
        $('.job_ilu').fadeTo('slow', 1);
        $('.job_ux, .job_prog').css('display', 'none');
        $(this).css('background', '#ffcb05');
        $('.blue').css('background', '#0dbeff');
        $('.purple').css('background', '#8e48d6');
    });
    $('.purple').click(function () {
        newAlign();
        $('.job_prog').fadeTo('slow', 1);
        $('.job_ux, .job_ilu').css('display', 'none');
        $(this).css('background', '#8e48d6');
        $('.blue').css('background', '#0dbeff');
        $('.yellow').css('background', '#ffcb05');
    });
});


