import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Simples from 'C:/Users/Marcelo/Desktop/expo/exer1Expo-app/src/componentes/Simples'
import ParOuImpar from './componentes/ParOuImpar'
import {Inverter, MegaSena} from './componentes/Multi'

export default class App extends React.Component{
  render(){
    return(
      <View style={style.basico}>
        <Simples/>
        <ParOuImpar numero={32}/>
        <Inverter texto='React native'/>
        <MegaSena/>
      </View>
    )
  }
}

const style = StyleSheet.create({
    basico: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})