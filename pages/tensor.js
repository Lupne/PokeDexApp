import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native'

class Search extends Component{
  state={
    name:'',
    find:false,
  }
  render(){
    return(
      <View style={{alignItems:'center',justifyContent:'center',marginTop:150}}>
      <Image source={require('../assets/pokedex.png')} style={{height:200,width:220,resizeMode: 'stretch',marginBottom:30}}/>
      <TextInput placeholder='                   Enter Pokemon' value={this.state.name} onChangeText={(text)=>{this.setState({name:text.toLowerCase()})}} style={{borderWidth:1,padding:20,width:300}}/>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>{
        this.props.navigation.navigate('Data',{name:this.state.name})
      }}>
      <Image source={require('../assets/pokeball_PNG24.png')} style={{height:100,width:100}}/>
      </TouchableOpacity>
      </View>
    )
  }
}

export default Search
