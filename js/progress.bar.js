$(window).scroll(function () {
    var posicaoTela = $(window).scrollTop(),
        posicaoReq = $('#analiseRequisitos').offset().top,
        posicaoTeste = $('#testeSoftware').offset().top,
        posicaoProgramacao = $('#programacao').offset().top,
        posicaoReq = posicaoReq - 400,
        posicaoTeste = posicaoTeste - 400,
        posicaoProgramacao = posicaoProgramacao -400;

    if (posicaoTela > (posicaoReq)) {
        $('.levantamento').animate({
            width: '95%'
        }, 2000);
        $('.uc').animate({
            width: '85%'
        }, 2000);
        $('.epe').animate({
            width: '90%'
        }, 2000);
        $('.historiaUsuario').animate({
            width: '70%'
        }, 2000);
        $('.processos').animate({
            width: '30%'
        }, 2000);
        $('.modelagemBanco').animate({
            width: '18%'
        }, 2000);
    }
    if (posicaoTela > (posicaoTeste)) {
        $('.docTeste').animate({
            width: '95%'
        }, 2000);
        $('.execTeste').animate({
            width: '95%'
        }, 2000);
        $('.autoTeste').animate({
            width: '18%'
        }, 2000);
    }
    if (posicaoTela > (posicaoProgramacao)) {
        $('.frontEnd').animate({
            width: '40%'
        }, 2000);
        $('.java').animate({
            width: '20%'
        }, 2000);
        $('.kotlin').animate({
            width: '15%'
        }, 2000);
        $('.banco').animate({
            width: '20%'
        }, 2000);
        $('.git').animate({
            width: '80%'
        }, 2000);
    }
});