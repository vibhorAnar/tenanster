import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import MainLayout from '../../layout/MainLayout';
import {darkColors, lightColors} from '../../styles/colors';
import {useAppSelector} from '../../redux/hooks';
import CustomButton from '../../components/ui/CustomButton';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const {height, width} = Dimensions.get('window');

const RoleSelectionScreen = ({navigation}: any) => {
  const {theme} = useAppSelector(state => state.common);
  const [role, setRole] = useState<string | undefined>();
  const roles = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Tenant',
        value: 'tenant',
        icon: require('../../assets/images/tenantIcon.png'),
      },
      {
        id: '2',
        label: 'Owner',
        value: 'owner',
        icon: require('../../assets/images/ownerIcon.png'),
      },
      {
        id: '3',
        label: 'Both',
        value: 'both',
        icon: require('../../assets/images/bothIcon.png'),
      },
    ],
    [],
  );
  return (
    <MainLayout isHeaderShown={false} isShownBack={false}>
      <View style={styles.wrapper}>
        <View style={styles.uiWrapper}>
          <Text
            style={[
              styles.logoText,
              {
                color:
                  theme === 'dark' ? darkColors.primary : lightColors.primary,
              },
            ]}>
            Tenanster
          </Text>
          <Text
            style={[
              styles.welcomeText,
              {
                color:
                  theme === 'dark' ? darkColors.primary : lightColors.primary,
              },
            ]}>
            Select Your Primary Role:
          </Text>
        </View>

        {roles.map((r, i) => (
          <Pressable
            onPress={() => setRole(r.value)}
            android_ripple={{
              color:
                theme === 'dark'
                  ? darkColors.disabledButton
                  : lightColors.disabledButton,
            }}
            key={i}
            style={{
              width: '100%',
              marginVertical: 10,

              borderWidth: 2,
              height: 100,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderColor:
                theme === 'dark' ? darkColors.primary : lightColors.primary,

              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={r.icon} style={{width: 50, height: 50}} />
              <Text
                style={{
                  fontSize: 30,
                  color:
                    theme === 'dark' ? darkColors.primary : lightColors.primary,
                  fontWeight: 'bold',
                  marginHorizontal: 20,
                }}>
                {r.label}
              </Text>
            </View>
            {role === r.value ? (
              <EvilIcons name="check" color="green" size={40} />
            ) : (
              <View></View>
            )}
          </Pressable>
        ))}
        <View style={{width: '100%', marginVertical: 10}}>
          <CustomButton
            title="Continue"
            onPress={() => {
              navigation.navigate('Register', {
                role: role,
              });
            }}
            isDisabled={role === undefined}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default RoleSelectionScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    height: height - 60,
    width: width - 32,
  },
  uiWrapper: {
    height: height / 3,
    width: width - 32,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'left',
    fontFamily: 'roboto',
  },
  logoText: {
    fontSize: 56,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
});
