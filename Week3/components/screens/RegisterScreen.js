import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function RegisterScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <Image source={require('../../assets/eys_icon1.png')} style={styles.eyeIconImage} />
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Birthday" />

      <View style={styles.genderContainer}>
        <Text style={styles.genderText}>Male</Text>
        <TouchableOpacity style={styles.radioButton}>
          <Text style={styles.radioSelected}></Text>
        </TouchableOpacity>
        <Text style={styles.genderText}>Female</Text>
        <TouchableOpacity style={styles.radioButton}>
          <Text></Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7e0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 50 ,
  },
  input: {
    width: '100%',
    backgroundColor: '#CAE1D1',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputPassword: {
    flex: 1,
    backgroundColor: '#CAE1D1',
    padding: 10,
    borderRadius: 5,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  eyeIconImage: {
    width: 24,
    height: 24,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  genderText: {
    marginRight: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  termsText: {

    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 30 ,
  },
});
