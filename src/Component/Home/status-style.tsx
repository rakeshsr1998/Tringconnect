import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    flex: 1,
    height: 123,
    padding: 10,
    paddingRight: 0,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  plusIcon: {
    width: 70,
    height: 70,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 12/2,
    backgroundColor: '#5BBC2E',
    position: 'absolute',
    right: 10,
    bottom: 20
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
