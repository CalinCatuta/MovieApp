// I need to take page link in a Object key.
const global = {
  currentPage: window.location.pathname
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
            console.log('Home');
            break;
        case '/shows.html':
            console.log('Shows');
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