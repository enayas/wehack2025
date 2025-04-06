import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleSubmit = async () => {
    if (!firstName || !lastName || !streetNumber || !streetName || !city || !state || !zip) {
      alert('Please fill in all fields');
      return;
    }
    const formData = {
      first_name: firstName,
      last_name: lastName,
      address: {
        street_number: streetNumber,
        street_name: streetName,
        city: city,
        state: state,
        zip: zip,
      },
    };

    try {
      const response = await axios.post('http://api.nessieisreal.com/customers?key=2db18076ee3960a662d069eeeba41729', formData);

      setApiResponse(response.data.message || 'Submission successful!');
      console.log(response.data);
    } catch (error) {
      setApiResponse('Error submitting form. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Information</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Street Number"
        value={streetNumber}
        onChangeText={setStreetNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Street Name"
        value={streetName}
        onChangeText={setStreetName}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />

      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        value={zip}
        onChangeText={setZip}
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={handleSubmit} />

      {apiResponse && <Text style={styles.response}>{apiResponse}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  response: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'blue',
  },
});

export default App;