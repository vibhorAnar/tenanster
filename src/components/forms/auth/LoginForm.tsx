import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import InputField from '../../ui/InputField';
import CustomButton from '../../ui/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {darkColors, lightColors} from '../../../styles/colors';
import {loginState, logoutState} from '../../../redux/slices/authSlice';
import {useDispatch} from 'react-redux';
import {useMutation} from '@apollo/client';
import {GQLLoginMutation} from '../../../graphql/mutations';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {setUserInterface} from '../../../redux/slices/commonSlice';
import {UserRole} from '../../../models/UserModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  RoleSelection: undefined;
};

interface LoginFormProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {theme} = useAppSelector(state => state.common);
  const [form, setForm] = React.useState<LoginFormProps>({
    email: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [login, {loading}] = useMutation(GQLLoginMutation);

  /**
   * The `handleSubmit` function is an asynchronous function that handles form submission, logs the
   * response data if successful, and dispatches the appropriate state actions.
   */

  const handleSubmit = async () => {
    try {
      const {data} = await login({
        variables: {
          user: {
            email: form.email,
            password: form.password,
          },
        },
      });
      await AsyncStorage.setItem('token', data.login.token);
      dispatch(loginState(data.login));
      dispatch(
        setUserInterface(
          data.login.user.role === UserRole.both
            ? UserRole.tenant
            : data.login.user.role === UserRole.admin
            ? UserRole.tenant
            : data.login.user.role,
        ),
      );
    } catch (err: any) {
      console.log(err);
      Alert.alert(err.message);
      dispatch(logoutState());
    }
  };

  const togglePasswordIcon = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.wrapper}>
      <InputField
        placeholder="Email or Username"
        value={form.email}
        onChangeText={(text: string) =>
          setForm({
            ...form,
            email: text,
          })
        }
        keyBoardType={'email-address'}
      />
      {/* </View> */}
      {/* <View style={styles.inputFieldWrapper}> */}
      <InputField
        placeholder="Password"
        value={form.password}
        onChangeText={(text: string) =>
          setForm({
            ...form,
            password: text,
          })
        }
        secureTextEntry={isPasswordVisible ? false : true}
        icon={
          isPasswordVisible ? (
            <Pressable
              android_ripple={{
                color:
                  theme === 'dark'
                    ? darkColors.disabledButton
                    : lightColors.disabledButton,
              }}
              onPress={togglePasswordIcon}>
              <MaterialCommunityIcons
                name="eye-outline"
                color={
                  theme === 'dark'
                    ? darkColors.placeholder
                    : lightColors.placeholder
                }
                size={20}
              />
            </Pressable>
          ) : (
            <Pressable
              android_ripple={{
                color:
                  theme === 'dark'
                    ? darkColors.disabledButton
                    : lightColors.disabledButton,
              }}
              onPress={togglePasswordIcon}>
              <MaterialCommunityIcons
                name="eye-off-outline"
                color={
                  theme === 'dark'
                    ? darkColors.placeholder
                    : lightColors.placeholder
                }
                size={20}
              />
            </Pressable>
          )
        }
      />
      <CustomButton
        isDisabled={form.email === '' && form.password === ''}
        title="Login"
        onPress={handleSubmit}
        isLoader={loading}
      />
      <Pressable
        onPress={() => {
          navigation.navigate('RoleSelection');
        }}
        style={{
          marginTop: 16,
        }}>
        <Text style={styles.loginText}>
          Don't have an account?{' '}
          <Text
            style={{
              color: lightColors.primary,
            }}>
            Register
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(LoginForm);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },

  loginText: {
    color: '#000000',
    textAlign: 'center',
  },
});
