
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Container, Header, Title, Text, Button, Icon } from 'native-base';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import { openDrawer } from '../../actions/drawer';
import bgGradientImg from '../../../images/bgGradient.jpg';

class Dashboard extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
    openDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() { // eslint-disable-line class-methods-use-this
    return (

      <Image
        source={bgGradientImg}
        style={styles.backgroundImage}
      >
        <Container theme={myTheme} style={styles.container}>
          <Header>

            <Title>Dashboard</Title>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Header>

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 130,
            }}
          >
            <View style={{ backgroundColor: '#F5D547', position: 'relative', top: 30, right: -40, paddingTop: 10, paddingBottom: 10, paddingLeft: 16, paddingRight: 16, borderRadius: 100, zIndex: 2 }}><Text style={{ textAlign: 'center' }}>8</Text></View>
            <View style={{ width: 150, height: 150, backgroundColor: '#A01A7D', borderRadius: 75 }}>
              <Text style={{ textAlign: 'center', position: 'relative', top: 42, backgroundColor: 'transparent', fontSize: 60, height: 60, paddingTop: 52, width: 130, left: 10, color: '#F3F3F3', fontFamily: 'AvenirNext-UltraLight' }}>16</Text>
              <Text style={{ textAlign: 'center', position: 'relative', top: 44, backgroundColor: 'transparent', fontSize: 12, color: '#F3F3F3' }}>Tue</Text>
            </View>
          </View>
        </Container>

        <Button style={styles.btnBottom} onPress={() => this.navigateTo('login')}>
          <Text style={styles.btnBottomTxt}>
            <Text style={styles.btnBottomTxtInner}>READ MORE</Text>
          </Text>
          <Icon name="ios-arrow-dropdown-outline" style={{ marginTop: 4, fontSize: 18 }} />
        </Button>
      </Image>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    setIndex: index => dispatch(setIndex(index)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Dashboard);
