<!DOCTYPE html>
<html>
    <head>
        <title>FAROFASTUDIOSJOBS!</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="<?php bloginfo('stylesheet_url'); ?>/jobs.css" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script type="text/javascript">
            var template_url = "<?php bloginfo('template_url'); ?>";
            var ajaxUrl = "<?php echo admin_url('admin-ajax.php'); ?>";
        </script>
        <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jobs.js"></script>
        <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jobs-form.js"></script> 
    </head>
    <body>
        <?php if (wp_is_mobile()) { ?>
            <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jobs-mobile.js"></script>
        <?php } ?>
        <header>
            <div id="bannerBg">
                <!--<div id="logo"></div>-->
                <div id="bannerTop"></div>
                <!--<a href="#"><div id="fale"></div></a>-->
            </div>
            <?php
            //Bloco em php apenas para não aparecerem os blocos comentados no navegador.
//            <nav>
//                <div id="menu">
//                    <!--<ul>
//                    <li class="blue"><a href="#"><span>ux</span></a></li>
//                        <li class="yellow"><a href="#"><span>criação</span></a></li>
//                        <li class="purple"><a href="#"><span>desenvolvimento</span></a></li>
//                    </ul>-->
//                </div>
//            </nav>
            ?>
        </header>
        <div class="jobs">
            <div id="no-jobs">
                <h1>No momento, não há vagas disponíveis. Volte em breve!</h1>
            </div>
            <?php
            //Bloco em php apenas para não aparecerem os blocos comentados no navegador.
//            <!--<div class="job_ux" id="jux1">
//                <p>Arquiteto de Informação Pleno</p>
//            </div>
//            <div class="job_ux" id="jux2">
//                <p>Arquiteto de Informação Júnior</p>
//            </div>
//            <div class="job_ilu" id="jilu1">
//                <p>Game Designer Pleno</p>
//            </div>
//            <div class="job_prog" id="jpro4">
//                <p>Desenvolvedor Web Pleno</p>
//            </div>
//            <div class="job_ilu" id="jilu2">
//                <p>Game Designer Júnior</p>
//            </div>
//            <div class="job_ilu" id="jilu3">
//                <p>Designer de Interfaces Pleno</p>
//            </div>
//            <div class="job_ilu" id="jilu4">
//                <p>Designer de Interfaces Júnior</p>
//            </div>
//            <div class="job_ilu" id="jilu5">
//                <p>Ilustrador Pleno</p>
//            </div>
//            <div class="job_ilu" id="jilu6">
//                <p>Modelador 3D<br>Pleno</p>
//            </div>
//            <div class="job_ilu" id="jilu7">
//                <p>Animador 3D Pleno</p>
//            </div>               
//            <div class="job_prog" id="jpro1">
//                <p>Desenvolvedor C# Unity Pleno</p>
//            </div>
//            <div class="job_prog" id="jpro2">
//                <p>Desenvolvedor C# Unity Júnior</p>
//            </div>
//            <div class="job_prog" id="jpro3">
//                <p>Analista de Sistemas Sênior</p>
//            </div>-->
            ?>
        </div>
        <?php
        //Bloco em php apenas para não aparecerem os blocos comentados no navegador.
//        <div id="white_content">
//            <div id="border"></div>
//            <a href="#"><div id="close_btn"></div></a>
//            <h1>Título da Vaga</h1>
//            <div id="description"><p>Descrição da Vaga</p></div>
//            <p id="vaga"></p>
//            <form id="formCon">
//                <div class="left">
//                    <input type="hidden" name="jobname" id="jobname" value=""/>
//                    <label for="name">NOME E SOBRENOME <span class="required">*</span></label><input name="name"/>
//                    <label for="email">EMAIL <span class="required">*</span></label><input name="email"/>
//                    <label for="link">LINK DO PORTFÓLIO</label><input name="link"/>
//                    <label for="salary">PRETENSÃO SALARIAL <span class="required">*</span></label><input name="salary"/>
//                    <label for="linkedin">LINKEDIN</label><input name="linkedin"/>
//                    <label for="cv">CURRÍCULO</label><input type="file" name="cv"/>
//                </div>
//                <div class="right">
//                    <label for="description">O QUE PRECISAMOS SABER SOBRE VOCÊ? <span class="required">*</span></label><textarea name="description"> </textarea>
//
//                    <div onclick="sendMail()" id="submit"></div>
//                    <div id="emailResult"></div>
//                </div>
//            </form>
//        </div>
//        <div id="black_overlay"></div>
        ?>
        <footer>
            <?php if (!wp_is_mobile()) { ?>
                <div class="fb-share-button" data-href="http://farofastudios.com.br/jobs" data-layout="button"></div>
                <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://farofastudios.com.br/jobs" data-count="none">Tweet</a>
                <div class="g-plus" data-action="share" data-annotation="none" data-href="http://farofastudios.com.br/jobs"></div>
            <?php } ?>
            <a href="http://farofastudios.com.br/" target="_blank"><span></span></a>
        </footer>
        <script>
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-60527460-3', 'auto');
            ga('send', 'pageview');

        </script>
        <div id="fb-root"></div>
        <script>(function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>
        <script>!function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, 'script', 'twitter-wjs');
        </script>
        <script src="https://apis.google.com/js/platform.js" async defer>
            {
                lang: 'pt-BR'
            }
        </script>
    </body>
</html>
