import React from  'react';
import {View, Text, StyleSheet} from 'react-native';

export default function PerfilScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>PerfilScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E8E8E8',
        justifyContent:'center',
        alignItems: 'center'
    },
    text:{
        color: 'black'
    }
})