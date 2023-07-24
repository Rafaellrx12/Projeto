(function () {
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer;
  let classe = "pausando";
  //Funções iniciar
  function criarHora(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }
  function printar() {
    timer = setInterval(function () {
      relogio.innerHTML = criarHora(++segundos);
    }, 1000);
  }
  //Função pausar

  function pausarTime() {
    setTimeout(function () {
      clearInterval(timer);
    });
    setTimeout(function () {
      console.log("parou");
    });
  }

  iniciar.addEventListener("click", function (event) {
    relogio.classList.remove(classe);
    event.preventDefault();
    printar();
  });

  pausar.addEventListener("click", function (event) {
    relogio.classList.add(classe);
    event.preventDefault();
    pausarTime();
  });
  zerar.addEventListener("click", function (event) {
    event.preventDefault();
    relogio.classList.remove(classe);
    segundos = 0;
    pausarTime();
    relogio.innerHTML = `00:00:00`;
  });
})();
