import {Platform, StyleSheet} from 'react-native';

const IS_IOS = Platform.OS == 'ios';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    margin: 12,
    marginRight: 0,
    padding: 15,
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'rgba(109,114,120,0.05)',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
  arrowContainer: {
    backgroundColor: 'rgba(109,114,120,0.05)',
    padding: Platform.OS == 'ios' ? 10 : 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
