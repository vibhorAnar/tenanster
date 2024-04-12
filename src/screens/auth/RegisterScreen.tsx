import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import RegisterForm from '../../components/forms/auth/RegisterForm';
import {lightColors} from '../../styles/colors';

const {height, width} = Dimensions.get('window');

const RegisterScreen = ({navigation, route}: any) => {
  const {role} = route.params;
  return (
    <MainLayout isHeaderShown={false} isShownBack={false}>
      <View style={styles.uiWrapper}>
        <Text style={[styles.welcomeText, {color: lightColors.primary}]}>
          Tenanster
        </Text>
        <Text style={[styles.logoText, {color: lightColors.primary}]}>
          Sign Up
        </Text>
      </View>
      <RegisterForm role={role} />
    </MainLayout>
  );
};

export default RegisterScreen;

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
