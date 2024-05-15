let contador = 0;
function fetchCapsules() {
  const url = `https://api.spacexdata.com/v4/history/`;

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
  const valor = data[contador];


  name.innerHTML = `
    <div class="name"></div>
    <div class="name">${valor.links.article}</div>
    


    `;
}

fetchCapsules()

function cambiarContador(valor) {
    contador = valor;
    fetchCapsules(); 
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
  
  document.getElementById('button5').addEventListener('click', function() {
    cambiarContador(4);
  });
  
  document.getElementById('button6').addEventListener('click', function() {
    cambiarContador(5);
  });
  
  document.getElementById('button7').addEventListener('click', function() {
    cambiarContador(6);
  });
  
  document.getElementById('button8').addEventListener('click', function() {
    cambiarContador(7);
  });
  
  document.getElementById('button9').addEventListener('click', function() {
    cambiarContador(8);
  });
  
  document.getElementById('button10').addEventListener('click', function() {
    cambiarContador(9);
  });
  
  document.getElementById('button11').addEventListener('click', function() {
    cambiarContador(10);
  });
  
  document.getElementById('button12').addEventListener('click', function() {
    cambiarContador(11);
  });
  
  document.getElementById('button13').addEventListener('click', function() {
    cambiarContador(12);
  });
  
  document.getElementById('button14').addEventListener('click', function() {
    cambiarContador(13);
  });
  
  document.getElementById('button15').addEventListener('click', function() {
    cambiarContador(14);
  });
  