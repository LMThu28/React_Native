import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function YellowLoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require('../../assets/user_loginyellow.png')} />
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require('../../assets/password_logintellow.png')} />
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <Image source={require('../../assets/eye_icon.png')} style={styles.eyeIconImage} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 80,
    alignSelf: 'flex-start', // Thêm thuộc tính này để căn trái
  },
  inputContainer: {
    backgroundColor:'#DEBF3B',
    
    borderWidth:1,
    borderColor:'#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize:18,
  
  },
  inputPassword: {
    flex: 1,
    fontSize:18,
    
    
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  eyeIconImage: {
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 5,
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  createAccount: {
    color: 'black',
    fontSize: 18,
    fontWeight:'bold',
    marginTop: 40,
  },
});


