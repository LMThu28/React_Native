//import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function CodeVerification({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.description}>VERIFICATION</Text>
      <Text style={styles.subtitle}>
        Enter onetime password sent on ++849092650798
      </Text>
      <View style={styles.codeInputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')} // Chuyển sang LoginScreen
        >
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 88,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 100,
  },
  description: {
    fontSize: 45,
    color: 'black',
    textAlign: 'center',
    marginBottom: 66,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  codeInput: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal:120   ,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
