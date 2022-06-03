import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  titleContainer: {
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 20,
    color: Colors.NAVY_BLUE,
    fontWeight: '700',
  },
  text: {
    fontSize: 16,
    color: Colors.WHITE,
  },
  overviewText: {
    fontSize: 16,
    color: Colors.WHITE,
    paddingBottom: 5,
  },
  genreText: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  innerContainer: {
    paddingHorizontal: 15,
  },
  innerRow: {
    flexDirection: 'row',
  },
  overviewContainer: {
    backgroundColor: Colors.WHITE_O4,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 250,
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainer: {
    backgroundColor: Colors.GRAY,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  iconContainer: {
    paddingLeft: 5,
    paddingTop: 5,
  },
});
