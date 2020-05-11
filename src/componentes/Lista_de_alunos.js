import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'A', nota:7.9},
    {id: 2, nome: 'b', nota:4.9},
    {id: 3, nome: 'cA', nota:5.9},
    {id: 4, nome: 'd', nota:7.9},
    {id: 5, nome: 'e', nota:7.9},
    {id: 6, nome: 'f', nota:6.9},
    {id: 7, nome: 'g', nota:7.9},
    {id: 8, nome: 'h', nota:9.9},
    {id: 9, nome: 'i', nota:7.9},
    {id: 10, nome: 'j', nota:7.9},

    {id: 11, nome: 'A', nota:7.9},
    {id: 12, nome: 'b', nota:4.9},
    {id: 13, nome: 'cA', nota:5.9},
    {id: 14, nome: 'd', nota:7.9},
    {id: 15, nome: 'e', nota:7.9},
    {id: 16, nome: 'f', nota:6.9},
    {id: 17, nome: 'g', nota:7.9},
    {id: 18, nome: 'h', nota:9.9},
    {id: 19, nome: 'i', nota:7.9},
    {id: 20, nome: 'j', nota:7.9},
]

const itemEstilo={
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidt: 0.5,
    borderColor: '#222',

    //Flex
    alignItems: 'center',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>
            Nome: {props.nome}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
            Nota: {props.nota}
        </Text>
    </View>

export default props => {
    const renderItems = ({item}) =>{
        return <Aluno {...item}/>
    }

    return(
        <ScrollView>
            <FlatList data={alunos} renderItem = {renderItems}
                keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}