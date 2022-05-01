import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flatList: {
    width: 10,
    backgroundColor: '#ffffff',
  },
  regText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  regBtn: {
    backgroundColor: '#5BBC2E',
    borderRadius: 4,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  name: {
    color: '#333333',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  pad: {
    padding: 10,
  },
  card: {
    backgroundColor: 'rgba(109,114,120,0.05)',
    padding: 10,
    borderRadius: 10,
    width: 200,
  },
  img: {
    width: '100%',
    height: 163,
    borderRadius: 10,
  },
  closeIcon: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9,
    right: 17,
    top: 17,
  },
  more: {
    width: 14,
    height: 14,
  },
});
