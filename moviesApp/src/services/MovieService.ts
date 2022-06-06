import {urlMovies, urlSearch} from '../constants/Links';

export const fetchUpcomingMovies = async (page: number) => {
  const data = await fetch(urlMovies + page);
  const movies = await data.json();
  return movies.results;
};

export const getMoviesByQuery = async (query: string) => {
  const queryParams = encodeURI(query);
  const data = await fetch(urlSearch + queryParams);
  const movies = await data.json();
  return movies.results;
};
