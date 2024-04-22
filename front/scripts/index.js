const renderCards = require("./renderCards");
const axios = require("axios");

const fetchData = async() => {
    try {
      const response = await axios.get("http://localhost:3000/movies");
      const data = response.data;
      renderCards(data);
    } catch (error) {
      alert(error.message);
      
    }
};




// ----------------------------------------------------------------
// $.get("https://students-api.up.railway.app/movies", (data,) => {
//   renderCards(data);
// });




// ----------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', function() {
//     const movieContainer = document.getElementById('movie-container');



//     //----------------------tempData ------------------------------------------
  
//     // Iterar sobre el array tempData y generar las tarjetas de películas
//     tempData.forEach(function(movie) {
//       // Crear elementos HTML para la tarjeta de película
//       const movieCard = document.createElement('div');
//       movieCard.classList.add('movie-card');
  
//       const title = document.createElement('a');
//       title.href = '#'; // Esto se puede actualizar para redireccionar a la página correspondiente
//       title.textContent = movie.title;
  
//       const poster = document.createElement('img');
//       poster.src = movie.poster;
//       poster.alt = movie.title;

//       const details = document.createElement('p');
//     details.innerHTML = `<strong>Year:</strong> ${movie.year}<br>
//                          <strong>Director:</strong> ${movie.director}<br>
//                          <strong>Duration:</strong> ${movie.duration}<br>
//                          <strong>Genre:</strong> ${movie.genre.join(', ')}<br>
//                          <strong>Rate:</strong> <span class="rate">${movie.rate}</span>`; // Agregamos una clase para estilizar el rate
  
//       // Agregar elementos a la tarjeta de película
//       movieCard.appendChild(title);
//       movieCard.appendChild(poster);
//       movieCard.appendChild(details);
      
  
//       // Agregar la tarjeta de película al contenedor
//       movieContainer.appendChild(movieCard);
//     });
    
//     //----------------------------------------------------------------
  
//   });

