import axios from 'axios';

const API_KEY = 'ccf904bfa0cd14268f5b456c99ece816';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchTrendMovies = async () => {
  return await axios
    .get(`trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.data.results);
};

const fetchMovieDetails = async movieId => {
  return await axios
    .get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    )
    .then(res => res.data);
};

const fetchMovies = async query => {
  return await axios
    .get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
    )
    .then(res => res.data.results);
};

const fetchCredits = async movieId => {
  return await axios
    .get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.data.cast);
};

const fetchReviews = async movieId => {
  return await axios
    .get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.data.results);
};

const fetch = {
  fetchTrendMovies,
  fetchMovieDetails,
  fetchMovies,
  fetchCredits,
  fetchReviews,
};

export default fetch;