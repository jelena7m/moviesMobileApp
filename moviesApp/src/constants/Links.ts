import Config from 'react-native-config';

const api_key = Config.API_KEY;

export const baseUrl = 'https://api.themoviedb.org/3/';

export const urlMovies =
  baseUrl + 'movie/upcoming?api_key=' + api_key + '&language=en-US&page=1';
export const urlGenres =
  baseUrl + 'genre/movie/list?api_key=' + api_key + '&language=en-US&page=1';
export const urlSearch =
  baseUrl + 'search/movie?api_key=' + api_key + '&query=';
