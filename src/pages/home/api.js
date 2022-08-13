import { BASE_URL, API_KEY } from "../../constants/constants";
import axios from "axios";

export function getMovieGenere() {
  return axios(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
  ).then(({ data }) => data);
}
