import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {memo} from 'react';
import {darkColors, lightColors} from '../../styles/colors';
import {useSelector} from 'react-redux';
import {useAppSelector} from '../../redux/hooks';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  inputStyle?: any;
  keyBoardType?: any;
  disabled?: boolean;
  icon?: any;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
}

const InputField = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  inputStyle,
  keyBoardType = 'default',
  disabled = false,
  icon,
  multiline = false,
  maxLength,
  numberOfLines = 1,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const {theme} = useAppSelector((state: any) => state.common);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 16,
      }}>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor:
              theme === 'dark'
                ? darkColors.secondBackground
                : lightColors.secondBackground,
            color: theme === 'dark' ? darkColors.text : lightColors.text,
          },
          isFocused && {
            borderBottomWidth: 2,
            borderBottomColor: lightColors.primary,
          },
          icon && {
            marginLeft: 7,
          },
          inputStyle,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={
          theme === 'dark' ? darkColors.placeholder : lightColors.placeholder
        }
        keyboardType={keyBoardType}
        editable={!disabled}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {icon && (
        <View
          style={{
            position: 'relative',
            right: 20,
          }}>
          {icon}
        </View>
      )}
    </View>
  );
};

export default memo(InputField);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
  },
});
