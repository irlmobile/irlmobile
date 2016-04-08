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
  TouchableHighlight,
  Component
} = React;

var TabBar = React.createClass({
  getInitialState: function() {
    return {
      globeIcon: '#7F7F7F',
      searchIcon: '#7F7F7F',
      userIcon: '#7F7F7F'
    };
  },

  iconClicked: function() {
    
    var args = Array.prototype.slice.call(arguments);
    if(args[0] === 'globe' && this.state.searchIcon === '#194670' || 
        args[0] === 'globe' && this.state.userIcon === '#194670') {
      this.setState({
        globeIcon: '#194670',
        searchIcon: '#7F7F7F',
        userIcon: '#7F7F7F'
      });
    }
    else if(args[0] === 'search' && this.state.globeIcon === '#194670' || 
            args[0] === 'search' && this.state.userIcon === '#194670') {
      this.setState({
        searchIcon: '#194670',
        globeIcon: '#7F7F7F',
        userIcon: '#7F7F7F'
      });
    }
    else if(args[0] === 'user' && this.state.globeIcon === '#194670' || 
            args[0] === 'user' && this.state.searchIcon === '#194670') {
      this.setState({
        userIcon: '#194670',
        globeIcon: '#7F7F7F',
        searchIcon: '#7F7F7F'
      });
    }
    
  },

  render: function() {
    return (
      <View style={styles.tabbarContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={this.menuBar}>
            <Text style={styles.toolbarButton}>
              <Icon name="bars" size={20} color="white"/>
            </Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>This is the title</Text>
          <TouchableOpacity>
            <Text style={styles.toolbarButton}>
              <Icon name="home" size={20} color="white"/>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabbarMenu}>
          <TouchableOpacity onPress={this.iconClicked.bind(this, 'globe')}>
            <Text style={styles.tabbarMenuIcons}><Icon name="globe" size={20} color={this.state.globeIcon}/></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.iconClicked.bind(this, 'search')}>  
            <Text style={styles.tabbarMenuIcons}><Icon name="search" size={20} color={this.state.searchIcon}/></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.iconClicked.bind(this, 'favorite')}>  
            <Text style={styles.tabbarMenuIcons}><Icon name="heart" size={20} color={this.state.favIcon}/></Text>
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.iconClicked.bind(this, 'user')}>  
            <Text style={styles.tabbarMenuIcons}><Icon name="user" size={20} color={this.state.userIcon}/></Text>
          </TouchableOpacity>  
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  tabbarMenu: {
    color: '#A0A0A0',
    flexDirection: 'row',
    height: 5 * vh,
    marginTop: 5,
  }, 
  tabbarMenuIcons: {
    textAlign: 'center',
    width: 25* vw,
  },
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
});

module.exports = TabBar;