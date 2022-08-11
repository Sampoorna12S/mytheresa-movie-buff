export function getMovieGenere (){
  return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=78a2d3de45b3e1bd9f050373170225b0&language=en-US')
  .then((response) => response.json())
  .then((data) => data);
}