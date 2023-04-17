// I need to take page link in a Object key.
const global = {
    currentPage: window.location.pathname,
    api: {
      apiKey: '8f28ca44b3ae15f44603c63265c7255e',
      apiUrl: 'https://api.themoviedb.org/3/'
    }
  }
// Fetch data from API
async function fetchDataApi(endpoint){
   const API_KEY = global.api.apiKey
   const API_URL = global.api.apiUrl

    showSpinner()

   const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)

   const data = await response.json()

    hideSpinner()

   return data;
}

function showSpinner(){
    document.querySelector('.spinner').classList.add('show')
}
function hideSpinner(){
    document.querySelector('.spinner').classList.remove('show')
}
//O functie pentru a afisa filmele populare
async function displayPopularMovies(){

    const {results} = await fetchDataApi('movie/popular')

    results.forEach(movie =>{
        const card = document.createElement('div')
        card.classList.add('card')
        
        card.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
                ${
                  movie.poster_path
                    ? `<img
                  src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                  class="card-img-top"
                  alt="${movie.title}"
                />`
                    : `<img
                src="../images/no-image.jpg"
                class="card-img-top"
                alt="${movie.title}"
              />`
                }
              </a>
              <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">
                  <small class="text-muted">Release: ${movie.release_date}</small>
                </p>
              </div>
        `
        document.querySelector('#popular-movies').append(card)
    })

}
//O functie pentru a afisa Show-uri populare
async function displayPopularShows(){
    const {results} = await fetchDataApi('tv/popular')
    results.forEach(show =>{
        const div = document.createElement('div')
        div.classList.add('card')
        
        div.innerHTML = `
        <a href="movie-details.html?id=${show.id}">
                ${
                  show.poster_path
                    ? `<img
                  src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                  class="card-img-top"
                  alt="${show.name}"
                />`
                    : `<img
                src="../images/no-image.jpg"
                class="card-img-top"
                alt="${show.name}"
              />`
                }
              </a>
              <div class="card-body">
                <h5 class="card-title">${show.name}</h5>
                <p class="card-text">
                  <small class="text-muted">Release: ${show.first_air_date}</small>
                </p>
              </div>
        `
        document.querySelector('#popular-shows').append(div)
    })
}


// O functie care sa adauge clasa activ nav li in functie de pagina pe care suntem
function addActiveClass(){
    const links = document.querySelectorAll('.nav-link')
    links.forEach(link => {
        if(link.getAttribute('href') === global.currentPage){
            link.classList.add('active')
        }
    })
}

// Create a function that load when page load.
function init(){
    switch(global.currentPage){
        case '/':
        case '/index.html':    
            displayPopularMovies();
            break;
        case '/shows.html':
            displayPopularShows();
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;  
        case '/tv-details.html':
            console.log('Tv Details');
            break;
        case '/search.html':
            console.log('Tv Details');
            break;               
    }
    addActiveClass();
}

document.addEventListener('DOMContentLoaded', init)