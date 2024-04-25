const renderCards = require("./renderCards");
const axios = require("axios");

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/movies')
        const data = response.data
        console.log(data);
        renderCards(data);
    } catch (error) {
        alert(error.message);
    }
}

fetchData();

// Función para limpiar el formulario
const clearForm = () => {
    document.getElementById('create-movie-form').reset();
  };
  
  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Obtener los datos del formulario
    const formData = {
      title: document.getElementById('title').value,
      year: parseInt(document.getElementById('year').value),
      director: document.getElementById('director').value,
      duration: document.getElementById('duration').value,
      genre: document.getElementById('genre').value.split(','), // Convertir a array separado por comas
      rate: parseFloat(document.getElementById('rate').value),
      poster: document.getElementById('poster').value
    };
  
    try {
      // Enviar los datos al backend usando axios
      const response = await axios.post('http://localhost:3000/movies', formData);
      alert('Película creada exitosamente');
      clearForm(); // Limpiar el formulario después de crear la película
    } catch (error) {
      console.error('Error al crear la película:', error.message);
      alert('Error al crear la película');
    }
  };
  
  // Asignar el manejador de eventos al botón de limpiar formulario
  document.getElementById('clear-form-btn').addEventListener('click', clearForm);
  
  // Asignar el manejador de eventos al formulario para manejar su envío
  document.getElementById('create-movie-form').addEventListener('submit', handleSubmit);



// const renderCards = require("./renderCards");
// const axios = require("axios");

// const fetchData = async() => {
//     try {
//       const response = await axios.get('http://localhost:3000/movies')
//       const data = response.data
//       console.log(data);
//       renderCards(data);
      
//     } catch (error) {
//       alert(error.message);
      
//     }
// }

// fetchData()

 




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

