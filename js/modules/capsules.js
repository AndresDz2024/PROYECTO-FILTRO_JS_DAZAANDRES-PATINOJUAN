let contador = 0;
let capsulesData = [];

async function fetchCapsules() {
  const url = `https://api.spacexdata.com/v4/capsules`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    capsulesData = await response.json();
    displayCapsule();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

async function displayCapsule() {
  const name = document.getElementById('capsule');
  const valor = capsulesData[contador];

  let launchesHtml = '';
  if (valor.launches.length > 0) {
    for (let i = 0; i < valor.launches.length; i++) {
      const launchId = valor.launches[i];
      try {
        const launchResponse = await fetch(`https://api.spacexdata.com/v4/launches/${launchId}`);
        const launchData = await launchResponse.json();
        console.log(launchData)
        launchesHtml += `
          <div>
            <p>Launch Name: ${launchData.name}</p>
            <br>
            <p>Launch Date: ${new Date(launchData.date_utc).toLocaleDateString()}</p>
            <br>
            <a href="${launchData.links.webcast}">Webcast</a>
            <br>
            <br>
            <a href="${launchData.links.wikipedia}">Wikipedia</a>
            <br>
            <br>
            <img class="imgL" src="${launchData.links.patch.large}">
            <br>
            <br>
            <div class="EngineI"></div>
          </div>
        `;
      } catch (error) {
        console.error('Error fetching launch data:', error);
        launchesHtml += `<div>Error fetching launch data for launch ID: ${launchId}</div>`;
      }
    }}

  name.innerHTML = `
    <div>
      <div class="capL">
        <div>Reuse count:</div>
        <p>${valor.reuse_count}</p>
        <div>Water landings:</div>
        <p>${valor.water_landings}</p>
        <div>Land landings:</div>
        <p>${valor.land_landings}</p>
        <div>Last update:</div>
        <p>${valor.last_update}</p>
      </div>
      <div class="capR">
        <div>Serial:</div>
        <p>${valor.serial} <br></p>
        <div>Status:</div>
        <p>${valor.status}</p>
        <div>Type:</div>
        <p>${valor.type}</p>
      </div>
      <div class="CapsulesLaunch">
        ${launchesHtml}
      </div>
    </div>
  `;
}

function cambiarContador(valor) {
  contador = valor;
  displayCapsule(); 
}

for (let i = 0; i <= 24; i++) {
  document.getElementById(`button${i + 1}`).addEventListener('click', function() {
    cambiarContador(i);
  });
}

fetchCapsules();
