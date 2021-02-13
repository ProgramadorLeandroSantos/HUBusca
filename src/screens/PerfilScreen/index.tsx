import React,{useEffect, useState} from  'react';
import {View, Text, StyleSheet, Alert, Image, ScrollView, SafeAreaView,ActivityIndicator} from 'react-native';
import axios from 'axios';
import ReposCard from '../../components/ReposCard';


export default function PerfilScreen({route}:any){
    const { name,login,image,location,reposURL,quantRepos,followers,id } = route.params;
    const [reposList,setReposList]:any = useState([]);
    const [isLoading,setIsLoading] = useState(false);

   useEffect(()=>{
        setIsLoading(true);
        const FetchData = async ()=>{
           try {
                const response = await axios.get(`${reposURL}`);
                setReposList(response.data);
                setIsLoading(false);
           } 
           catch (error) {
              Alert.alert("Vixi...",`Erro ao buscar os repositorios de ${name}`);  
           }
        }
        FetchData();
        IsWithRepos();
   },[]);

    const IsWithRepos = ()=>{        
        if(isLoading){
            return <ActivityIndicator size="large" color="#FF7A00" /> 
        }
        
        if(reposList.length  != 0){
            return (
                <ScrollView style={styles.viewList}>
                       {reposList.map((element:any) => {
                            return(
                                <ReposCard 
                                name={element.name}
                                description={element.description}
                                publishedAt={element.updated_at}
                                createdAt={element.created_at}
                                language={element.language}
                                stars={element.stargazers_count}
                                link={element.git_url}
                                key={element.id}
                            />
                            )
                       })}
                </ScrollView>
            )
        }
        else{
            return <Image source={require('../../../assets/reposempty.png')}resizeMode={'cover'}/>
        }
        
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeaderOne}>  
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
                </View>
                <View style={styles.subHeaderTwo}>
                    <View style={styles.followers}>
                        <Text style={styles.subHeaderTwoTexth1}>{followers}</Text>
                        <Text style={styles.subHeaderTwoText}>Seguidores</Text>
                    </View>
                    <View style={styles.reposQuant}>
                        <Text style={styles.subHeaderTwoTexth1}>{quantRepos}</Text>
                        <Text style={styles.subHeaderTwoText}>Repositórios</Text>
                    </View>
                    <View style={styles.id}>
                        <Text style={styles.subHeaderTwoTexth1}>{id}</Text>
                        <Text style={styles.subHeaderTwoText}>ID</Text>
                    </View>
                </View>
            </View>
            <SafeAreaView style={styles.mainView}>
                <IsWithRepos/>
            </SafeAreaView>
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
        height:180,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingHorizontal: 13,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 3,
    },
    subHeaderOne:{
        width:'90%',
        height:'55%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:5,
    },
    subHeaderTwo:{
        width:'100%',
        height:'30%',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    viewPhoto:{
        width:'100%',
        height:'100%',
        borderRadius:6,
        
    },
    viewPhotoContainer:{
        width:'30%',
        height:'88%',
        borderRadius:50,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    viewDetails:{
        width:'68%',
        height:'88%',
    },
    name:{
        fontSize:25,
        fontWeight: 'bold',
        color:'#FF7A00',
        marginLeft:20
    },
    login:{
        fontSize:13,
        fontWeight: '100',
        color:'gray',
        marginLeft:20
    },
    location:{
        fontSize:13,
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
    followers:{
        alignItems: 'center',
    },
    reposQuant:{
        alignItems: 'center',
    },
    id:{
        alignItems: 'center',
    },
    subHeaderTwoText:{
        fontSize: 16,
    },
    subHeaderTwoTexth1:{
        fontSize: 16,
        fontWeight:'bold'
    },
    viewList:{
        width:'100%',
    },
    mainView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
})