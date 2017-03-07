
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
    borderBottomWidth: 0,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#F5D547',
    shadowRadius: 0,
    shadowOpacity: 0,
    alignSelf: 'stretch',
    borderRadius: 30,
    paddingTop: 4,
    paddingBottom: 4,
    height: 60,
  },
  logoImg: {
    flex: 1,
    width: 170,
    height: 60,
    margin: 0,
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  homeTopSpace: {
    flex: 2,
  },
  homeTop: {
    flex: 2,
  },
  homeBottom: {
    flex: 3,
    marginLeft: 20,
    marginRight: 20,
  },
  signUpTxt: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#F3F3F3',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 12,
    marginTop: 12,
  },
  inputLogin: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 14,
    marginLeft: 10,
    color: '#F3F3F3',
  },
  passwordLogin: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 14,
    marginLeft: 10,
    color: '#F3F3F3',
  },
  forgotTxt: {
    color: '#F3F3F3',
    textAlign: 'right',
    fontSize: 10,

  },
  signUpInner: {
    fontWeight: 'bold',
    color: '#F3F3F3',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 10,
  },
});
