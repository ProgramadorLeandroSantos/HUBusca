import React from  'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

export default function PerfilScreen({route}:any){
    const { name,login,image,location,reposURL,quantRepos,followers,id } = route.params;
    return(
        <View style={styles.container}>
            <Text>{name}</Text>
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

})
