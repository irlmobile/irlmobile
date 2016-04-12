var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Component
} = React;

var CreateEventComponent = React.createClass({
  
  render: function() {
    var context = this;
    return (
      <View>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={function() {
            context.props.navigator.pop()}}>
            <Text style={styles.toolbarButton}>
              <Icon name="arrow-left" size={20} color="white"/>
            </Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>This is the title</Text>
          <TouchableOpacity>
            <Text style={styles.toolbarButton}>
              <Icon name="home" size={20} color="white"/>
            </Text>
          </TouchableOpacity>
        </View>

        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
          }}
          getDefaultValue={() => {
            return '';
          }}
          query={{
            key: 'AIzaSyCWCKYlwOoXrWa4YCeyTGxlwX9GRZCTFW4',
            language: 'en'
          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}

          currentLocation={true} 
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' 
          GooglePlacesSearchQuery={{
            
            rankby: 'distance',
            types: 'food',
          }}


          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}

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
    width: 50,
    color:'#fff',
    textAlign:'center',
  },
  toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1,
  },
});

module.exports = CreateEventComponent;