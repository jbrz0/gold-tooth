
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Content, Text, List, ListItem, Icon } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';
import avatarPath from '../../../images/avatar.png';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content theme={myTheme} style={styles.sidebar} >

        <Content style={{ backgroundColor: 'rgba(22,25,37,0.04)', marginBottom: 20 }}>
          <Content style={{ paddingTop: 40, paddingBottom: 30 }}>
            <Row>
              <Col style={{ width: 100 }}>
                <Image
                  source={avatarPath}
                  style={{ width: 60, height: 60, borderRadius: 30, marginLeft: 20 }}
                />
              </Col>
              <Col>
                <Row><Text style={{ color: '#161925', fontSize: 18, position: 'absolute', bottom: 0 }}>Person Name</Text></Row>
                <Row><Text style={{ color: '#161925', fontSize: 12 }}>email@address.com</Text></Row>
              </Col>
            </Row>
          </Content>
        </Content>

        <List>

          <ListItem button onPress={() => this.navigateTo('listAll')} style={styles.listItem}><Row>
            <Icon name="ios-list-outline" style={styles.menuListIconTop} />
            <Text style={styles.menuListTxtTop}>All Items</Text>
          </Row></ListItem>
          <ListItem button onPress={() => this.navigateTo('login')} style={styles.listItem}><Row>
            <Icon name="ios-person-outline" style={styles.menuListIcon} />
            <Text style={styles.menuListTxt}>Login #1</Text>
          </Row></ListItem>
          <ListItem button onPress={() => this.navigateTo('loginTwo')} style={styles.listItem}><Row>
            <Icon name="ios-person-outline" style={styles.menuListIcon} />
            <Text style={styles.menuListTxt}>Login #2</Text>
          </Row></ListItem>
          <ListItem button onPress={() => this.navigateTo('calendar')} style={styles.listItem}><Row>
            <Icon name="ios-calendar-outline" style={styles.menuListIcon} />
            <Text style={styles.menuListTxt}>Calendar</Text>
          </Row></ListItem>
          <ListItem button onPress={() => this.navigateTo('iconMenu')} style={styles.listItem}><Row>
            <Icon name="ios-keypad-outline" style={styles.menuListIcon} />
            <Text style={styles.menuListTxt}>Icon Menu</Text>
          </Row></ListItem>
          <ListItem button onPress={() => this.navigateTo('walkthrough')} style={styles.listItem}><Row>
            <Icon name="ios-book-outline" style={styles.menuListIcon} />
            <Text style={styles.menuListTxt}>Walkthrough</Text>
          </Row></ListItem>
          <ListItem button onPress={() => this.navigateTo('dashboard')} style={styles.listItem}><Row>
            <Icon name="ios-analytics-outline" style={styles.menuListIcon} />
            <Text style={styles.menuListTxt}>Dashboard</Text>
          </Row></ListItem>

        </List>
      </Content>
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

export default connect(mapStateToProps, bindAction)(SideBar);
