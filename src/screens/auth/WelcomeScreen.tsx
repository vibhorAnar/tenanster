import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {memo} from 'react';
import MainLayout from '../../layout/MainLayout';
import CustomButton from '../../components/ui/CustomButton';
import {darkColors, lightColors} from '../../styles/colors';
import {useSelector} from 'react-redux';
import {useAppSelector} from '../../redux/hooks';

const {height, width} = Dimensions.get('window');

const WelcomeScreen = ({navigation}: any) => {
  const {theme} = useAppSelector((state: any) => state.common);
  return (
    <MainLayout isHeaderShown={false} isShownBack={false}>
      <View style={styles.wrapper}>
        <View style={styles.uiWrapper}>
          <Image
            source={require('../../assets/images/welcome.png')}
            style={styles.image}
          />
          <View style={[styles.textWrapper]}>
            <Text style={[styles.welcomeText, {color: lightColors.primary}]}>
              Welcome to
            </Text>
            <Text style={[styles.logoText, {color: lightColors.primary}]}>
              Tenanster
            </Text>

            <Text
              style={[
                styles.normalText,
                {color: theme === 'dark' ? darkColors.text : lightColors.text},
              ]}>
              Find the tenant, list your property in just a simple steps, in
              your hand.
            </Text>
            <Text
              style={[
                styles.normalText,
                {
                  color: theme === 'dark' ? darkColors.text : lightColors.text,
                  marginTop: 26,
                },
              ]}>
              You are one step away.
            </Text>
          </View>
        </View>
        <View style={{width: '100%', marginVertical: 10}}>
          <CustomButton
            title="Register"
            onPress={() => {
              navigation.navigate('RoleSelection');
            }}
          />
        </View>

        <View style={{width: '100%', marginVertical: 10}}>
          <CustomButton
            title="Login"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default memo(WelcomeScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height - 60,
    width: width - 32,
  },
  uiWrapper: {
    height: height / 2,
    width: width - 32,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrapper: {
    width: '100%',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'left',
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
  logoText: {
    fontSize: 56,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  normalText: {
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'roboto',
    marginTop: 16,
  },
});
