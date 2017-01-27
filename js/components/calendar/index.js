
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity, AppRegistry, Dimensions, StyleSheet } from 'react-native';
// import { Content, Text, List, ListItem } from 'native-base';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import { openDrawer } from '../../actions/drawer';
import { Grid, Row, Col } from 'react-native-easy-grid';

import Calendar from 'react-native-calendar';

const customStyle = {
  calendarContainer: {
    backgroundColor: 'transparent',
    marginTop: 20,
    borderTopWidth: 0,
  },
  controlButtonText: {
    color: '#F3F3F3',
    fontSize: 14,
  },
  currentDayCircle: {
    // backgroundColor: '#F3F3F3',
    backgroundColor: '#F5D547',
    borderRadius: 0,
  },
  currentDayText: {
    color: '#F3F3F3',
  },
  day: {
    color: '#F3F3F3',
    borderTopWidth: 0,
  },
  // dayHeading: {
  //   color: 'red',
  //   backgroundColor: 'red',
  // },
  controlButton: {
    backgroundColor: 'transparent',
  },
  selectedDayCircle: {
    backgroundColor: '#F5D547',
    borderRadius: 0,
  },
  selectedDayText: {
    color: '#161925',
  },
  title: {
    color: '#F3F3F3',
    fontSize: 14,
  },
  weekendDayText: {
    color: '#F3F3F3',
  },
  weekendHeading: {
    color: '#F3F3F3',
    fontWeight: 'bold',
  },
  dayButton: {
    borderTopWidth: 0,
  },
  dayHeading: {
    color: '#F3F3F3',
    fontWeight: 'bold',
  },
  calendarHeading: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
}

class CalendarPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    }
  }

  onDateChange(date) {
    this.setState({ date: date });
  }

  static propTypes = {
    navigator: React.PropTypes.shape({}),
    openDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  componentWillMount() {
    const navigator = this.props.navigator;
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() { // eslint-disable-line class-methods-use-this
    return (


    <Image source={require('../../../images/bgGradient.jpg')}
        style={styles.backgroundImage}>
      <Container theme={myTheme} style={styles.container}>
        <Header>
          {/* <Button transparent onPress={() => this.props.reset(this.props.navigation.key)}>
            <Icon name="ios-power" />
          </Button> */}

          <Title>Calendar</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <View style={styles.iconMenuWrap}>
          <Calendar
            customStyle={customStyle}
            showControls/>
        </View>
        <View style={styles.iconMenuWrapBottom}>


          <Content>



          <Grid style={styles.mt}>
            <Row><TouchableOpacity style={styles.row}>
              <Text style={styles.text}>Meeting with friend</Text>

                <View style={{flexDirection: 'row'}}>
                  <Icon name="ios-clock-outline" style={styles.iconCalender} />
                  <Text style={styles.textBelow}>
                     8–10am
                  </Text>
                </View>
            </TouchableOpacity></Row>
          </Grid>
          <Grid style={styles.mt}>
            <Row><TouchableOpacity style={styles.row}>
              <Text style={styles.text}>Respond to email</Text>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="ios-mail-outline" style={styles.iconCalender} />
                  <Text style={styles.textBelow}>
                     8–30am
                  </Text>
                </View>
            </TouchableOpacity></Row>
          </Grid>
          <Grid style={styles.mt}>
            <Row><TouchableOpacity style={styles.row}>
              <Text style={styles.text}>Important event</Text>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="ios-flag-outline" style={styles.iconCalender} />
                  <Text style={styles.textBelow}>
                     12:30pm
                  </Text>
                </View>
            </TouchableOpacity></Row>
          </Grid>
          <Grid style={styles.mt}>
            <Row><TouchableOpacity style={styles.row}>
              <Text style={styles.text}>Important meeting</Text>

                <View style={{flexDirection: 'row'}}>
                  <Icon name="ios-funnel-outline" style={styles.iconCalender} />
                  <Text style={styles.textBelow}>
                     1:15pm
                  </Text>
                </View>
            </TouchableOpacity></Row>
          </Grid>


          </Content>


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

export default connect(mapStateToProps, bindAction)(CalendarPage);
