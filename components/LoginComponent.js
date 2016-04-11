var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var FBLogin = require('react-native-facebook-login');


var {
  StyleSheet,
  Text,
  View,
  Image,
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
  getInitialState: function() {
    return {
      image: ''
    }
  },
  
  render: function() {
    return (
      <View style={styles.fbButton}>
        
        <FBLogin
          onLogin={function(e){
            console.log(e);
          }}
          onLogout={function(e){console.log(e)}}
          onCancel={function(e){console.log(e)}}
          onPermissionsMissing={function(e){console.log(e)}}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  fbButton: {
    flex:1,
  },
});

module.exports = LoginComponent;