var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var MapView = require('react-native-maps');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var Config = require('react-native-config');

var {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component
} = React;

var MapComponent = React.createClass({
  getInitialState: function() {
    return {
      initialPosition: {},
    };
  },

  componentWillMount: function () {
    var context = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      var location = {
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude,
        latitudeDelta: 0.022,
        longitudeDelta: 0.022,
      };
      context.setState({initialPosition: location});

    }, function(err) {
      console.log('error getting current geolocation', err);
    },
    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
  },

  componentDidMount: function() {
    var context = this;
    fetch(Config.ip_address + '/api/spots', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(function(data) {
      var parsedData = JSON.parse(data._bodyInit);
      context.setState({spots: parsedData});
      
    })
    .catch(function(err) {
      console.log('error', err);
    });
  },

  render: function() {
    var context = this;
    if(this.state.spots) {
      var spots = this.state.spots.map(function(spot) {
        return (
          <MapView.Marker
            coordinate={spot.coordinates}
            title={spot.name}
            description='testing testing'
          />
        );
      }, this);
    }
    return (
      <View>
        {this.state.spots ? 
        <MapView
          style={ styles.map }
          region={this.state.initialPosition} >
          {spots}
          <MapView.Marker
            coordinate={this.state.initialPosition}
            title='My Location'
            description='testing testing'
          />
        </MapView>
        : null }
        <View style={styles.createButton}>
          <TouchableOpacity onPress={function () {
            context.props.navigator.push({
            component: 'CreateEventComponent',
            passProps: {
              navigator: context.props.navigator,
              initLocation: context.state.initialPosition,
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
    top: 75 * vh,
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