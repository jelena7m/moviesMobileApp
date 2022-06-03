import {urlGenres} from '../constants/Links';

export const fetchGenres = async () => {
  const data = await fetch(urlGenres);
  const genres = await data.json();
  return genres.genres;
};
