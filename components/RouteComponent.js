var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var ScrollableTabView = require('react-native-scrollable-tab-view');


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
  toolbar:{
      backgroundColor:'#81c04d',
      paddingTop:20,
      paddingBottom:10,
      flexDirection:'row',
      height: 10 * vh,

  },
  toolbarButton:{
      width: 50,
      color:'#fff',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex:1
  },
  map: {
    position: 'absolute',
    top: 10 * vh,
    left: 0,
    right: 0,
    bottom: 0,
    height: 90 * vh,
  },
  menubar: {
    width: 25 * vw,
    height: 100 * vh,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  menubarText: {
    textAlign:'center',
    fontWeight:'bold',
    marginTop: 10,
    padding: 5,
    color: '#fff',
    opacity: 1,
  },
  
});

module.exports = RouteComponent;