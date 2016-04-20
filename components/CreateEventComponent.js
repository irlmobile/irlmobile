'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
var MapView = require('react-native-maps');
var Config = require('react-native-config');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
  Component
} = React;

var CreateEventComponent = React.createClass({
  getInitialState: function() {
    var initialLocation = this.props.initLocation;
    return {
      address: '',
      coordinate: new Animated.Region({
        latitude: initialLocation.latitude,
        longitude: initialLocation.longitude,
      }),
      location: {
        latitude: initialLocation.latitude,
        longitude: initialLocation.longitude, 
        latitudeDelta: initialLocation.latitudeDelta,
        longitudeDelta: initialLocation.longitudeDelta,
      },
      markerHeading: 'My Location',
      markerDescription: '',
      eventName: '',
      eventDesc: '',
    };
  },

  getPlaceDetails: function(data, details) {
    var context = this;
    var placeLat = details.geometry.access_points[0].location.lat;
    var placeLng = details.geometry.access_points[0].location.lng;
    console.log('details', details);
    this.setState({
      address: details.formatted_address,
      coordinate: {
        latitude: placeLat,
        longitude: placeLng,
      },
      location: {
        latitude: placeLat,
        longitude: placeLng, 
        latitudeDelta: this.props.initLocation.latitudeDelta,
        longitudeDelta: this.props.initLocation.longitudeDelta,
      },
      markerHeading: details.name,
      markerDescription: details.formatted_address,
    });
  },

  onEventNameChange: function(text) {
    this.setState({
      eventName: text
    });
  },

  onEventDescChange: function(text) {
    this.setState({
      eventDesc: text
    });
  },

  render: function() {
    var context = this;
    var queryOptions = { 
      key: Config.googlemap_key, 
      language: 'en' 
    };
    return (
      <View>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={function() {
            context.props.navigator.pop()}}>
            <Text style={styles.toolbarButton}>
              <Icon name="arrow-left" size={20} color="white"/>
            </Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>Create an Event</Text>
        </View>
        <MapView
          style={ styles.map }
          region={this.state.location} 
        >
          <MapView.Marker.Animated
            coordinate={this.state.coordinate}
            title={this.state.markerHeading}
            description={this.state.markerDescription}
          />
        </MapView>
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            context.getPlaceDetails(data, details);
          }}
          getDefaultValue={() => {
            return '';
          }}
          query={queryOptions}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}

          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}

        />

      <TextInput 
        style={styles.textInput} 
        placeholder='Event Name' 
        onChangeText={this.onEventNameChange}
        value={this.state.eventName}
      />
      <TextInput 
        style={styles.textInput} 
        placeholder='Event Description'
        onChangeText={this.onEventDescChange}
        value={this.state.eventDesc}
      />
      
      </View> 
    ); 
  }
});

var styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#ADB0D8',
    flexDirection:'row',
    height: 8 * vh,
    paddingTop: 3 * vh,

  },
  toolbarButton:{
    width: 10 * vw,
    color:'#fff',
    textAlign:'center',
  },
  toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1,
    marginRight: 25,
  },
  map: {
    position: 'absolute',
    top: 8 * vh,
    left: 0,
    right: 0,
    bottom: 0,
    height: 30 * vh,
  },
  textInput: {
    top: 30 * vh,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

module.exports = CreateEventComponent;