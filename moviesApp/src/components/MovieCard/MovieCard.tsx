import React, {useState} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DetailsModal} from '../../modals/Details/DetailsModal';
import {GenreData} from '../../models/Genre';
import {CustomButton} from '../CustomButton/CustomButton';
import styles from './style';

export const MovieCard: React.FC<GenreData & {genres: GenreData[]}> = ({
  backdrop,
  title,
  genre,
  releaseDate,
  overview,
  genres,
}) => {
  let newGenresArray: {[key: string]: string} = {};
  genres.map((el: any) => (newGenresArray[el.id] = el.name));

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/' + backdrop,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.innerTextContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.titleRow}>
            {genre.map((id: any) => {
              if (newGenresArray[id]) {
                return (
                  <Text key={id} style={styles.text}>
                    {newGenresArray[id] + ', '}
                  </Text>
                );
              }
            })}
          </View>
          <Text style={styles.releaseDate}>{releaseDate}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => setIsModalVisible(true)}
            text="View more"
          />
        </View>
      </View>
      <DetailsModal
        onPress={() => setIsModalVisible(false)}
        isVisible={isModalVisible}
        route={{
          params: {
            title: title,
            genre: genre.map((id: any) => newGenresArray[id] + ', '),
            releaseDate: releaseDate,
            overview: overview,
            backdrop: backdrop,
          },
        }}
      />
    </View>
  );
};
