
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 0,
    paddingRight: 0,
    paddingTop: 0,
    backgroundColor: '#F3F3F3',
  },
  listItem: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0,
  },
  menuListIcon: {
    color: '#161925',
    fontSize: 24,
    position: 'relative',
    top: -3,
  },
  menuListTxt: {
    marginLeft: 14,
  },
  menuListIconTop: {
    color: '#A01A7D',
    fontSize: 24,
    position: 'relative',
    top: -3,
  },
  menuListTxtTop: {
    marginLeft: 14,
    color: '#A01A7D',
  },
});
