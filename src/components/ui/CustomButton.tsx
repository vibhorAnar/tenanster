import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {memo} from 'react';
import {darkColors, lightColors} from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import themeSlice from '../../redux/slices/commonSlice';
import {useAppSelector} from '../../redux/hooks';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: any;
  textStyle?: any;
  isLoader?: boolean;
  isDisabled?: boolean;
}

const CustomButton = ({
  title = 'Click me',
  onPress,
  buttonStyle,
  textStyle,
  isLoader = false,
  isDisabled = false,
}: CustomButtonProps) => {
  const {theme} = useAppSelector((state: any) => state.common);
  return (
    <Pressable
      onPress={onPress}
      disabled={isLoader || isDisabled}
      android_ripple={{
        color:
          theme === 'dark'
            ? darkColors.disabledButton
            : lightColors.disabledButton,
      }}
      style={[
        styles.button,
        {
          opacity: isLoader || isDisabled ? 0.5 : 1,
          backgroundColor:
            theme === 'dark' ? darkColors.primary : lightColors.primary,
        },
        buttonStyle,
      ]}>
      {/* <LinearGradient
        colors={[
          lightColors.primary,
          lightColors.primary,
        ]}
        style={[
          styles.button,
          {
            opacity: isLoader ? 0.5 : 1,
          },
          buttonStyle,
        ]}> */}
      {isLoader ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      {/* </LinearGradient> */}
    </Pressable>
  );
};

export default memo(CustomButton);

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
