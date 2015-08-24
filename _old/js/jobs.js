$(document).ready(function () {
    $('.job_prog')
            .mouseover(function () {
                $(this).css('background', 'url(' + template_url + '/images/box_roxo_hover.png) no-repeat center');
                $('p', this).css('color', 'white');
            })
            .mouseout(function () {
                $(this).css('background', 'url(' + template_url + '/images/box_roxo_normal.png) no-repeat center');
                $('p', this).css('color', '#454545');
            })
            .click(function () {
                var name = $(this).attr('id');
                vagas(name);
                $('#border').css('background', '#8E48D6');
                $('#close_btn').css('background', 'url(' + template_url + '/images/fechar_roxo.png) no-repeat center');
                var str = $('p', this).text();
                $('h1', '#white_content').text(str);
                document.getElementById('white_content').style.display = 'block';
                document.getElementById('black_overlay').style.display = 'block';
                $("form #jobname").val(str);
            });
    $('.job_ux')
            .mouseover(function () {
                $(this).css('background', 'url(' + template_url + '/images/box_azul_hover.png) no-repeat center');
                $('p', this).css('color', 'white');
            })
            .mouseout(function () {
                $(this).css('background', 'url(' + template_url + '/images/box_azul_normal.png) no-repeat center');
                $('p', this).css('color', '#454545');
            })
            .click(function () {
                var name = $(this).attr('id');
                vagas(name);
                $('#border').css('background', '#0DBEFF');
                $('#close_btn').css('background', 'url(' + template_url + '/images/fechar_azul.png) no-repeat center');
                var str = $('p', this).text();
                $('h1', '#white_content').text(str);
                document.getElementById('white_content').style.display = 'block';
                document.getElementById('black_overlay').style.display = 'block';
                $("form #jobname").val(str);
            });
    $('.job_ilu')
            .mouseover(function () {
                $(this).css('background', 'url(' + template_url + '/images/box_amarelo_hover.png) no-repeat center');
                $('p', this).css('color', 'white');
            })
            .mouseout(function () {
                $(this).css('background', 'url(' + template_url + '/images/box_amarelo_normal.png) no-repeat center');
                $('p', this).css('color', '#454545');
            })
            .click(function () {
                var name = $(this).attr('id');
                vagas(name);
                $('#border').css('background', '#FFCB05');
                $('#close_btn').css('background', 'url(' + template_url + '/images/fechar_amarelo.png) no-repeat center');
                var str = $('p', this).text();
                $('h1', '#white_content').text(str);
                document.getElementById('white_content').style.display = 'block';
                document.getElementById('black_overlay').style.display = 'block';
                $("form #jobname").val(str);
            });

    $('#close_btn').click(function () {
        document.getElementById('white_content').style.display = 'none';
        document.getElementById('black_overlay').style.display = 'none';
        $('#emailResult')
                .text('')
                .removeClass("error")
                .removeClass("success");
        $('#formCon').each(function () {
            this.reset();
        });
    });

    var selected = 0;

    $('.blue').click(function () {
        $('.job_ux').fadeTo('slow', 1);
        $('.job_ilu, .job_prog').css('display', 'none');
        if (selected !== 1) {
            $(this).css('background', 'url(' + template_url + '/images/botao_azul.png) no-repeat center');
            $('.yellow').css('background', 'url(' + template_url + '/images/botao_desativado.png) no-repeat center');
            $('.purple').css('background', 'url(' + template_url + '/images/botao_desativado.png) no-repeat center');
            selected = 1;
        } else {
            $('.yellow').css('background', 'url(' + template_url + '/images/botao_amarelo.png) no-repeat center');
            $('.purple').css('background', 'url(' + template_url + '/images/botao_roxo.png) no-repeat center');
            selected = 0;
            $('.job_ilu, .job_prog').fadeTo('slow', 1);
        }
    });
    $('.yellow').click(function () {
        $('.job_ilu').fadeTo('slow', 1);
        $('.job_ux, .job_prog').css('display', 'none');
        if (selected !== 2) {
            $(this).css('background', 'url(' + template_url + '/images/botao_amarelo.png) no-repeat center');
            $('.blue').css('background', 'url(' + template_url + '/images/botao_desativado.png) no-repeat center');
            $('.purple').css('background', 'url(' + template_url + '/images/botao_desativado.png) no-repeat center');
            selected = 2;
        } else {
            $('.blue').css('background', 'url(' + template_url + '/images/botao_azul.png) no-repeat center');
            $('.purple').css('background', 'url(' + template_url + '/images/botao_roxo.png) no-repeat center');
            selected = 0;
            $('.job_ux, .job_prog').fadeTo('slow', 1);
        }
    });
    $('.purple').click(function () {
        $('.job_prog').fadeTo('slow', 1);
        $('.job_ux, .job_ilu').css('display', 'none');
        if (selected !== 3) {
            $(this).css('background', 'url(' + template_url + '/images/botao_roxo.png) no-repeat center');
            $('.blue').css('background', 'url(' + template_url + '/images/botao_desativado.png) no-repeat center');
            $('.yellow').css('background', 'url(' + template_url + '/images/botao_desativado.png) no-repeat center');
            selected = 3;
        } else {
            $('.blue').css('background', 'url(' + template_url + '/images/botao_azul.png) no-repeat center');
            $('.yellow').css('background', 'url(' + template_url + '/images/botao_amarelo.png) no-repeat center');
            selected = 0;
            $('.job_ux, .job_ilu').fadeTo('slow', 1);
        }
    });

    $('#submit')
            .mouseover(function () {
                $(this).css('background', 'url(' + template_url + '/images/essa_vaga_hover.png) no-repeat center');
            })
            .mouseout(function () {
                $(this).css('background', 'url(' + template_url + '/images/essa_vaga_normal.png) no-repeat center');
            });
            
    function vagas(name) {
        $('#vaga', '#white_content').text(hiring[name]);
    }

    var hiring = {'jux1': 'Informações mal organizadas te tiram do sério? Então essa vaga pode ser sua. Você precisa saber coordenar projetos, conceituar soluções para problemas de usabilidade, formular e aplicar testes de usabilidade, além de manjar de prototipagem e wireframe. Para juntar-se a nós, é importante ser criativo e ter conhecimento em InDesign, Illustrator e Photoshop. Será um diferencial experiência no mercado de games.',
        'jux2': 'Se você é organizado, criativo e manja de prototipagem e wireframe, venha para a Farofa Studios. Saber tudo - ou quase - de InDesign, Illustrator e Photoshop é fundamental. Experiência no mercado de games um diferencial.',
        'jilu1': 'Gosta de games, tem experiência no mercado e sente saudade do Atari? A vaga de Game Designer Pleno da Farofa Studios é perfeita para você. Sua tarefa será criar gamedocs e level design. Criatividade e ser atento aos detalhes também fazem parte da função.',
        'jilu2': 'Imaginar histórias, inserir obstáculos e criar mundos imaginários faz sua cabeça? Se a resposta for sim, envie seu currículo. Também é necessário ter conhecimentos básicos em Photoshop e Illustrator, além de paixão por jogos, pesquisa e documentação.',
        'jilu3': 'É criativo e tem noção de design? Gosta de games e produzir o layout de sites perdeu a graça? Envie seu currículo para a vaga de Designer de Interfaces Pleno. É necessário ter experiência no mercado de games e interfaces para web, tablet e mobile. Ter produzido trabalhos voltados ao público infantil será um diferencial.',
        'jilu4': 'Se você é heavy user de games, tem noções de usabilidade e conhecimentos no Pacote Adobe, esta é sua chance de entrar o time da Farofa Studios.',
        'jilu5': 'Você adora um storyboard? Então envie seu currículo para a Farofa Studios. Para a função é necessário experiência em ilustração infantil e animação 2D. Produção para mercado de games será um diferencial.',
        'jilu6': 'Esculpir e dar forma a objetos e personagens é sua cara? Possui conhecimento avançado em modelagem Low Poly para games e personagens animados? Se a resposta é positiva, você pode fazer parte da nossa equipe. Para a vaga é necessário experiência em mapeamento UV, conhecimento básico de Unity3D e funcionamento de Assets, além de habilidade em seguir concepts no processo de modelagem.',
        'jilu7': 'Se você gosta de brincar de marionete e dar vida aos personagens, seu lugar é aqui. Para a vaga é imprescindível conhecimento profundo de rigging, em conceitos de animação, Unity3D, Mecanim e métodos de exportação em fbx para Unity3D. Experiência no mercado de games e inglês são considerados diferenciais.',
        'jpro1': 'Gosta de detalhes, tem bom senso e sabe lidar com limitações de software? Então, venha trabalhar conosco. A vaga pede conhecimentos em Unity 3D, C#, experiência em desenvolvimento de jogos 3D e inglês avançado. Contato com arquitetura cliente/servidor, desenvolvimento para plataformas iOS e Android, NGUI e 2dToolkit são diferenciais.',
        'jpro2': 'Você é da turma dos Jedi ou dos Sith? Na verdade não importa de que lado da Força você está, mas se possui habilidade com Unity 3D, C# e manja de inglês. Noções de arquitetura cliente/servidor, NGUI e 2dToolkit são um diferencial.',
        'jpro3': 'Banco de dados e Java são seu forte? Tem inglês, experiência com arquitetura cliente/servidor, modelagem de dados, desenvolvimebto back-end para jogos e com Multithreading? Se a resposta for sim, envie seu currículo para a Farofa. Conhecimento em Smartfox, Unity3D e Linux são diferenciais.',
        'jpro4': 'Se você manja tudo de programação e gosta de rotina, aqui é seu lugar. Para a vaga é necessário experiência em PHP, Banco de dados SQL, HTML, CSS e Javascript. Diferenciais como experiência com sites responsivos e HTML 5 ganham pontos.'
    };
});

