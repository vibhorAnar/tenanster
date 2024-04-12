import {View, Text} from 'react-native';
import React, {memo} from 'react';
import MainLayout from '../../layout/MainLayout';

const DashboardScreen = () => {
  return (
    <MainLayout isHeaderShown={true} isShownBack={true}>
      <Text
        style={{
          color: 'black',
        }}>
        Dashboard
      </Text>
    </MainLayout>
  );
};

export default DashboardScreen;
