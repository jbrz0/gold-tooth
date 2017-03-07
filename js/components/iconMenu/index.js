
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Container, Header, Title, Text, Button, Icon } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import { openDrawer } from '../../actions/drawer';
import bgGradientImg from '../../../images/bgGradient.jpg';

class iconMenu extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
    openDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (

      <Image
        source={bgGradientImg}
        style={styles.backgroundImage}
      >
        <Container theme={myTheme} style={styles.container}>
          <Header>

            <Title>Icon Menu</Title>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Header>

          <View style={styles.iconMenuWrap}>

            <Grid style={styles.mt}>
              <Row>
                <Col><Button style={styles.iconMenuBtnLeftActive} >
                  <Icon name="ios-home-outline" style={{ color: '#161925' }} />
                </Button></Col>
                <Col><Button style={styles.iconMenuBtnRight} >
                  <Icon name="ios-calculator-outline" style={{ color: '#F3F3F3' }} />
                </Button></Col>
              </Row>
            </Grid>
            <Grid style={styles.mt}>
              <Row>
                <Col><Button style={styles.iconMenuBtnLeft} >
                  <Icon name="ios-keypad-outline" style={{ color: '#F3F3F3' }} />
                </Button></Col>
                <Col><Button style={styles.iconMenuBtnRight} >
                  <Icon name="ios-analytics-outline" style={{ color: '#F3F3F3' }} />
                </Button></Col>
              </Row>
            </Grid>
            <Grid style={styles.mt}>
              <Row>
                <Col><Button style={styles.iconMenuBtnLeft} >
                  <Icon name="ios-list-outline" style={{ color: '#F3F3F3' }} />
                </Button></Col>
                <Col><Button style={styles.iconMenuBtnRight} >
                  <Icon name="ios-person-outline" style={{ color: '#F3F3F3' }} />
                </Button></Col>
              </Row>
            </Grid>
            <Grid style={styles.mt}>
              <Row>
                <Col><Button style={styles.iconMenuBtnLeft} >
                  <Icon name="ios-clock-outline" style={{ color: '#F3F3F3' }} />
                </Button></Col>
                <Col><Button style={styles.iconMenuBtnRight} >
                  <Icon name="ios-book-outline" style={{ color: '#F3F3F3' }} />
                </Button></Col>
              </Row>
            </Grid>
          </View>
        </Container>

        <Button style={styles.btnBottom} onPress={() => this.navigateTo('login')}>
          <Text style={styles.btnBottomTxt}>LOGOUT</Text>
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

export default connect(mapStateToProps, bindAction)(iconMenu);
