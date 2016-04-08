var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var FBLogin = require('react-native-facebook-login');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;

var myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);


var LoginComponent = React.createClass({
  render: function() {
    return (
      <View>
        
        <FBLogin
          onLogin={function(e){console.log(e)}}
          onLogout={function(e){console.log(e)}}
          onCancel={function(e){console.log(e)}}
          onPermissionsMissing={function(e){console.log(e)}}
        />
        
      </View>
    );
  }
});

module.exports = LoginComponent;