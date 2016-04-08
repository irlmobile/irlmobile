var React = require('react-native');
var React = require('react-native');
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

var FeedComponent = React.createClass({
  render: function() {
    return (
      <View style={styles.heading}>
        <View>
          <Text style={styles.headingText}>Feed</Text>
        </View>
        <View style={styles.container}>
          <Text>Feed PAGE</Text>
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

module.exports = FeedComponent;