import {Platform, StyleSheet} from 'react-native';

const IS_IOS = Platform.OS == 'ios';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    flex: 1,
    height: 123,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  cardContainer: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderColor: '#979797',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  name: {
    color: '#333333',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    textAlign: 'center',
  },
});
