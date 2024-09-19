import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './components/screens/FirstScreen';
import FirstScreenA  from './components/screens/a';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgetPassword from './components/screens/ForgetPassword';
import CodeVerification from './components/screens/CodeVerification';
import XMEyeLoginScreen from './components/screens/XMEyeLoginScreen';
import YellowLoginScreen from './components/screens/YellowLoginScreen';

// Tạo Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        {/* Danh sách các màn hình */}
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="a" component={FirstScreenA} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="CodeVerification" component={CodeVerification} />
        <Stack.Screen name="XMEyeLoginScreen" component={XMEyeLoginScreen} />
        <Stack.Screen name="YellowLoginScreen" component={YellowLoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
