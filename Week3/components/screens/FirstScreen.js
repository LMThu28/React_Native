import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/1_a.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      <Text style={styles.description}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('a')} // Chuyển sang a
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.description1}>HOW WE WORK?</Text>
      </View>
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
    padding: 10,
    marginBottom: 100,
  },
  logo: {
    height: 150,
    width: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    justifyContent:'center',
    marginBottom: 60,
  },
  description: {
    fontSize: 14,
    color: 'black',
    fontWeight:'bold',
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'center',
    
  },
  description1: {
    fontSize: 20,
    color: 'black',
    fontWeight:'bold',
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'center',
    marginTop: 20,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 100,
  },
  buttonLogin: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonSignUp: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

