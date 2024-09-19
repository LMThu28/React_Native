import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen({navigation}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

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
          <Image source={require('../../assets/eye_icon.png')} style={styles.eyeIconImage} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('RegisterScreen')} // Chuyển sang RegisterScreen
        >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orLoginWith}>Or login with</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity >
          <Image source={require('../../assets/facebook_icon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/zalo_icon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/gg_icon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
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
    marginBottom: 100,
  },
  input: {
    width: '100%',
    backgroundColor: '#CAE1D1',
    padding: 10,
    borderRadius: 5,
    marginBottom: 25,
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
  button: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  forgotPassword: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  orLoginWith: {
    fontSize: 14,
    marginTop: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  socialIcon: {
    width: 110,
    height: 50,
  },
});
