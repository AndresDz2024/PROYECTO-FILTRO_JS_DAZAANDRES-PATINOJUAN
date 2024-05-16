let contador = 0;
function fetchCapsules() {
  const url = `https://api.spacexdata.com/v4/company/`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayCapsule(data);
      console.log(data)
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function displayCapsule(data) {
  const name = document.getElementById('capsule');

  name.innerHTML = `
    <div class="ubication">
      <h2>Headquarters:</h2>
      <br>
      <h3>addres:</h3>
      <div>${data.headquarters.address}</div>
      <br>
      <h3>City:</h3>
      <div>${data.headquarters.city}</div>
      <br>
      <h3>State:</h3>
      <div>${data.headquarters.state}</div>
    </div>
    <div class="links">
      <a href="${data.links.website}">Website</a>
      <a href="${data.links.flickr}">Flickr</a>
      <a href="${data.links.twitter}">Twitter</a>
      <a href="${data.links.elon_twitter}">Twiter De Elon</a>
    </div>
    <div class="information">  
      <div>Company Name:</div>
      <div>${data.name}</div>
      <div>Founder:</div>
      <div>${data.founder}</div>
      <div>Founded in:</div>
      <div>${data.founded}</div>
      <div>employees:</div>
      <div>${data.employees}</div>
      <div>Vehicles:</div>
      <div>${data.vehicles}</div>
      <div>Launch Sites:</div>
      <div>${data.launch_sites}</div>
      <div>Test Sites:</div>
      <div>${data.test_sites}</div>
      <div>CEO:</div>
      <div>${data.ceo}</div>
      <div>CTO:</div>
      <div>${data.cto}</div>
      <div>COO:</div>
      <div>${data.coo}</div>
      <div>CTO Propulsion:</div>
      <div>${data.cto_propulsion}</div>
      <div>Valuation:</div>
      <div>${data.valuation}</div>
    </div>
    <div class="summary">
      <h2>Summary:</h2>
      <div>${data.summary}</div>
    </div>  

    `;
}

fetchCapsules()