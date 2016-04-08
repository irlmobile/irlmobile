'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var MapView = require('react-native-maps');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');


var myIcon = (<Icon name="bars" size={20} color="white"/>);


// var myButton = (
//   <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
//     Login with Facebook
//   </Icon.Button>
// );

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;

var location = { latitude: 37.78825, longitude: -122.4324 };

var MapComponent = React.createClass({
  getInitialState: function() {
    return {
      menubar: false
    };
  },

  menuBar: function() {
    if(!this.state.menubar) {
      this.setState({menubar: true});
    }
    else {
      this.setState({menubar: false});
    }
  },

  render: function() {
    return (
      <View>
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} >
          <MapView.Marker
            coordinate={location}
            title='testing marker'
            description='testing testing'
          />
        </MapView>

        {this.state.menubar ? <MenuBar navigator={navigator}/> : null}

      </View>
    );
  }
});


var styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 100 * vh,
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

module.exports = MapComponent;