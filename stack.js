import React from 'react';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Search from './pages/tensor'
import Poke from './pages/pokedata';

const screens = {
  Search:{
    screen:Search,
    navigationOptions:{
      headerTitle:''
    }
  },
  Data:{
    screen:Poke,
    navigationOptions:{
      headerTitle:''
    }
  },
}

const LibraryStack = createStackNavigator(screens)

export default createAppContainer(LibraryStack)
