import {View, Text, Dimensions, Image} from 'react-native';
import React, {memo} from 'react';
import {useAppSelector} from '../../redux/hooks';
import {darkColors, lightColors} from '../../styles/colors';
import CustomButton from '../ui/CustomButton';
import {UserRole} from '../../models/UserModel';

const {height, width} = Dimensions.get('window');
const ChangeRoleCard = () => {
  const {user} = useAppSelector(state => state.auth);
  const {theme} = useAppSelector(state => state.common);

  return (
    <View
      style={{
        width: '100%',
        height: 250,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
      }}>
      <View
        style={{
          width: '60%',
          height: '100%',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,

          backgroundColor:
            theme === 'dark' ? darkColors.primary : lightColors.primary,
          padding: 20,
        }}>
        <Text
          style={{
            color: lightColors.white,
            fontSize: 27,
            fontWeight: 'bold',
          }}>
          Want to host your own place?
        </Text>
        <Text
          style={{
            color: lightColors.white,
            fontSize: 16,
            marginTop: 10,
          }}>
          Want to host your own place?
        </Text>
        <CustomButton
          buttonStyle={{
            backgroundColor: lightColors.white,
            borderRadius: 50,
            color: theme === 'dark' ? darkColors.primary : lightColors.primary,
            padding: 10,
            marginTop: 10,
          }}
          textStyle={{
            color: theme === 'dark' ? darkColors.primary : lightColors.primary,
            fontWeight: 'bold',
          }}
          title={
            user?.role === UserRole.tenant
              ? 'Activate as landlord'
              : 'Activate as tenant'
          }
          onPress={() => {}}
        />
      </View>

      <View
        style={{
          width: '40%',
          height: '100%',
        }}>
        <Image
          source={require('../../assets/images/property.png')}
          alt="property"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
    </View>
  );
};

export default memo(ChangeRoleCard);
