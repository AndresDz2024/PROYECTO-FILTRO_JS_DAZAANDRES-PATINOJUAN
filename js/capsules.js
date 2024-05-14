let contador1 = 0

function fetchCapsules() {
    const url = `https://api.spacexdata.com/v4/Capsules`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayCapsules(data);
        console.log(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }


function displayCapsules(data){
    const capsules = document.getElementById('capsules')

    const info = data[contador1]

    capsules.innerHTML = `
    <div> class="Name"</div>
       <p>${capsules.serial}<p>
    
    
    
    `
}