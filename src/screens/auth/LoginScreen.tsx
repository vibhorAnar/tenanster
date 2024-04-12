import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import LoginForm from '../../components/forms/auth/LoginForm';
import MainLayout from '../../layout/MainLayout';
import {lightColors} from '../../styles/colors';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  return (
    <MainLayout isHeaderShown={false} isShownBack={false}>
      <View style={styles.uiWrapper}>
        <Text style={[styles.welcomeText, {color: lightColors.primary}]}>
          Tenanster
        </Text>
        <Text style={[styles.logoText, {color: lightColors.primary}]}>
          Sign In
        </Text>
      </View>
      <LoginForm />
    </MainLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  uiWrapper: {
    height: height / 3,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'roboto',
  },
  logoText: {
    fontSize: 56,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
});
