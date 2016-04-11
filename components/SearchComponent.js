var React = require('react-native');
var React = require('react-native');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

var {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;

var SearchComponent = React.createClass({
  render: function() {
    return (
      <View style={styles.heading}>
        <View>
          <Text style={styles.headingText}>Search</Text>
        </View>
        <View style={styles.container}>
          <Text>SEARCH PAGE</Text>
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

module.exports = SearchComponent;