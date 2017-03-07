
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import Carousel from 'react-native-carousel-control';
import { Container, Header, Title, Text, Button, Icon } from 'native-base';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import { openDrawer } from '../../actions/drawer';
import bgGradientImg from '../../../images/bgGradient.jpg';

class Walkthrough extends Component {

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
            <Title>Walkthrough</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Header>

          <View style={styles.carouselWrap}>
            <Carousel>
              <Text style={styles.carouselSlide}><View style={styles.carouselSlideInner}>
                <Icon name="ios-color-wand-outline" style={styles.iconCarousel} />
                <Text style={styles.carouselText}>Maecenas et consequat neque,
                   at sollicitudin tellus.</Text>
              </View></Text>
              <Text style={styles.carouselSlide}><View style={styles.carouselSlideInner}>
                <Icon name="ios-game-controller-b-outline" style={styles.iconCarousel} />
                <Text style={styles.carouselText}>Quisque vehicula eros at sem faucibus,
                   ut mattis quam porta. Sed ut aliquet velit, sed tempor elit.</Text>
              </View></Text>
              <Text style={styles.carouselSlide}><View style={styles.carouselSlideInner}>
                <Icon name="ios-star-outline" style={styles.iconCarousel} />
                <Text style={styles.carouselText}>Lorem ipsum dolor sit amet,
                   consectetur adipiscing elit. Donec congue varius nibh iaculis blandit.</Text>
              </View></Text>
            </Carousel>
            <Button style={styles.walkthroughBtn} block>
              <Text style={{ color: '#161925' }}>ACCEPT</Text>
            </Button>
          </View>
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

export default connect(mapStateToProps, bindAction)(Walkthrough);
