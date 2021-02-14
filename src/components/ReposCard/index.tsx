import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image, Alert,Linking} from 'react-native';

interface IReposCard{
    name: string,
    description: string,
    publishedAt: string,
    createdAt: string,
    language: string,
    stars: string,
    link: string,
}

export default function PerfilCard(props:IReposCard):JSX.Element{
    const {name,description,publishedAt,createdAt,language,stars,link} = props;
    let linkFormated = link.substr(6);
    let publishedAtFormated = publishedAt.substring(0,10); 
    let createdAtFormated = createdAt.substring(0,10); 
    
    async function openOnbrowser(){
        try {
            await Linking.openURL(`https://${linkFormated}`)
        } catch (error) {
            Alert.alert("Desculpe","Nao foi possível acessar esse repositório")
        }
    };

    return(
        <TouchableOpacity 
            style={styles.cardContainer}
            onPress={() =>{ openOnbrowser() }}
        >
           <View style={styles.viewName}>
                <Text style={styles.repoName} numberOfLines={1}>{name}</Text>
           </View>

           <View style={styles.viewDescription}>
                <Text 
                    style={styles.repoDescription}
                    numberOfLines={2}
                >{description}</Text>
           </View>
           
           <View style={styles.viewDates}>
                <Text style={styles.reposDates}>Último push: {publishedAtFormated}</Text>
                <Text style={styles.reposDates}>Criado em: {createdAtFormated}</Text>
           </View>

           <View style={styles.viewLanguageAndStars}>
                <Text style={styles.languageText}>{language}</Text>
                <View style={styles.viewStars}>
                    <Image source={require('../../../assets/staricon.png')}/>
                    <Text style={styles.starText}>{stars}</Text>
                </View>
           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: '#FFFF',
        height: 157,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 5,
        marginHorizontal:5,
        marginVertical:5,
        alignItems:'center',
        flexDirection:'column'
    },
    viewName:{
        width:'95%',
        height:'25%',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    viewDescription:{
        height:'40%',
        width:'80%',
        justifyContent:'center',
    },
    viewDates:{
        height:'10%',
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    viewLanguageAndStars:{
        height:'25%',
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    repoName:{
        fontSize:18,
        borderColor:'#FF7A00',
        borderBottomWidth:1.5,
        fontWeight:'bold',
    },
    repoDescription:{
        fontSize:16,
        fontStyle:'italic',
    },
    reposDates:{
        fontSize:10,
    },
    viewStars:{
        flexDirection:'row',
    },
    starText:{
        fontSize:13,
    },
    languageText:{
        fontSize:15,
        fontWeight: 'bold',
    }
   
})