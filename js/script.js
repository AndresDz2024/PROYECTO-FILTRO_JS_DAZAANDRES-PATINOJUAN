let contador = 0;

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
      console.log(data)
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function displayRocket(data) {
  const name = document.getElementById('rocket');

  const valor = data[contador];
  let calculo = ((valor.first_stage.thrust_sea_level.kN) / (valor.first_stage.thrust_sea_level.kN + valor.first_stage.thrust_vacuum.kN) * 100).toFixed(2);
  let calculo2 = ((valor.first_stage.thrust_vacuum.kN) / (valor.first_stage.thrust_sea_level.kN + valor.first_stage.thrust_vacuum.kN) * 100).toFixed(2);

  name.innerHTML = `
    <div class="NameR">
    <p>${valor.name.toUpperCase()}</p>    
    </div>
    <div class="caracR">
      <div>Rocket Height:
        <div class="progress-ba">
          <div class="progres" style="width: ${valor.height.feet}%"></div>
        </div>
      </div>
      <div>${valor.height.feet} F <br> ${valor.height.meters} M</div>
      <div>Rocket Diameter:
        <div class="progress-ba">
          <div class="progres" style="width: ${valor.diameter.meters}%"></div>
        </div>
      </div>
      <div>${valor.diameter.meters} M <br> ${valor.diameter.feet} F</div>
      <div>Rocket Mass:
        <div class="progress-ba">
          <div class="progres" style="width: ${valor.mass.kg / 1000}%"></div>
        </div>
      </div>
      <div>${valor.mass.kg} kg <br> ${valor.mass.lb} lb</div>
      <div>Second Stage:
        <div class="progress-ba">
          <div class="progres" style="width: ${valor.second_stage.thrust.kN}%"></div>
        </div>
      </div>
      <div>${valor.second_stage.thrust.kN} kN <br> ${valor.second_stage.thrust.lbf} lbf</div>
      <div>Payloads Meters:
        <div class="progress-ba">
          <div class="progres" style="width: ${valor.second_stage.payloads.composite_fairing.height.meters}%"></div>
        </div>
      </div>
      <div>${valor.second_stage.payloads.composite_fairing.height.meters} M <br> ${valor.second_stage.payloads.composite_fairing.height.feet} F</div>
      <div>Payloads Diameter:
        <div class="progress-ba">
          <div class="progres" style="width: ${valor.second_stage.payloads.composite_fairing.diameter.feet}%"></div>
        </div>
      </div>
      <div>${valor.second_stage.payloads.composite_fairing.diameter.feet} F <br> ${valor.second_stage.payloads.composite_fairing.diameter.meters} M</div>
    </div>
    <div class="caracC">
      <div class="caracC1 progress-bar" data-progress="${calculo}">
        <h3>Atmospheric <br> acceleration:</h3>
        <div>${calculo} %</div>
        <div>${Intl.NumberFormat('cop').format(valor.first_stage.thrust_sea_level.kN)} kN <br> ${Intl.NumberFormat('cop').format(valor.first_stage.thrust_sea_level.lbf)} lbf</div>
      </div>
      <div class="caracC2 progress-bar2" data-progress="${calculo2}">
        <h3>Speed in space:</h3>
        <div>${calculo2} %</div>
        <div>${Intl.NumberFormat('cop').format(valor.first_stage.thrust_vacuum.kN)} kN <br> ${Intl.NumberFormat('cop').format(valor.first_stage.thrust_vacuum.lbf)} lbf</div>
      </div>
    </div>
    <div class="caracD">
      <div class="EngineI"><h4>ENGINE INFORMATION</h4></div>
      <div class="caracD1">
        <div>Reusable:</div>
        <div>${valor.first_stage.reusable}</div>
        <div>Engines:</div>
        <div>${valor.first_stage.engines}</div>
        <div>Fuel amount tons:</div>
        <div>${valor.first_stage.fuel_amount_tons}</div>
        <div>Burn time sec:</div>
        <div>${valor.first_stage.burn_time_sec}</div>
        <div>Number:</div>
        <div>${valor.engines.number}</div>
        <div>Typer:</div>
        <div>${valor.engines.type}</div>
        <div>Version:</div>
        <div>${valor.engines.version}</div>
        <div>Layout:</div>
        <div>${valor.engines.layout}</div>
        <div>Engine loss max:</div>
        <div>${valor.engines.engine_loss_max}</div>
        <div>Propellant 1:</div>
        <div>${valor.engines.propellant_1}</div>
        <div>Propellant 2:</div>
        <div>${valor.engines.propellant_2}</div>
        <div>Thrust To Weight:</div>
        <div>${valor.engines.thrust_to_weight}</div>
      </div>
    </div>
    <div class="caracL2">
      <div class="InformationR"><h4>Information Rocket</h4></div>
      <div class="caracL2-">
        <div>Type:</div>
        <div>${valor.type}</div>
        <div>Active:</div>
        <div>${valor.active}</div>
        <div>Stages:</div>
        <div>${valor.stages}</div>
        <div>Boosters:</div>
        <div>${valor.boosters}</div>
        <div>Landing Legs:</div>
        <div>${valor.landing_legs.number}</div>
        <div>Leg Material:</div>
        <div>${valor.landing_legs.material}</div>
        <div>Payload Weights:</div>
        <div>${valor.payload_weights.length}</div>
        <div>Payload Weights Details:</div>
        <div></div>
        <div class="caracL2-d">
          ${valor.payload_weights.map((weight, index) => `
            <div>Payload Weight ${index + 1} ID:</div>
            <div>${weight.id}</div>
            <div>Payload Weight ${index + 1} Name:</div>
            <div>${weight.name}</div>
            <div>Payload Weight ${index + 1} Kg:</div>
            <div>${weight.kg} Kg</div>
            <div>Payload Weight ${index + 1} Lb:</div>
            <div>${weight.lb} Lb</div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="caracL">
      <img class="imagenDes" src="../storage/img/mech.svg">
      <div>
        <h2>Description:</h2> 
        <div>${valor.description}</div> 
      </div>
      <img class="imagenDes" src="../storage/img/mech.svg">
      <div>
        <h2>Country:</h2> 
        <div>${valor.country}</div> 
      </div>
      <img class="imagenDes" src="../storage/img/mech.svg">
      <div>
        <h2>Company:</h2> 
        <div>${valor.company}</div>
      </div>
      <img class="imagenDes" src="../storage/img/mech.svg">
      <div>
        <h2>The date of the first flight of the rocket:</h2> 
        <div>${valor.first_flight}</div>
      </div>
      <img class="imagenDes" src="../storage/img/mech.svg">
      <div>
        <h2>The estimated cost per rocket launch:</h2> 
        <div>$ ${Intl.NumberFormat('cop').format(valor.cost_per_launch)}</div>
      </div>
      <img class="imagenDes" src="../storage/img/mech.svg">
      <div>
        <h2>Read more about the Rocket:</h2> 
        <a target="_blank" href="${valor.wikipedia}">Wikipedia</a>
      </div>
    </div>
  `;

  document.querySelector('.progress-bar').style.background = `radial-gradient(closest-side, #14162C 79%, transparent 80% 100%), conic-gradient(rgb(0, 102, 255) ${calculo}%, rgb(166, 198, 228) 0)`;
  document.querySelector('.progress-bar2').style.background = `radial-gradient(closest-side, #14162C 79%, transparent 80% 100%), conic-gradient(rgb(0, 102, 255) ${calculo2}%, rgb(166, 198, 228) 0)`;

  if (valor.flickr_images.length > 0) {
    displayImages(valor.flickr_images);
  }
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

function displayImages(images) {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.classList.add('imagen1');
    imgElement.referrerPolicy = 'no-referrer';
    imageContainer.appendChild(imgElement);
  });
}

fetchRocket();
