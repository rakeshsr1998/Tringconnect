import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: Platform.OS == 'ios' ? '#f9f9f9' : 'rgba(109,114,120,0.05)',
  },
  container: {
    padding: 15,
    paddingTop: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {flexDirection: 'row'},
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  nameContainer: {marginLeft: 10, justifyContent: 'center'},
  name: {
    color: '#333333',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  role: {
    color: '#333333',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
  },
  more: {
    width: 24,
    height: 24,
  },
  desc: {
    color: '#333333',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 25,
  },
  hashTags: {
    color: '#939598',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 10,
  },
  readMore: {
    color: '#5BBC2E',
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
  },
  arrow: {
    color: '#5BBC2E',
    fontFamily: 'Poppins-Medium',
    marginLeft: 3,
    fontSize: 16,
  },
  latestCon: {paddingLeft: 15},
  adContainer: {
    backgroundColor: '#dcdddf',
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '95%',
    height: 200,
    borderRadius: 10,
  },
  adTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#333333',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 21,
  },
  minorText: {
    color: '#999999',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    fontSize: 9,
    lineHeight: 13,
  },
  knowMoreBtn: {
    borderRadius: 4,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderColor: '#5BBC2E',
    borderWidth: 1,
    width: 119,
    marginRight: 10,
  },
  knowMoreText: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  postImage: {
    width: '100%',
    height: 290,
  },
  secondCon: {
    padding: 16,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#333333',
    fontFamily: 'Poppins-Light',
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 18,
  },
  rightIconCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    color: '#333333',
    fontFamily: 'Poppins-Regular',
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 18,
  },
  commentPng: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  comment: {
    color: '#333333',
    fontFamily: 'Poppins-Regular',
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 18,
  },
  line: {
    borderBottomColor: '#939598',
    borderBottomWidth: 1,
  },
  commentCon: {
    padding: 16,
    paddingTop: 15,
  },
  commentRow: {flexDirection: 'row', alignItems: 'center'},
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
  },
  secondAvatar: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginLeft: -10,
    zIndex: 9,
  },
  thirdAvatar: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginLeft: -10,
    zIndex: 11,
  },
  likedBy: {
    color: '#333333',
    fontFamily: 'Poppins-Regular',
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 18,
  },
  font: {
    fontFamily: 'Poppins-SemiBold',
  },
  multiImage: {
    height: 290 / 2,
    width: '100%',
  },
  flexOne: {
    flex: 0.6,
    padding: 2,
  },
  flexTwo: {
    flex: 0.4,
    padding: 2,
  },
  flexThree: {
    flex: 0.4,
    padding: 2,
  },
  flexFour: {
    flex: 0.6,
    padding: 2,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
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
});
