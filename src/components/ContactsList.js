import React from 'react'
import { View, Text } from 'react-native'
import ContactItemList from './ContactItemList'

const ContactList = (props)=>{
    const data = props.data.map((item, index)=>{
        return <ContactItemList contact={item} key={index} />
    })

    return data;
}

export default ContactList;