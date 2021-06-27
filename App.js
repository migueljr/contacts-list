
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from './src/components/Header'
import axios from 'axios'



export default class App extends React.Component{
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

  listData(){
    const data = this.state.contacts

    const elements = data.map((item, i)=>{
      return <Text style={{padding:20, fontSize:20}} key={i}>{item.name.first} - {item.phone}</Text>
    })

    return elements
  }

  render(){
    return(
      <View>
        <Header title="Schedule"/>
        {this.listData()}
      </View>
    )
  }
}
