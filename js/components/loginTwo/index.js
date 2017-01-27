
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, InputGroup, Input, Button, Icon, View, Text } from 'native-base';

import { setUser } from '../../actions/user';
import styles from './styles';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';

const {
  replaceAt,
} = actions;

const logo = require('../../../images/logo.png');

class LoginTwo extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigator: React.PropTypes.shape({}),
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
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



  componentWillMount() {
    const navigator = this.props.navigator;
  }

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      // <Container>
      //   <View style={styles.container}>
      //     <Content>
      //       <Image source={logo} style={styles.shadow}>
      //         <View style={styles.bg}>
      //           <InputGroup style={styles.input}>
      //             <Icon name="ios-person" />
      //             <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} />
      //           </InputGroup>
      //           <InputGroup style={styles.input}>
      //             <Icon name="ios-unlock-outline" />
      //             <Input
      //               placeholder="PASSWORD"
      //               secureTextEntry
      //             />
      //           </InputGroup>
      //           <Button style={styles.btn} onPress={() => this.navigateTo('listAll')}>
      //             Login
      //           </Button>
      //         </View>
      //       </Image>
      //     </Content>
      //   </View>
      // </Container>



      <Image source={require('../../../images/bgGradient.jpg')}
        style={styles.backgroundImage}>
        <Content style={styles.homeTopSpace}></Content>
        <Content style={styles.homeTop} scrollEnabled={false}>
          <Image source={require('../../../images/logo.png')} style={styles.logoImg} />
        </Content>

        <Content style={styles.homeBottom} scrollEnabled={false}>
          <InputGroup style={styles.input}>
            <Icon name="ios-person-outline" style={{color: '#F3F3F3'}} />
            <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} style={styles.inputLogin} placeholderTextColor='#F3F3F3' />
          </InputGroup>
          <InputGroup style={styles.input}>
            <Icon name="ios-lock-outline" style={{color: '#F3F3F3'}} />
            <Input
              placeholder="PASSWORD"
              secureTextEntry
              style={styles.passwordLogin}
              placeholderTextColor='#F3F3F3'
            />
            <Icon name='ios-help-outline' style={{textAlign: 'right', position: 'relative', bottom: 6, right: 0, color: '#F3F3F3', fontSize: 30}} />
          </InputGroup>

          <Button style={styles.btn} onPress={() => this.navigateTo('listAll')}>
            <Text style={{fontFamily: 'AvenirNext-Regular', color: '#161925'}}>SIGN IN</Text>
          </Button>
          <Text style={styles.signUpTxt}>Don't have an account? <Text style={styles.signUpInner}>Sign Up</Text></Text>
        </Content>
      </Image>




    );
  }
}

// function bindActions(dispatch) {
//   return {
//     replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
//     setUser: name => dispatch(setUser(name)),
//   };
// }
//
// const mapStateToProps = state => ({
//   navigation: state.cardNavigation,
// });
//
// export default connect(mapStateToProps, bindActions)(Login);






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
