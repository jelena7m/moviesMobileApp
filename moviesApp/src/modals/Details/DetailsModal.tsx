import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import CloseIcon from '../../assets/icons/closeIcon.svg';
import styles from './style';

interface DetailsModalProps {
  route?: {
    params: {
      title?: string;
      genre: string[];
      releaseDate?: any;
      overview?: string;
      backdrop?: any;
    };
  };
  isVisible?: boolean;
  onPress: () => void;
}

export const DetailsModal: React.FC<DetailsModalProps> = ({
  route,
  isVisible,
  onPress,
}) => {
  return (
    <Modal visible={isVisible}>
      <SafeAreaView style={styles.container}>
        <Pressable onPress={onPress} style={styles.iconContainer}>
          <CloseIcon width={30} height={30} />
        </Pressable>
        <ScrollView style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.movieTitle}>{route?.params.title}</Text>
              <View style={styles.imageContainer}>
                <FastImage
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/w500/' +
                      route?.params.backdrop,
                  }}
                  style={styles.image}
                />
              </View>
            </View>
            <View>
              <View style={styles.innerRow}>
                <Text style={styles.genreText}>Genre: </Text>
                <Text style={styles.text}>{route?.params.genre}</Text>
              </View>
              <View style={styles.innerRow}>
                <Text style={styles.genreText}>Release date: </Text>
                <Text style={styles.text}>{route?.params.releaseDate}</Text>
              </View>
            </View>
            <View style={styles.overviewContainer}>
              <Text style={styles.overviewText}>Overview:</Text>
              <Text style={styles.overviewText}>{route?.params.overview}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
