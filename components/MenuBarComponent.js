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


var MenuBar = React.createClass({
  
  render: function() {
    return (
      <View style={ styles.menubar }>
        <TouchableOpacity>
          <Text style={ styles.menubarText }>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={ styles.menubarText }>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={ styles.menubarText }>Feed</Text>
        </TouchableOpacity>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  toolbar:{
      backgroundColor:'#81c04d',
      paddingTop:20,
      paddingBottom:10,
      flexDirection:'row',
      height: 10 * vh,

  },
  toolbarButton:{
      width: 50,
      color:'#fff',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex:1
  },
  map: {
    position: 'absolute',
    top: 10 * vh,
    left: 0,
    right: 0,
    bottom: 0,
    height: 90 * vh,
  },
  menubar: {
    width: 25 * vw,
    height: 100 * vh,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  menubarText: {
    textAlign:'center',
    fontWeight:'bold',
    marginTop: 10,
    padding: 5,
    color: '#fff',
    opacity: 1,
  },
  containerWebView: {
    flex: 1,
  },
});


module.exports = MenuBar;