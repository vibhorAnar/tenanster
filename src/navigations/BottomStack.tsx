import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {lightColors, darkColors} from '../styles/colors';
import {Platform} from 'react-native';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ChatsScreen from '../screens/chat/ChatsScreen';
import WishlistScreen from '../screens/wishlist/WishlistScreen';
import {View, StyleSheet} from 'react-native';
import {useAppSelector} from '../redux/hooks';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const BottomStack = () => {
  const BottomStack = createBottomTabNavigator();
  const {theme} = useAppSelector((state: any) => state.common);

  const renderTabBarIcon = (
    name: string,
    focused: boolean,
    theme: string,
    IconComponent: any,
  ) => (
    <View style={styles.container}>
      <IconComponent
        name={name}
        color={
          focused
            ? lightColors.primary
            : theme === 'dark'
            ? darkColors.iconColor
            : lightColors.iconColor
        }
        size={25}
      />
      {focused && <View style={styles.stoke} />}
    </View>
  );

  return (
    <BottomStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor:
            theme === 'light'
              ? lightColors.secondBackground
              : darkColors.secondBackground,
          height: Platform.OS === 'ios' ? 80 : 60,
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
      initialRouteName="Home">
      <BottomStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon('home', focused, theme, EntypoIcon),
        }}
      />

      <BottomStack.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon('message-circle', focused, theme, Feather),
        }}
      />
      <BottomStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon('dashboard', focused, theme, MaterialIcons),
        }}
      />
      <BottomStack.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon('heart-outline', focused, theme, Ionicons),
        }}
      />
      <BottomStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon('user', focused, theme, Feather),
        }}
      />
    </BottomStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 30,
  },
  stoke: {
    width: 20,
    height: 2,
    borderRadius: 3,
    backgroundColor: lightColors.primary,
    marginTop: 4,
  },
});

export default BottomStack;
