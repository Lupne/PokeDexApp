import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Image,componentDidMount,Button} from 'react-native'

class Pokedex extends Component{
  state={
    data:{},
    img:{},
  }
  render(){
    this.state.data = this.props.data
    this.state.img = this.props.img
    return(
      <View>
      <Image source={{uri:this.state.img.sprites.normal}} style={{height:200,width:200,marginTop:60,marginLeft:110,resizeMode: 'stretch'}}/>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <View style={{backgroundColor:'grey',width:'100%',alignItems:'center'}}>
      <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20}}>{this.state.data.name}</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',marginTop:60,marginLeft:75}}>
      <Text style={{fontWeight:'bold',fontStyle:'italic'}}>   Type   </Text>
      <Image source={{uri:'https://www.serebii.net/pokedex-bw/type/'+this.state.data.info.type+'.gif'}} style={{height:20,width:45}}/>
      <Text style={{fontWeight:'bold',fontStyle:'italic'}}>        Weakness   </Text>
      <Image source={{uri:'https://www.serebii.net/pokedex-bw/type/'+this.state.data.info.weakness+'.gif'}} style={{height:20,width:45}}/>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:75}}>
      <Text style={{fontWeight:'bold',fontStyle:'italic'}}>   Base Exp : {this.state.img.base_experience} </Text>
      <Text style={{fontWeight:'bold',fontStyle:'italic'}}>    height : {this.state.img.height}   </Text>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:75}}>
      <Text style={{fontWeight:'bold',fontStyle:'italic'}}>   id : {this.state.img.id}                  </Text>
      <Text style={{fontWeight:'bold',fontStyle:'italic'}}>    Weight : {this.state.img.weight}   </Text>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:75}}>
      <Text style={{fontWeight:'bold',fontStyle:'italic'}}>   HP : {this.state.data.hp}           </Text>
      <Text style={{fontWeight:'bold',fontStyle:'italic'}}>    Move : {this.state.data.moves[0].name}   </Text>
      </View>
      </View>
    )
  }
}

export default Pokedex
