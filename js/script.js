// I need to take page link in a Object key.
const global = {
  currentPage: window.location.pathname
}



// Create a function that load when page load.
function init(){
    switch(global.currentPage){
        case '/':
        case 'index.html':    
            console.log('Home');
            break;
        case 'shows.html':
            console.log('Shows');
            break;
        case 'movie-details.html':
            console.log('Movie Details');
            break;  
        case 'tv-details.html':
            console.log('Tv Details');
            break;
        case 'tv-details.html':
            console.log('Tv Details');
            break;               
    }
}

document.addEventListener('DOMContentLoaded', init)