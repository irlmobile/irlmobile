var React = require('react-native');
var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var FBLogin = require('react-native-facebook-login');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

var {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;

var Profile = React.createClass({

  sendLogout: function() {
    var context = this;
    AsyncStorage.removeItem('token', function(err) {
      if(err) {
        console.error('error removing async storage token', err);
      }
      context.props.navigator.push({
        component: 'LoginComponent'
      });
    });
  },

  render: function() {
    var context = this;
    return (
      <View style={styles.heading}>
        <View>
          <Text style={styles.headingText}>Profile</Text>
        </View>
        <View style={styles.container}>
          <Text>PROFILE PAGE</Text>
        </View>
        <View style={styles.fbButton}>
          <FBLogin
            onLogin={function(e){
              console.log(e);
            }}
            onLogout={function(e){
              console.log(e);
              context.sendLogout();
            }}
            onCancel={function(e){console.log(e)}}
            onPermissionsMissing={function(e){console.log(e)}}
          />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  heading: {
    flex:1,
    justifyContent: 'center',
  },
  headingText: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  fbButton: {
    flex: 1,
    top: 36 * vh,
  },
});

module.exports = Profile;
