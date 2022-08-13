import axios from "axios";

export function getMovieData(id) {
  return axios
    .get(
      `${process.env.BASE_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
    )
    .then(({ data }) => data);
}
