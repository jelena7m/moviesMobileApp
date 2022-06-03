import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 270,
    backgroundColor: Colors.GRAY,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
    width: '35%',
    paddingTop: 10,
  },
  innerTextContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.WHITE,
    paddingRight: 5,
  },
  title: {
    fontSize: 16,
    color: Colors.NAVY_BLUE,
    paddingRight: 5,
    fontWeight: '700',
  },
  releaseDate: {
    fontSize: 16,
    color: Colors.WHITE,
    paddingRight: 5,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  textRow: {
    flexDirection: 'row',
    paddingBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'column-reverse',
    position: 'absolute',
    bottom: 5,
    top: 0,
    alignSelf: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.GRAY,
  },
  image: {
    height: 200,
    width: 200,
  },
  titleRow: {
    paddingBottom: 10,
  },
});
