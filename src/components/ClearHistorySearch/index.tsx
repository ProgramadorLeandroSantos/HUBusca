import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';


interface IClearButton{
    clear: any
}


export default function ClearButton(props: IClearButton){

    return(
        <TouchableOpacity style={styles.Button}
            onPress={props.clear}
        >
            <Image source={require('../../../assets/trashicon.png')}/>
           <Text  style={styles.text}>Limpar histórico de pesquisa</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        height: 30,
        marginTop:10,
        marginBottom:10,
        flexDirection:"row",
        justifyContent: "center",
        alignItems:'center',
    },
    text:{
        color:'black',
        textAlign:'center',
        fontSize: 16,
        marginLeft: 5,
    }
})