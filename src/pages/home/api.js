import { BASE_URL, API_KEY } from "../../constants/constants";
export function getMovieGenere() {
  console.log("process", BASE_URL);
  return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.json())
    .then((data) => data);
}
