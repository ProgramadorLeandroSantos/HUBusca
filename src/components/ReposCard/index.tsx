import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';

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
    return(
        <TouchableOpacity style={styles.cardContainer}>
           <View style={styles.viewName}>
                <Text style={styles.repoName}>{name}</Text>
           </View>

           <View style={styles.viewDescription}>
                <Text 
                    style={styles.repoDescription}
                    numberOfLines={2}
                >{description}</Text>
           </View>
           
           <View style={styles.viewDates}>
                <Text style={styles.reposDates}>Último push: {publishedAt}</Text>
                <Text style={styles.reposDates}>Criado em: {createdAt}</Text>
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
        width:'100%',
        height:'25%',
        justifyContent:'center',
        alignItems:'center'
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
        fontSize:25,
        borderColor:'#FF7A00',
        borderBottomWidth:3,
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