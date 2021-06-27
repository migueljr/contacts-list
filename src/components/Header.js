import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props)=>(
    <View style={style.container}>
        <Text style={style.title}>
            {props.title}
        </Text>
    </View>
)

const style = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"blue",
        padding:10,
        marginBottom:3
    },
    title:{
        fontSize:30,
        color:"#FFFFFF"
    }
})

export default Header