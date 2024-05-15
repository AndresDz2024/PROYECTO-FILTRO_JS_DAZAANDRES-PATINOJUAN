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
    <div class="name"></div>
        <div>Headquarters:</div>
        <div>addres:</div>
        <p>${data.headquarters.addres}</p>
        <div>City:</div>
        <p>${data.headquarters.city}</p>
        <div>State:</div>
        <p>${data.headquarters.state}</p>
        <a href="${data.links.website}">Website</a>
        <a href="${data.links.flickr}">Flickr</a>
        <a href="${data.links.twitter}">Twitter</a>
        <a href="${data.links.elon_twitter}">Twiter De Elon</a>
        <div>Company Name:</div>
        <p>${data.name}</p>
        <div>Founder:</div>
        <p>${data.founder}</p>
        <div>Founded in:</div>
        <p>${data.founded}</p>
        <div>employees:</div>
        <p>${data.employees}</p>
        <div>Vehicles:</div>
        <p>${data.vehicles}</p>
        <div>Launch Sites:</div>
        <p>${data.launch_sites}</p>
        <div>Test Sites:</div>
        <p>${data.test_sites}</p>
        <div>CEO:</div>
        <p>${data.ceo}</p>
        <div>CTO:</div>
        <p>${data.cto}</p>
        <div>COO:</div>
        <p>${data.coo}</p>
        <div>CTO Propulsion:</div>
        <p>${data.cto_propulsion}</p>
        <div>Valuation:</div>
        <p>${data.valuation}</p>
        <div>Summary:</div>
        <p>${data.summary}</p>

    `;
}

fetchCapsules()