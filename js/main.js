let objT = {
    direction: 'horizontal',
    loop: false
}

if (window.screen.width <= 700) {
    objT.navigation = {
        nextEl: '.cronometroOpcao',
        prevEl: '.horaOpcao'
    }
} else {
    objT.navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
}

const swiper = new Swiper('.swiper', objT);

swiper.on('slideChange', function (e) {
    const relogio = document.querySelector('.horaOpcao');
    const crono = document.querySelector('.cronometroOpcao');
    const tamanho = (window.screen.width <= 700) ? " 0% 0% / 31px" : " 0% 0% / 40px"
    const indice = e.activeIndex;

    if ((indice == 0)) {
        relogio.style.background = "url(img/clock-color.png)" + tamanho;
        crono.style.background = "url(img/time.png)" + tamanho;
    } else {
        relogio.style.background = "url(img/clock.png)" + tamanho;
        crono.style.background = "url(img/time-color.png)" + tamanho;
    }
});
