import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import MainStack from './MainStack';
import LoginScreen from '../screens/auth/LoginScreen';
import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen';

const AuthStack = () => {
  const Auth_Stack = createNativeStackNavigator();

  return (
    <Auth_Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Auth_Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Auth_Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Auth_Stack.Screen name="Register" component={RegisterScreen} />
      <Auth_Stack.Screen name="Login" component={LoginScreen} />
      <Auth_Stack.Screen name="Main" component={MainStack} />
    </Auth_Stack.Navigator>
  );
};

export default AuthStack;
