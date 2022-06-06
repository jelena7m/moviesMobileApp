import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  safeAreaContainer: {
    backgroundColor: Colors.NAVY_BLUE,
  },
  searchContainer: {
    backgroundColor: Colors.NAVY_BLUE,
    height: 70,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    width: '60%',
  },
  topCircleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: -100,
  },
  bottomCircleContainer: {
    marginLeft: -100,
    bottom: -60,
  },
  cardContainer: {
    paddingTop: 20,
    zIndex: 1,
    paddingHorizontal: 15,
    marginBottom: 70,
  },
  card: {
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    color: Colors.WHITE,
    fontWeight: '700',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
});
