import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import MainLayout from '../../layout/MainLayout';

const NotificationScreen = ({navigation}: any) => {
  return (
    <MainLayout
      isShownBack={false}
      title="Notification"
      navigation={navigation}></MainLayout>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
