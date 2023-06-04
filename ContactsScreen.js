import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactPopup from './ContactPopup';
const ContactsScreen = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      // Fetch the contacts data from the phone or an API
      // and set the data to the 'contacts' state.
      // Example: const fetchedContacts = fetchContacts();
      // setContacts(fetchedContacts);
    }, []);
  
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('ContactPopup', { contact: item })}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View>
        <TextInput
          placeholder="Search contacts"
          onChangeText={text => setSearchTerm(text)}
        />
        <FlatList
          data={filteredContacts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };
  
  export default ContactsScreen;
  