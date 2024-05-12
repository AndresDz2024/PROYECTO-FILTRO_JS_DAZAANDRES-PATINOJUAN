let contador = 0; // Variable para llevar la cuenta de qué cohete se está mostrando

function fetchRocket() {
  const url = `https://api.spacexdata.com/v4/Rockets`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayRocket(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function displayRocket(data) {
  const name = document.getElementById('rocket');

  const valor = data[contador];
  
  name.innerHTML = `
    <div class="NameR">
      <p>${valor.name}</p>
    </div>
    <div class="caracR">
      <div>Rocket Height:</div>
      <div>${valor.height.feet} F <br> ${valor.height.meters} M</div>
      <div>Rocket diameter:</div>
      <div>${valor.diameter.meters} M <br> ${valor.diameter.feet} F</div>
      <div>Rocket mass:</div>
      <div>${valor.mass.kg} kg <br> ${valor.mass.lb} lb</div>
      <div>First Stage:</div>
      <div>${valor.first_stage.thrust_sea_level.kN} kN <br> ${valor.first_stage.thrust_sea_level.lbf} lbf</div>
      <div>Thrust Vacuum:</div>
      <div>${valor.first_stage.thrust_vacuum.kN} kN <br> ${valor.first_stage.thrust_vacuum.lbf} lbf </div>
      <div>Reusable:</div>
      <div>${valor.first_stage.reusable}</div>
      <div>Second Stage:</div>
      <div>${valor.second_stage.thrust.kN} kN <br> ${valor.second_stage.thrust.lbf} lbf</div>
      <div>Paylods:</div>
      <div>${valor.second_stage.thrust.kN} kN <br> ${valor.second_stage.thrust.lbf} lbf</div>
    </div>`;
}

function cambiarContador(valor) {
  contador = valor;
  fetchRocket(); 
}

document.getElementById('button1').addEventListener('click', function() {
  cambiarContador(0);
});

document.getElementById('button2').addEventListener('click', function() {
  cambiarContador(1);
});

document.getElementById('button3').addEventListener('click', function() {
  cambiarContador(2);
});

document.getElementById('button4').addEventListener('click', function() {
  cambiarContador(3);
});

fetchRocket();