const hora = document.querySelector('.hora');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const dataC = document.querySelector('.data');

function verificaDigito(digito) {
    return ("0" + digito).slice(-2);
}

function pegaData(data) {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado",];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",];

    return `${diasDaSemana[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;
}

function execulta(hora, minutos, segundos, dataC) {
    let data = new Date();
    let hora2 = data.getHours();
    let minutos2 = data.getMinutes();
    let segundos2 = data.getSeconds();
    let dataCompleta = pegaData(data);

    hora.innerHTML = verificaDigito(hora2) + ":";
    minutos.innerHTML = verificaDigito(minutos2) + ":";
    segundos.innerHTML = verificaDigito(segundos2);
    dataC.innerHTML = dataCompleta;
    setInterval(() => {
        data = new Date();
        hora2 = data.getHours();
        minutos2 = data.getMinutes();
        segundos2 = data.getSeconds();
        let dataCompleta = pegaData(data);


        hora.innerHTML = verificaDigito(hora2) + ":";
        minutos.innerHTML = verificaDigito(minutos2) + ":";
        segundos.innerHTML = verificaDigito(segundos2);
        dataC.innerHTML = dataCompleta;

    }, 1000);
}
execulta(hora, minutos, segundos, dataC);
