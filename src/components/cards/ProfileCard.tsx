import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import {darkColors, lightColors} from '../../styles/colors';
import {useAppSelector} from '../../redux/hooks';

const ProfileCard = () => {
  const {user} = useAppSelector((state: any) => state.auth);
  const {theme} = useAppSelector((state: any) => state.common);

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor:
            theme === 'dark'
              ? darkColors.secondBackground
              : lightColors.secondBackground,
        },
      ]}>
      <Image
        source={user?.proiflePic || require('../../assets/images/profile.png')}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text
          style={[
            styles.name,
            {
              color: theme === 'dark' ? darkColors.text : lightColors.text,
            },
          ]}>
          {user.name || user.username}
        </Text>
        <Text
          style={[
            styles.email,
            {
              color:
                theme === 'dark' ? darkColors.lightText : lightColors.lightText,
            },
          ]}>
          {user.email}
        </Text>
      </View>
    </View>
  );
};

export default memo(ProfileCard);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 10,
    height: 150,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
});
