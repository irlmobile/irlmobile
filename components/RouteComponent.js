var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var ScrollableTabView = require('react-native-scrollable-tab-view');

//
// var TabBarComponent = require('./components/TabBarComponent.js');
var MapComponent = require('./MapComponent.js');
// var MenuBarComponent = require('./components/MenuBarComponent.js');
var ProfileComponent = require('./ProfileComponent.js');
var SearchComponent = require('./SearchComponent.js');
var FeedComponent = require('./FeedComponent.js');
var LoginComponent = require('./LoginComponent.js');


var {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;



var RouteComponent = React.createClass({
  
  render: function() {
    return (
      <ScrollableTabView>
          <LoginComponent tabLabel='Login' navigator={this.props.navigator}/>
          <MapComponent tabLabel='Map' navigator={this.props.navigator}/>
          <SearchComponent tabLabel='Search' />
          <FeedComponent tabLabel='Feed' />
          <ProfileComponent tabLabel='Profile' />
      </ScrollableTabView>  
      
    );
  }
});

var styles = StyleSheet.create({

  
});

module.exports = RouteComponent;