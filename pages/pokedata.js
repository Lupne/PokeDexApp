import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,componentDidMount,Image} from 'react-native'
import Pokedex from './pokedex'

class Poke extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data:{},
      img:'',
      name:this.props.navigation.state.params.name,
      isLoading: true,
    };
  }
  componentDidMount(){
    fetch("https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon="+this.state.name, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
})
 .then((response) => response.json())
 .then(data=>this.setState({data:data}))
 .then(()=>{
   var Pokedex = require('pokedex'),
    pokedex = new Pokedex();
    this.setState({img:pokedex.pokemon(this.state.name),isLoading:false})
    console.log(this.state.img)
 })
  }
  render(){
    if(this.state.isLoading===true){
    return(
      <View>
      <Image source={require('../assets/pokeball_PNG24.png')} style={{height:100,width:100,marginTop:320,marginLeft:150}}/>
      </View>
    )}
    else{
      return(
        <View style={{flex:1}}>
        <Pokedex data={this.state.data} img={this.state.img}/>
        </View>
      )
    }
  }
}

export default Poke
