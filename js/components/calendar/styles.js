
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    // backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    height: 32,
    marginBottom: 5,
    paddingTop: 6,
    // marginLeft: 20,
    // marginRight: 20,


  },
  text: {
    color: '#F3F3F3',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: 'bold',
    // textAlign: 'left',
    alignItems: 'flex-start',
  },
  mt: {
    marginBottom: 12,
    paddingBottom: 28,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(243,243,243,0.1)',

  },
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
  },
  iconMenuBtnLeftActive: {
    backgroundColor: '#F5D547',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#F5D547',
    borderStyle: 'solid',
    position: 'absolute',
    right: 20,
  },
  iconMenuBtnLeft: {
    backgroundColor: 'transparent',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#F3F3F3',
    borderStyle: 'solid',
    position: 'absolute',
    right: 20,
  },
  iconMenuBtnRight: {
    backgroundColor: 'transparent',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#F3F3F3',
    borderStyle: 'solid',
    position: 'absolute',
    left: 20,
  },
  btnBottom: {
    backgroundColor: '#A01A7D',
    position: 'absolute',
    bottom: 0,
    borderRadius: 0,
    left: 0,
    right: 0,
    // paddingTop: 20,
    // paddingBottom: 20,
    height: 60,
  },
  btnBottomTxt: {
    color: '#F3F3F3',
    textAlign: 'center',
  },
  iconMenuWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 80,
    paddingTop: 60,
  },
  iconMenuWrapBottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#161925',
    borderTopWidth: 0,
  },
  textBelow: {
    // color: '#F3F3F3',
    color: 'rgba(243,243,243, 0.4)',
  },
  iconCalender: {
    color: '#F3F3F3',
    fontSize: 16,
    marginRight: 10,
  }
});