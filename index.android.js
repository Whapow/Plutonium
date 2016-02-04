/*
   Sample React Native App
   https://github.com/facebook/react-native
*/
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';

var SplashPage = require('./pages/SplashPage');
var LoginPage = require('./pages/LoginPage');
var MainPage = require('./pages/MainPage');
var PersonPage = require('./pages/PersonPage');
var NoNavigatorPage = require('./pages/NoNavigatorPage');

class Plutonium extends Component {

  render() {
    return (

      <Navigator
        initialRoute={{id: 'SplashPage', name: 'index'}}
        renderScene = {this.renderScene.bind(this)}
        configureScene={(route) => {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
       }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
          navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
          navigator={navigator} />
      );
    }
    return this.noRoute(navigator);
  }

  noRoute(navigator){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
            onPress={
              this.props.navigator.push({
                id: 'MainPage',
                name: 'Home',
              })
            }>
          <Text style={{color: 'red'}}>404</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  back: {
    textAlignVertical: 'bottom',
    textAlign: 'left',
    color: '#0000FF',
  },
  next: {
    textAlignVertical: 'bottom',
    textAlign: 'right',
    color: '#0000FF',

  },
});

AppRegistry.registerComponent('Plutonium', () => Plutonium);
