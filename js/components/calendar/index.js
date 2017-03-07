
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import Calendar from 'react-native-calendar';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import { openDrawer } from '../../actions/drawer';
import bgGradientImg from '../../../images/bgGradient.jpg';

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
};

class CalendarPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
    openDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  onDateChange(date) {
    this.setState({ date });
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
              showControls
            />
          </View>
          <View style={styles.iconMenuWrapBottom}>
            <Content>
              <Grid style={styles.mt}>
                <Row><TouchableOpacity style={styles.row}>
                  <Text style={styles.text}>Meeting with friend</Text>

                  <View style={{ flexDirection: 'row' }}>
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
                  <View style={{ flexDirection: 'row' }}>
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
                  <View style={{ flexDirection: 'row' }}>
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
                  <View style={{ flexDirection: 'row' }}>
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
