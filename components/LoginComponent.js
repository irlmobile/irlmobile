var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var FBLogin = require('react-native-facebook-login');
var Config = require('react-native-config');

var {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
  Component
} = React;


var LoginComponent = React.createClass({
  getInitialState: function() {
    return {
      image: ''
    };
  },
  
  sendLogin: function(data) {
    var context = this;
    fetch(Config.ip_address + '/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.profile.name,
        email: data.profile.email,
        picture: data.profile.picture.data.url
      })
    })
    .then(function(result) {
      console.log('RESULT', result._bodyInit);
      AsyncStorage.setItem('token', data.token, function(err) {
        if(err) {
          console.error('error setting token on fb login', err);
        }
      });
      context.props.navigator.push({
        component: 'RouteComponent',
        
      });

    })
    .catch(function(err) {
      console.log('error', err);
      AsyncStorage.setItem('token', data.token, function(err, data) {
        console.log('error setting token on fb login', err);
        console.log('data for fb login async storage', data);
      });
      context.props.navigator.push({
        component: 'RouteComponent',
        
      });
    });
  },

  render: function() {
    var context = this;
    return (
      <View style={styles.fbButton}>
        
        <FBLogin
          onLogin={function(e){
            context.sendLogin(e);
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