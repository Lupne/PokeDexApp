import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import LibraryStack from './stack'

export default function App() {
  const [splash,setSplash] = useState(true)
  if(splash===true){
    setTimeout(()=>{setSplash(false)
    console.log(splash)},5000)
    return(
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <Image source={require('./assets/pokeball_PNG24.png')} style={{height:100,width:100,marginTop:400}}/>
      </View>
    )
  }
  else{
    return(
      <LibraryStack />
    )
  }
}

const styles = StyleSheet.create({

});
