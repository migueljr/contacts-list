
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from '../components/Header'
import ContactsList from '../components/ContactsList'
import axios from 'axios'



export default class ContactsPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contacts:[]
    }
  }

  componentDidMount(){
    axios.get('https://randomuser.me/api/?nat=US&results=5')
    .then(r=>{
      this.setState({contacts:r.data.results})
    })
  }


  render(){
    return(
      <View style={{marginTop:10}}>
        <ContactsList data={this.state.contacts}/>
      </View>
    )
  }
}
