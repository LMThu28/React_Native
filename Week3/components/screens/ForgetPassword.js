import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function ForgetPassword({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Sử dụng cú pháp require đúng cách */}
        <Image source={require('../../assets/forgetpassword.jpg')} style={styles.logo} />
      </View>
      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.description}>
        Provide your account's email for which you want to reset your password
      </Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('CodeVerification')} // Chuyển sang ForgetPassword
        >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCF4F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    height: 150,
    width: 200,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 50,
  },
  description: {
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontWeight:'Bold',
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#C4C4C4',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 135,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
