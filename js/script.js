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
  let calculo = ((valor.first_stage.thrust_sea_level.kN)/(valor.first_stage.thrust_sea_level.kN + valor.first_stage.thrust_vacuum.kN)*100);
  let calculo2 = ((valor.first_stage.thrust_vacuum.kN)/(valor.first_stage.thrust_sea_level.kN + valor.first_stage.thrust_vacuum.kN)*100);

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
      
      <div>Second Stage:</div>
      <div>${valor.second_stage.thrust.kN} kN <br> ${valor.second_stage.thrust.lbf} lbf</div>
      <div>Payloads Meters:</div>
      <div>${valor.second_stage.payloads.composite_fairing.height.meters} M <br> ${valor.second_stage.payloads.composite_fairing.height.feet} F<br> </div>
      <div>Payloads Diameter :</div>
      <div>${valor.second_stage.payloads.composite_fairing.diameter.feet} F <br> ${valor.second_stage.payloads.composite_fairing.diameter.meters} M<br></div>
      </div>
    
    <div class="caracC">
      <div class="caracC1">
        <h2>Atmospheric acceleration:</h2>
        <div>${calculo.toFixed(2)} %:</div>
        <div>${Intl.NumberFormat('cop').format(valor.first_stage.thrust_sea_level.kN)} kN <br> ${Intl.NumberFormat('cop').format(valor.first_stage.thrust_sea_level.lbf)} lbf</div>
        </div>

      <div class="caracC2">
        <h2>Speed in space</h2>
        <div>${calculo2.toFixed(2)} %:</div>
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
      <div>Payload Weight 1 ID:</div>
      <div>${valor.payload_weights[0].id}</div>
      <div>Payload Weight 1 Name:</div>
      <div>${valor.payload_weights[0].name}</div>
      <div>Payload Weight 1 Kg:</div>
      <div>${valor.payload_weights[0].kg} Kg</div>
      <div>Payload Weight 1 Lb:</div>
      <div>${valor.payload_weights[0].lb} Lb</div>
    </div>
  </div>


    <div class="caracL">
      <img src="../storage/img/mech.svg">
      <div>
        <h2>Description:</h2> 
        <div>${valor.description}</div> 
      </div>
      <img src="../storage/img/mech.svg">
      <div>
        <h2>Country:</h2> 
        <div>${valor.country}</div> 
      </div>
      <img src="../storage/img/mech.svg">
      <div>
        <h2>Company:</h2> 
        <div>${valor.company}</div>
      </div>
      <img src="../storage/img/mech.svg">
      <div>
        <h2>The date of the first flight of the rocket:</h2> 
        <div>${valor.first_flight}</div>
      </div>
      <img src="../storage/img/mech.svg">
      <div>
        <h2>The estimated cost per rocket launch:</h2> 
        <div>$ ${Intl.NumberFormat('cop').format(valor.cost_per_launch)}</div>
      </div>
      <img src="../storage/img/mech.svg">
      <div>
        <h2>Read more about the Rocket:</h2> 
        <a target="_blank" href="${valor.wikipedia}">Wikipedia</a>
      </div>
    </div>
    `;
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
    imageContainer.appendChild(imgElement);
  });
}

fetchRocket();