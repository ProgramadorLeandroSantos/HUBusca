import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';


interface IPerfilCard{
    name: string,
    login: string,
    image: string,
    location: string,
}


export default function PerfilCard(props: IPerfilCard): JSX.Element{
    let {name,login,image,location} = props;

    return(
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.viewPhotoContainer}>
                <Image source={{ uri:image }} style={styles.viewPhoto}/>
            </View>
            <View style={styles.viewDetails}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.login}>{login}</Text>
                <View style={styles.locationContainer}>
                    <Image source={require('../../../assets/locationIcon.png')} />
                    <Text style={styles.location}>{location}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: '#FFFF',
        height: 106,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 5,
        marginHorizontal:10,
        marginBottom:10,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    viewPhoto:{
        width:'100%',
        height:'100%',
        borderRadius:50,
        
    },
    viewPhotoContainer:{
        width:'20%',
        height:'80%',
        borderRadius:50,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    viewDetails:{
        height: '80%',
        width: '75%',
        justifyContent:'center',
    },
    name:{
        fontSize:22,
        fontWeight: 'bold',
        color:'#FF7A00',
        marginLeft:20
    },
    login:{
        fontSize:16,
        fontWeight: '100',
        color:'gray',
        marginLeft:20
    },
    location:{
        fontSize:16,
        fontWeight: '100',
        color:'gray',
        marginLeft:5,
    },
    locationContainer:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:5,
        marginLeft:20,
    },
})