// tmdb.js

import axios from 'axios';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint, params = {}) => {
  const url = `${TMDB_BASE_URL}/${endpoint}`;
  const response = await axios.get(url, {
    params: { api_key: TMDB_API_KEY, ...params },
  });
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const movieDetails = await fetchMovies(`movie/${movieId}`);
  const videosResponse = await fetchMovies(`movie/${movieId}/videos`);
  
  const trailerVideo = videosResponse.results.find(video => video.type === 'Trailer');
  const youtubeUrl = trailerVideo ? `https://www.youtube.com/watch?v=${trailerVideo.key}` : null;
  
  return {
    ...movieDetails,
    duration: movieDetails.runtime,
    youtubeUrl, // Add YouTube URL for the trailer
    description: movieDetails.overview, // Add description field
    ageRating: movieDetails.certification, // Add age rating field
  };
};

export const searchMovies = async (query) => {
  return fetchMovies('search/movie', { query });
};

export const getTrendingMovies = async () => {
  return fetchMovies('trending/movie/week');
};

export const yearMovies = async (query) => {
  return fetchMovies('search/year', { query });
};
