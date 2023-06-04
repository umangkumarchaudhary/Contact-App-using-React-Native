import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ContactPopup = ({ route }) => {
    const navigation = useNavigation();
    const { contact } = route.params;
  
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Close</Text>
        </TouchableOpacity>
        <Text>Name: {contact.name}</Text>
        <Text>Number: {contact.number}</Text>
      </View>
    );
  };
  
  export default ContactPopup;
  