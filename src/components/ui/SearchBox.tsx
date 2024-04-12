import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {memo} from 'react';
import {SearchBar} from 'react-native-screens';
import {useSelector} from 'react-redux';
import {darkColors, lightColors} from '../../styles/colors';
import InputField from './InputField';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {useAppSelector} from '../../redux/hooks';

interface Props {
  placeholder?: string;
  searchText: string;
  setSearchText: (text: string) => void;
  onFilterPress: () => void;
  isButton?: boolean;
  onButtonPress?: () => void;
}

const SearchBox = ({
  placeholder = 'Search address, city, state',
  searchText,
  setSearchText,
  onFilterPress,
  isButton = false,
  onButtonPress,
}: Props) => {
  const {theme} = useAppSelector((state: any) => state.common);
  return (
    <Pressable
      {...(isButton && {
        onPress: onButtonPress,
      })}
      style={[
        styles.container,
        {
          backgroundColor:
            theme === 'dark'
              ? darkColors.secondBackground
              : lightColors.secondBackground,
        },
      ]}>
      <Feather
        name="search"
        size={22}
        color={theme === 'dark' ? darkColors.iconColor : lightColors.iconColor}
      />
      <InputField
        placeholder="Search property by address, city, state"
        value={searchText}
        onChangeText={(text: string) => setSearchText(text)}
        inputStyle={{
          marginRight: 18,
          flex: 1,
        }}
        disabled={isButton}
        icon={
          <Pressable onPress={onFilterPress}>
            <Octicons
              name="filter"
              size={22}
              color={
                theme === 'dark' ? darkColors.iconColor : lightColors.iconColor
              }
            />
          </Pressable>
        }
      />
    </Pressable>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 50,
  },
});
