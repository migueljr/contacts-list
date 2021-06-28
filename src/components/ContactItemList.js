import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { capitalizeFirstLetter} from '../util'

const ContactItemList = props =>{
    const {contact} = props
    return(
        <TouchableOpacity onPress={()=>alert(contact.name.first)}>
            <View style={style.line}>
                <Image style={style.avatar} source={{uri:contact.picture.thumbnail}} />
                <Text style={style.item}> {capitalizeFirstLetter(contact.name.first)} {contact.name.last} </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    line:{
        height:70,
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:"#bbb",
        borderBottomWidth:1
    },
    item:{
        padding:10, 
        fontSize:20,
        marginLeft:13,
        flex:5
    },
    avatar:{
        aspectRatio:1,
        borderRadius:50,
        marginLeft:13,
        flex:1
    }
})

export default ContactItemList;