import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {darkColors, lightColors} from '../../styles/colors';
import CustomButton from '../ui/CustomButton';
import {UserRole} from '../../models/UserModel';
import {setUserInterface} from '../../redux/slices/commonSlice';

const RoleToggler = ({
  titleForOwner = 'I want to list',
  titleForTenant = 'I need to rent',
}: {
  titleForOwner?: string;
  titleForTenant?: string;
}) => {
  const {theme, userInterface} = useAppSelector(state => state.common);

  const dispatch = useAppDispatch();

  const toggleRole = useCallback((role: string) => {
    dispatch(setUserInterface(role));
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: 70,
        backgroundColor:
          theme === 'dark'
            ? darkColors.secondBackground
            : lightColors.secondBackground,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
      }}>
      <Pressable
        onPress={() => toggleRole(UserRole.tenant)}
        style={{
          backgroundColor:
            userInterface === UserRole.tenant && theme === 'dark'
              ? darkColors.primary
              : userInterface === UserRole.tenant && theme === 'light'
              ? lightColors.primary
              : theme === 'dark'
              ? darkColors.background
              : lightColors.background,
          width: '48%',
          borderRadius: 50,
          marginRight: 6,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: userInterface === UserRole.tenant ? 5 : 0,
        }}>
        <Text
          style={{
            color:
              userInterface === UserRole.tenant && theme === 'dark'
                ? darkColors.white
                : userInterface === UserRole.tenant && theme === 'light'
                ? lightColors.white
                : theme === 'dark'
                ? darkColors.lightText
                : lightColors.lightText,
            fontWeight: '600',
          }}>
          {titleForTenant}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => toggleRole(UserRole.owner)}
        style={{
          backgroundColor:
            userInterface === UserRole.owner && theme === 'dark'
              ? darkColors.primary
              : userInterface === UserRole.owner && theme === 'light'
              ? lightColors.primary
              : theme === 'dark'
              ? darkColors.background
              : lightColors.background,
          width: '48%',
          borderRadius: 50,
          marginLeft: 6,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: userInterface === UserRole.owner ? 5 : 0,
        }}>
        <Text
          style={{
            color:
              userInterface === UserRole.owner && theme === 'dark'
                ? darkColors.white
                : userInterface === UserRole.owner && theme === 'light'
                ? lightColors.white
                : theme === 'dark'
                ? darkColors.lightText
                : lightColors.lightText,
            fontWeight: '600',
          }}>
          {titleForOwner}
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(RoleToggler);
