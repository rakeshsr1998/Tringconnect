import {Platform, StyleSheet} from 'react-native';

const IS_IOS = Platform.OS == 'ios';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: IS_IOS ? 90 : 82,
    backgroundColor: '#f9f9f9',
    top: IS_IOS ? 30 : 0,
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
  logo: {
    width: 150,
    height: 24,
  },
  row: {flexDirection: 'row'},
  bell: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});
