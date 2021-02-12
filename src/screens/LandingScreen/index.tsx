import React,{useState} from  'react';
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ActivityIndicator} from 'react-native';


export default function  LandingScreen(){
    const [lastSearch,setLastSearch] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    
    const IsWithLastSearch = ()=>{
        if(lastSearch.length === 0){
            return(
                <>
                    <Image source={require('../../../assets/welcome.png')}/>
                </>
            )
        }
        else{ return<ActivityIndicator size="large" color="#FF7A00" /> }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/headerLogo.png')}/>
                <View style={styles.viewInput}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Login de usuário"
                        placeholderTextColor="white"
                    />
                    <TouchableOpacity>
                        <Image source={require('../../../assets/searchicon.png')} style={styles.searchIcon}/>  
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainView}>
                <IsWithLastSearch/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E8E8E8',
    },
    header:{
        marginTop:23,
        backgroundColor:'#FFFF',
        height:126,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: 13,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 3,
    },
    input:{
        backgroundColor:'#FF7A00',
        height:'100%',
        width:'85%',
        borderRadius:5,
        color:'#FFFF',
        justifyContent: 'space-between',
        textAlign: 'center',
        fontSize: 16,
        marginHorizontal:5
    },
    viewInput:{
        flexDirection: 'row',
        backgroundColor:'#FF7A00',
        height:43,
        width:'100%',
        borderRadius:5,
        color:'#FFFF',
        justifyContent: 'space-between',
        alignItems:'center',
        fontSize: 16,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 3,   
    },
    searchIcon:{
        marginRight: 15
    },
    mainView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})