
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    // backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red',
    height: 32,
    marginBottom: 5,
    paddingTop: 8,
  },
  text: {
    color: '#F3F3F3',
    fontSize: 18,
    marginBottom: 15,
    alignItems: 'center',
    fontFamily: 'Avenir-Light',
  },
  mt: {
    marginTop: 18,
  },
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
  },
});
