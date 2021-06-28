// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactsPage from './src/pages/ContacsPage';
import ContactDetail from './src/pages/ContactDetail';


const Stack = createStackNavigator();
const options = {
  headerStyle: {
    title:'Contacts',
    backgroundColor: 'blue',
    borderBottomColor:"#bbb",
    borderBottomWidth:1
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    flexGrow:1,
    textAlign:"center",
    fontSize:30
  },
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactDetail">
        <Stack.Screen name="Contacts" component={ContactsPage} options={options} />
        <Stack.Screen name="ContactDetail" component={ContactDetail} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;