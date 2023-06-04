import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from './ContactsScreen';
import ContactPopup from './ContactPopup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="ContactPopup" component={ContactPopup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
