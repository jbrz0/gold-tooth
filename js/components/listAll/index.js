
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import { openDrawer } from '../../actions/drawer';
import bgGradientImg from '../../../images/bgGradient.jpg';

class ListAll extends Component {

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

            <Title>All Items</Title>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Header>

          <Content>
            <Grid style={styles.mt}>

              <Row><TouchableOpacity
                style={styles.row}
                onPress={() => this.navigateTo('login')}
              >
                <Text style={styles.text}>Login #1</Text>
              </TouchableOpacity></Row>

              <Row><TouchableOpacity
                style={styles.row}
                onPress={() => this.navigateTo('loginTwo')}
              >
                <Text style={styles.text}>Login #2</Text>
              </TouchableOpacity></Row>

              <Row><TouchableOpacity
                style={styles.row}
                onPress={() => this.navigateTo('calendar')}
              >
                <Text style={styles.text}>Calendar</Text>
              </TouchableOpacity></Row>

              <Row><TouchableOpacity
                style={styles.row}
                onPress={() => this.navigateTo('iconMenu')}
              >
                <Text style={styles.text}>Icon Menu</Text>
              </TouchableOpacity></Row>

              <Row><TouchableOpacity
                style={styles.row}
                onPress={() => this.navigateTo('walkthrough')}
              >
                <Text style={styles.text}>Walkthrough</Text>
              </TouchableOpacity></Row>

              <Row><TouchableOpacity
                style={styles.row}
                onPress={() => this.navigateTo('dashboard')}
              >
                <Text style={styles.text}>Dashboard</Text>
              </TouchableOpacity></Row>

            </Grid>
          </Content>
        </Container>
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

export default connect(mapStateToProps, bindAction)(ListAll);
