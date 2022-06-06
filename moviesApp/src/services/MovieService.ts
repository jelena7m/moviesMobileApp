import {baseUrl, urlMovies, urlSearch} from '../constants/Links';

export const getMovies = async (params: {query?: string; page: number}) => {
  const {query, page} = params;
  if (query) return getMoviesByQuery(query);

  return getUpcomingMovies(page);
};

const getMoviesByQuery = async (query: string) => {
  const queryParams = encodeURI(query);
  const data = await fetch(urlSearch + queryParams);
  const movies = await data.json();
  return movies.results;
};

const getUpcomingMovies = async (page: number) => {
  const data = await fetch(urlMovies + page);
  const movies = await data.json();
  return movies.results;
};
