var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var MapView = require('react-native-maps');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');


var {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;

// var location = { latitude: 37.78825, longitude: -122.4324 };

var MapComponent = React.createClass({
  getInitialState: function() {
    return {
      initialPosition: {}
    };
  },

  componentDidMount: function() {
    var context = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      var location = {
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      context.setState({initialPosition: location});

    }, function(err) {
      console.log('error getting current geolocation', err);
    },
    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
  },

  renderCreate: function() {
    console.log('THISSS PROPS', this.props);
  },

  render: function() {
    var context = this;
    return (
      <View>
        
        <MapView
          style={ styles.map }
          initialRegion={this.state.initialPosition} >
          <MapView.Marker
            coordinate={this.state.initialPosition}
            title='testing marker'
            description='testing testing'
          />
        </MapView>
        <View style={styles.createButton}>
          <TouchableOpacity onPress={function () {
            console.log('this PROPSSS', context.props.navigator);
            context.props.navigator.push({
            component: 'FeedComponent',
            passProps: {
              name: 'name'
            }
          })}}>
            <Text style={styles.createButtonText}>
              <Icon name="plus" size={20} color="white"/>
            </Text>
          </TouchableOpacity>  
        </View>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  createButton: {
    top: 3 * vh,
    left: 85 * vw,
    width: 40,
    height: 40,
    backgroundColor: '#ADB0D8',
    borderRadius: 50,
  },
  createButtonText: {
    margin: 10,
    textAlign: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 100 * vh,
  },
});

module.exports = MapComponent;