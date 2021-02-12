import React,{useState, useEffect} from  'react';
import {
    View,
    TextInput, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    ActivityIndicator,
    Alert,
    ScrollView
} from 'react-native';

import PerfilCard from '../../components/PerfilCard';
import ClearButton from '../../components/ClearHistorySearch';
import api from '../../services/api';

export default function  LandingScreen(){
    const [lastsSearch,setLastsSearch]:any = useState([0]);
    const [input,setInput] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const ClearHistory = ()=>{
        setLastsSearch([]);
    }

    const Data = ()=>{
        if(isLoading){ return <ActivityIndicator size="large" color="#FF7A00" /> }
        
        if(lastsSearch.length !== 0){
            return(
                
                <ScrollView style={styles.viewList}>
                    <ClearButton clear = { ClearHistory }/>
                    <PerfilCard name="Homem Aranha" login="DevzãoBoladão" image={require('../../../assets/locationIcon.png')} location="Telhado velho"/>  
                </ScrollView>
            )
        }
        else{ return <Image source={require('../../../assets/welcome.png')}/> }

    }

    async function SearchPerfil(){
        setIsLoading(true);
        if(input!== ""){
            try {
                const response = await api.get(`/${input}`);
                if(response){
                    setIsLoading(false);
                    Alert.alert("Encontrei esse Perfil",`Nome:  ${response.data.name}`)
                }
            }
            catch (error) {
                Alert.alert("Nenhum perfil encontrado",`Não existe um perfil com o nome ${input}`);
                setIsLoading(false);
            }
        }
        else{
            Alert.alert("Desculpe :(","Digite um nome antes de pesquisar algum perfil...");
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        Data();
    },[lastsSearch])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/headerLogo.png')}/>
                <View style={styles.viewInput}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Login de usuário"
                        placeholderTextColor="white"
                        onChangeText={(text)=>{setInput(text)}}
                    />
                    <TouchableOpacity
                        onPress={()=>{SearchPerfil()}}
                    >
                        <Image source={require('../../../assets/searchicon.png')} style={styles.searchIcon}/>  
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainView}>
                <Data/>
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
        marginHorizontal:10
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
    viewList:{
        width:'100%',
    }
})
