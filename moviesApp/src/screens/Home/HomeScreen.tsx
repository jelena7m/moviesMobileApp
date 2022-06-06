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
import {GenreData} from '../../models/Genre';
import {MovieData} from '../../models/Movie';
import {fetchGenres} from '../../services/GenreService';
import {getMovies} from '../../services/MovieService';
import styles from './style';

export const HomeScreen = () => {
  const [genres, setGenres] = useState<GenreData[]>([]);
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = React.useState(false);

  const {value: search, setValue: setSearch} = useDebouncedValue();

  useEffect(() => {
    fetchGenres().then(setGenres);
  }, []);

  useEffect(() => {
    setRefreshing(true);
    getMovies({query: search, page}).then(data => {
      setMovies(data);
      setRefreshing(false);
    });
  }, [search, page]);

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
            refreshControl={
              <RefreshControl tintColor={Colors.GRAY} refreshing={refreshing} />
            }
            showsVerticalScrollIndicator={false}
            data={movies}
            renderItem={({item}) => renderCard(item)}
            keyExtractor={item => item.id.toString()}
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
