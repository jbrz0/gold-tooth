
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {},
  row: {
    flex: 1,
    alignItems: 'center',
    height: 32,
    marginBottom: 5,
    paddingTop: 8,
  },
  text: {
    color: '#F3F3F3',
    fontSize: 18,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginBottom: 110,
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
    paddingBottom: 60,
    paddingTop: 50,
  },
});
