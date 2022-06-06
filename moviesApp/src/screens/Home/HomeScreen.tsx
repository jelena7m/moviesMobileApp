import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  RefreshControl,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {MovieCard} from '../../components/MovieCard/MovieCard';
import {Colors} from '../../constants/Colors';
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
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = React.useState(false);

  const {value: search, setValue: setSearch} = useDebouncedValue();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setPage(1);
    }, 2000);
  }, []);

  useEffect(() => {
    fetchGenres().then(setGenres);
    fetchUpcomingMovies(page).then(setMovies);
  }, [page]);

  useEffect(() => {
    if (!search) return;
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
            onChangeText={txt => {
              txt === '' && fetchUpcomingMovies(page).then(setMovies);
              setSearch(txt);
            }}
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
            refreshControl={
              <RefreshControl
                tintColor={Colors.GRAY}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            showsVerticalScrollIndicator={false}
            data={movies}
            renderItem={({item}) => renderCard(item)}
            keyExtractor={(_item, index) => index.toString()}
            initialNumToRender={3}
            removeClippedSubviews={true}
            maxToRenderPerBatch={1}
            updateCellsBatchingPeriod={100}
            onEndReachedThreshold={0.2}
            onEndReached={() => setPage(page + 1)}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
