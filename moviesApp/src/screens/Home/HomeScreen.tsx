import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {MovieCard} from '../../components/MovieCard/MovieCard';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';
import {MovieData} from '../../models/Movie';
import {fetchGenres} from '../../services/GenreService';
import {
  fetchUpcomingMovies,
  getMoviesByQuery,
} from '../../services/MovieService';
import styles from './style';

export const HomeScreen = () => {
  const [genres, setGenres] = useState<any>([]);
  const [movies, setMovies] = useState<any>([]);

  const {value: search, setValue: setSearch} = useDebouncedValue();

  useEffect(() => {
    fetchGenres().then(setGenres);
    fetchUpcomingMovies().then(setMovies);
  }, []);

  useEffect(() => {
    if (!search) return;
    search === '' && fetchUpcomingMovies().then(setMovies);
    getMoviesByQuery(search).then(setMovies);
  }, [search]);

  const renderCard: React.FC<MovieData> = item => {
    return (
      <View style={styles.card}>
        <MovieCard
          backdrop={item.backdrop_path}
          title={item.title}
          genre={item.genre_ids}
          releaseDate={item.release_date}
          overview={item.overview}
          genres={genres}
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer} />
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={setSearch}
          />
          <View style={styles.headerContainer}>
            <FastImage
              source={require('../../assets/images/popcorn.png')}
              style={styles.imageContainer}
            />
            <Text style={styles.title}>TheMovieDb</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={movies}
            renderItem={({item}) => renderCard(item)}
            keyExtractor={(_item, index) => index.toString()}
            initialNumToRender={3}
            removeClippedSubviews={true}
            maxToRenderPerBatch={1}
            updateCellsBatchingPeriod={100}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
