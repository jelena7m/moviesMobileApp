import Config from 'react-native-config';

export const api_key = Config.API_KEY;

export const baseUrl = 'https://api.themoviedb.org/3/';

export const urlMovies =
  baseUrl + 'movie/upcoming?api_key=' + api_key + '&language=en-US&page=';
export const urlGenres = baseUrl + 'genre/movie/list?api_key=' + api_key;
export const urlSearch =
  baseUrl + 'search/movie?api_key=' + api_key + '&query=';
