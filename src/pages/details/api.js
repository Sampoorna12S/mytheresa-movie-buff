export function getMovieData(id) {
  return fetch(
    `${process.env.BASE_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => data);
}
