import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import MainLayout from '../../layout/MainLayout';

const WishlistScreen = () => {
  return (
    <MainLayout isShownBack={false} title="Wishlist">
      <Text> Wishlist</Text>
    </MainLayout>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({});
