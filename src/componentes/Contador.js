import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export default class Contador extends Component{
    /* Podemos usar as funcoes da seguinte maneira, maisUm(){} em vez de maisUm=()=>{}, para isso temos que 
    declarar o 
    constructor(props){
        super(props)
        this.maisUm.bind(this)// o bind 'amarar a funcao a classe'
    } */
    state={
        numero : 0,
    }
    maisUm = () =>{
        this.setState({numero: this.state.numero+1})
    }

    menosUm = () =>{
        this.setState({numero: this.state.numero-1})
    }

    limpar = () =>{
        this.setState({numero: 0})
    }
    render(){
        var navigationView = (
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        )
        return(       
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight onPress={this.maisUm} onLongPress={this.limpar}>
                    <Text>Aumenta</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.menosUm} onLongPress={this.limpar}>
                    <Text>Diminui</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.limpar} onLongPress={this.limpar}>
                    <Text>Zera</Text>
                </TouchableHighlight>       
            </View>
        )
    }
}