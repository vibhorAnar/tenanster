import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import MainLayout from '../../layout/MainLayout';
import CustomButton from '../../components/ui/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {logoutState} from '../../redux/slices/authSlice';
import ProfileCard from '../../components/cards/ProfileCard';
import {darkColors, lightColors} from '../../styles/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
const ProfileScreen = () => {
  const {theme} = useAppSelector((state: any) => state.common);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutState());
  };

  return (
    <MainLayout isLocation={false} isShownBack={false} title="Profile">
      <View>
        <ProfileCard />
        <View
          style={[
            styles.listWrapper,
            {
              backgroundColor:
                theme === 'dark'
                  ? darkColors.secondBackground
                  : lightColors.secondBackground,
            },
          ]}>
          <View style={styles.listItem}>
            <View style={[styles.textIconWrapper]}>
              <View style={[styles.iconWrapper]}>
                <SimpleLineIcons
                  name="user"
                  size={25}
                  color={theme === 'dark' ? darkColors.text : lightColors.text}
                />
              </View>

              <Text
                style={[
                  styles.text,
                  {
                    color:
                      theme === 'dark' ? darkColors.text : lightColors.text,
                  },
                ]}>
                Your Profile
              </Text>
            </View>
            <Entypo
              name="chevron-right"
              size={20}
              color={theme === 'dark' ? darkColors.text : lightColors.text}
            />
          </View>
          <View style={styles.listItem}>
            <View style={[styles.textIconWrapper]}>
              <View style={[styles.iconWrapper]}>
                <MaterialIcons
                  name="apartment"
                  size={25}
                  color={theme === 'dark' ? darkColors.text : lightColors.text}
                />
              </View>

              <Text
                style={[
                  styles.text,
                  {
                    color:
                      theme === 'dark' ? darkColors.text : lightColors.text,
                  },
                ]}>
                Rented Properties
              </Text>
            </View>
            <Entypo
              name="chevron-right"
              size={20}
              color={theme === 'dark' ? darkColors.text : lightColors.text}
            />
          </View>
          <View style={styles.listItem}>
            <View style={[styles.textIconWrapper]}>
              <View style={[styles.iconWrapper]}>
                <FontAwesome
                  name="building"
                  size={25}
                  color={theme === 'dark' ? darkColors.text : lightColors.text}
                />
              </View>

              <Text
                style={[
                  styles.text,
                  {
                    color:
                      theme === 'dark' ? darkColors.text : lightColors.text,
                  },
                ]}>
                Owned Properties
              </Text>
            </View>
            <Entypo
              name="chevron-right"
              size={20}
              color={theme === 'dark' ? darkColors.text : lightColors.text}
            />
          </View>
        </View>

        <CustomButton title="Logout" onPress={handleLogout} />
      </View>
    </MainLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  listWrapper: {
    borderRadius: 10,
    flex: 1,
    padding: 10,
    marginVertical: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 17,
  },
});
