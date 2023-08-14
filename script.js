const minutosDisplay = document.getElementById('minutos');
const segundosDisplay = document.getElementById('segundos');
const milissegundosDisplay = document.getElementById('milissegundos');
const iniciarBtn = document.getElementById('iniciar');
const pararBtn = document.getElementById('parar');
const zerarBtn = document.getElementById('zerar');

let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let cronometro;

function atualizarDisplay() {
  minutosDisplay.textContent = minutos < 10 ? '0' + minutos : minutos;
  segundosDisplay.textContent = segundos < 10 ? '0' + segundos : segundos;
  milissegundosDisplay.textContent = milissegundos < 10 ? '00' + milissegundos : milissegundos < 100 ? '0' + milissegundos : milissegundos;
}

function iniciarCronometro() {
  cronometro = setInterval(() => {
    milissegundos += 10;
    if (milissegundos === 1000) {
      milissegundos = 0;
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
    }
    atualizarDisplay();
  }, 10);
  iniciarBtn.disabled = true;
}

function pararCronometro() {
  clearInterval(cronometro);
  iniciarBtn.disabled = false;
}

function zerarCronometro() {
  clearInterval(cronometro);
  minutos = 0;
  segundos = 0;
  milissegundos = 0;
  atualizarDisplay();
  iniciarBtn.disabled = false;
}

iniciarBtn.addEventListener('click', iniciarCronometro);
pararBtn.addEventListener('click', pararCronometro);
zerarBtn.addEventListener('click', zerarCronometro);
