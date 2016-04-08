var React = require('react-native');
var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;

var Profile = React.createClass({
  render: function() {
    return (
      <View style={styles.heading}>
        <View>
          <Text style={styles.headingText}>Profile</Text>
        </View>
        <View style={styles.container}>
          <Text>PROFILE PAGE</Text>
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
});

module.exports = Profile;
