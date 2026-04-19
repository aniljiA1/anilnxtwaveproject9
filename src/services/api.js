import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// Get movies (default list)
export const fetchMovies = (query = "batman", page = 1) => {
  return axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
      page,
    },
  });
};

// Get single movie details
export const fetchMovieDetails = (id) => {
  return axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
      plot: "full",
    },
  });
};

// 🔥 ADD THIS
export const searchMovies = (query, page = 1) => {
  return axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
      page,
    },
  });
};
