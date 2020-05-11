import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';


import Simples from 'C:/Users/Marcelo/Desktop/expo/exer1Expo-app/src/componentes/Simples'
import ParOuImpar from './componentes/ParOuImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import TextoInput from './componentes/TextoInput'
import Evento from './componentes/Evento'
import {Avo} from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import { View } from 'react-native';
import ListaFlex from './componentes/Lista_de_alunos'
import Flex from './componentes/Flex'
import Gatinho from './componentes/Gatinho'


export default createDrawerNavigator({
    Gatinho:{
        screen: Gatinho
    },
    Flex:{
        screen: Flex
    },
    Lista_de_alunos:{
        screen: ListaFlex,
        navigationOptions: {title: 'Lista de alunos'}
    },
    Comunicacao_Indireta:{
        screen: TextoSincronizado
    },
    Comunicacao_Direta:{
        screen: () => 
                <View>
                 <Avo nome='Joao'  sobrenome='Reis'></Avo> 
                 <Avo nome='Paulo' sobrenome='Silva'></Avo>
                </View>
    },
    Evento:{
        screen: () => <Evento/>
    },
    TextoInput:{
        screen: () => <TextoInput/>
    },
    ValidarProps:{
        screen: () => <ValidarProps label='Teste' ano={18}/>
    },
    Plataformas:{
        screen: Plataformas
    },
    Contador:{
        screen: () => <Contador/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto='Primeiro Menu'/>,

    },
    ParOuImpar:{
        screen: () => <ParOuImpar numero={30}/>,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples:{
        screen: () => <Simples texto='ola'/>
    }
}, {drawerWidth: 400})
