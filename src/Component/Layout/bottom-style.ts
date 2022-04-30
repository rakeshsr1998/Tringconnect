import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 82,
    backgroundColor: '#5BBC2E',
    bottom: 0,
    position: 'absolute',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  menu: {
    width: 24,
    height: 24,
  },
  bar: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 4,
    marginTop: 5,
    borderRadius: 5,
  },
});
