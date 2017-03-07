
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Content, InputGroup, Input, Button, Icon, Text } from 'native-base';

import styles from './styles';
import logoPath from '../../../images/logo.png';
import bgGradientImg from '../../../images/bgGradient.jpg';
import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';

class LoginTwo extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigator: React.PropTypes.shape({}),
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  static propTypes = {
    navigateTo: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  setUser(name) {
    this.props.setUser(name);
  }
  replaceRoute(route) {
    this.setUser(this.state.name);
    this.props.replaceAt('login', { key: route }, this.props.navigation.key);
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
        <Content style={styles.homeTopSpace} />
        <Content style={styles.homeTop} scrollEnabled={false}>
          <Image source={logoPath} style={styles.logoImg} />
        </Content>

        <Content style={styles.homeBottom} scrollEnabled={false}>
          <InputGroup style={styles.input}>
            <Icon name="ios-person-outline" style={{ color: '#F3F3F3' }} />
            <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} style={styles.inputLogin} placeholderTextColor="#F3F3F3" />
          </InputGroup>
          <InputGroup style={styles.input}>
            <Icon name="ios-lock-outline" style={{ color: '#F3F3F3' }} />
            <Input
              placeholder="PASSWORD"
              secureTextEntry
              style={styles.passwordLogin}
              placeholderTextColor="#F3F3F3"
            />
            <Icon name="ios-help-outline" style={{ textAlign: 'right', position: 'relative', bottom: 6, right: 0, color: '#F3F3F3', fontSize: 30 }} />
          </InputGroup>

          <Button style={styles.btn} onPress={() => this.navigateTo('listAll')}>
            <Text style={{ fontFamily: 'AvenirNext-Regular', color: '#161925' }}>SIGN IN</Text>
          </Button>
          <Text style={styles.signUpTxt}>Don't have an account?
            <Text style={styles.signUpInner}>Sign Up</Text></Text>
        </Content>
      </Image>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(LoginTwo);
