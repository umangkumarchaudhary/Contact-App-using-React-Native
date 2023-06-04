import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo/vector-icons
import ContactPopup from './ContactPopup';

// Dummy data for contacts 
const contactsData = [
  { id: 1, name: 'arjun', number: '1234567890' },
  { id: 2, name: 'ajay mishra', number: '9876543210' },
  { id: 3, name: 'arjun tendulkar', number: '9876783210'},
  { id: 4, name: 'umang kuamr', number: '9877474310'},
  { id: 5, name: 'vivek rajput', number: '9873333210'},
  { id: 6, name: 'rakesh roshan', number: '9876783210'},
  { id: 7, name: 'shivam', number: '8737483333'},
  { id: 8, name: 'satyam', number: '47624783743'},
  { id: 9, name: 'satyam mishra', number: '6427627793479'},
  { id: 10, name: 'john doe', number: '1234567890' }, 
  { id: 11, name: 'jane smith', number: '9876543210' },
  { id: 12, name: 'michael johnson', number: '9876783210' },
  { id: 13, name: 'emily wilson', number: '9877474310' },
  { id: 14, name: 'david brown', number: '9873333210' },
  { id: 15, name: 'sarah anderson', number: '9876783210' },
  { id: 16, name: 'robert taylor', number: '8737483333' },
  { id: 17, name: 'lisa thompson', number: '47624783743' },
  { id: 18, name: 'ryan miller', number: '6427627793479' },
  { id: 19, name: 'jessica lee', number: '54327865123' },
  { id: 20, name: 'matthew davis', number: '98273645548' },
];


const ContactsScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulating fetching contacts from phone
    setContacts(contactsData);
  }, []);

  const renderContact = ({ item }) => (
    <TouchableOpacity onPress={() => showContactPopup(item)} style={styles.contactItem}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <View style={styles.contactDivider} />
        <Text style={styles.contactNumber}>{item.number}</Text>
      </View>
    </TouchableOpacity>
  );
  

  const showContactPopup = (contact) => {
    navigation.navigate('ContactPopup', { contact });
  };

  const filterContacts = (query) => {
    const filteredContacts = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setContacts(filteredContacts);
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={filterContacts}
        />
      </View>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'light blue',
  },
  contactText: {
    fontSize: 16,
    fontFamily: 'Times New Roman', // Set the font family to Times New Roman
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  
  contactItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  contactText: {
    fontSize: 16,
  },
});

export default ContactsScreen;
