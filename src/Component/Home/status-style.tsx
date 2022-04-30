import {Platform, StyleSheet} from 'react-native';
const IS_IOS = Platform.OS == 'ios';

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
    borderRadius: 12 / 2,
    backgroundColor: '#5BBC2E',
    position: 'absolute',
    right: IS_IOS ? 10 : 15,
    bottom: IS_IOS ? 20 : 25,
  },
  cardContainer: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
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
  closeIcon: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCover: {
    height: 200,
    width: '100%',
  },
  more: {
    width: 24,
    height: 24,
  },
});
