var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var LoginComponent = require('./components/LoginComponent.js');
var TabBarComponent = require('./components/TabBarComponent.js');
var MapComponent = require('./components/MapComponent.js');
var MenuBarComponent = require('./components/MenuBarComponent.js');
var ProfileComponent = require('./components/ProfileComponent.js');
var SearchComponent = require('./components/SearchComponent.js');
var FeedComponent = require('./components/FeedComponent.js');
var CreateEventComponent = require('./components/CreateEventComponent.js');
var RouteComponent = require('./components/RouteComponent.js');


var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;



var irlMobile = React.createClass({
  configureScene: function (route, routeStack) {
    return Navigator.SceneConfigs.FloatFromBottom;
  },

  render: function() {

    return (
      <View style={{ flex: 1}}>
        <Navigator
          configureScene={this.configureScene}
          initialRoute={{component: 'LoginComponent'}}
          renderScene={this.renderScene}
        />
      </View>   
    );
  },

  renderScene: function(route, navigator) {
    if(route.component === 'LoginComponent') {
      var checkToken = AsyncStorage.getItem('token', function(err, result) {
        if(err) {
          console.log('error getting token', err);
        } else {
          console.log('async storage token', result);
          return result;
        }
      });
      console.log('TOKEN', checkToken); 
      if(typeof checkToken === 'string') {
        return (
          <RouteComponent navigator={navigator} />
        )
        
      } else {
        return (
          <LoginComponent navigator={navigator}/>
        )
      }
    }
    if(route.component === 'RouteComponent') {
      
      return (
        <RouteComponent navigator={navigator}/>
      )
    }
    if(route.component === 'MapComponent') {
      return (
        <MapComponent navigator={navigator}/>
      )
    }
    if(route.component === 'CreateEventComponent') {
      return (
        <CreateEventComponent navigator={navigator} initLocation={route.passProps.initLocation}/>
      )
    }
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
  containerWebView: {
    flex: 1,
  },
});

AppRegistry.registerComponent('irlMobile', () => irlMobile);
