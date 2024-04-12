import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import React, {memo, useState} from 'react';
import InputField from '../../ui/InputField';
import CustomButton from '../../ui/CustomButton';
import {darkColors, lightColors} from '../../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {GQLRegisterMutation} from '../../../graphql/mutations';
import {useMutation} from '@apollo/client';
import {loginState, logoutState} from '../../../redux/slices/authSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Login: undefined;
};

interface RegisterFormProps {
  phone: string;
  email: string;
  username: string;
  password: string;
  role: string;
}

const RegisterForm = ({role}: {role: string | undefined}) => {
  const [form, setForm] = React.useState<RegisterFormProps>({
    phone: '',
    email: '',
    username: '',
    password: '',
    role: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const {theme} = useAppSelector(state => state.common);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const [createUser, {loading}] = useMutation(GQLRegisterMutation);

  const handleSubmit = async () => {
    try {
      const {data} = await createUser({
        variables: {
          createUserInput: {
            ...form,
            role,
          },
        },
      });
      await AsyncStorage.setItem('token', data.login.token);
      dispatch(loginState(data.createUser));
    } catch (error: any) {
      console.log(error.message);
      Alert.alert(error.message);
      dispatch(logoutState());
    }
  };
  const togglePasswordIcon = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.wrapper}>
      <InputField
        placeholder="Email"
        value={form.email}
        onChangeText={(text: string) =>
          setForm({
            ...form,
            email: text,
          })
        }
        keyBoardType={'email-address'}
      />
      <InputField
        placeholder="Username"
        value={form.username}
        onChangeText={(text: string) =>
          setForm({
            ...form,
            username: text,
          })
        }
      />
      <InputField
        placeholder="Phone"
        value={form.phone}
        onChangeText={(text: string) =>
          setForm({
            ...form,
            phone: text,
          })
        }
        keyBoardType="number-pad"
      />
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
        title="Register"
        onPress={handleSubmit}
        isLoader={loading}
      />
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{
          marginTop: 16,
        }}>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text
            style={{
              color: lightColors.primary,
            }}>
            Login
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(RegisterForm);

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
