import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import AddPropertyScreen from '../screens/property/AddPropertyScreen';

const MainStack = () => {
  const Main_Stack = createNativeStackNavigator();

  return (
    <Main_Stack.Navigator
      initialRouteName="Bottom"
      screenOptions={{
        headerShown: false,
      }}>
      <Main_Stack.Screen name="Bottom" component={BottomStack} />
      <Main_Stack.Screen name="Search" component={SearchScreen} />
      <Main_Stack.Screen name="Notification" component={NotificationScreen} />
      <Main_Stack.Screen name="AddProperty" component={AddPropertyScreen} />
    </Main_Stack.Navigator>
  );
};

export default MainStack;
