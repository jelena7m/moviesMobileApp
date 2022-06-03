import {urlMovies, baseUrl} from '../constants/Links';

export const fetchUpcomingMovies = async () => {
  const data = await fetch(urlMovies);
  const movies = await data.json();
  return movies.results;
};

export const getMoviesByQuery = async (query: string) => {
  const queryParams = encodeURI(query);
  const data = await fetch(`${baseUrl}/search/movie?query=${queryParams}`);
  const movies = await data.json();
  return movies.results;
};
