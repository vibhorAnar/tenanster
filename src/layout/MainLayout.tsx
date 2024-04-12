import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {darkColors, lightColors} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getLocationPermission} from '../permissions';
import Geolocation from '@react-native-community/geolocation';
import {setCorrdinates} from '../redux/slices/locationSlice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {KeyboardAvoidingView, KeyboardAvoidingViewProps} from 'react-native';

const {width, height} = Dimensions.get('window');

interface Props extends PropsWithChildren<any> {
  title?: string;
  isShownBack: boolean;
  isLocation?: boolean;
  // isNotification?: boolean;
  isHeaderShown?: boolean;
  navigation?: any;
}

const MainLayout = ({
  children,
  title,
  isShownBack,
  isLocation = false,
  // isNotification = false,
  isHeaderShown = true,
  navigation,
}: Props) => {
  const {goBack} = useNavigation();
  const {theme} = useAppSelector((state: any) => state.common);
  // const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const getLocation = () => {
    const permission = getLocationPermission();
    permission.then(res => {
      console.log('res', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            dispatch(
              setCorrdinates({
                latitude,
                longitude,
              }),
            );
          },
          error => {
            console.log({error});
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          },
        );
      }
    });
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            theme === 'dark' ? darkColors.background : lightColors.background,
        },
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {isHeaderShown && (
            <View
              style={[
                styles.hraderWrapper,
                {
                  // borderBottomColor: theme === 'dark' ? '#000000' : '#e5e5e5',
                  // borderBottomWidth: 1,
                  backgroundColor:
                    theme === 'dark'
                      ? darkColors.secondBackground
                      : lightColors.secondBackground,
                },
              ]}>
              {isShownBack && (
                <View style={styles.backWrapper}>
                  <Pressable
                    style={styles.backButton}
                    onPress={() => {
                      goBack();
                    }}>
                    <MaterialIcons
                      name="arrow-back-ios-new"
                      size={24}
                      color={
                        theme === 'dark'
                          ? darkColors.iconColor
                          : lightColors.iconColor
                      }
                    />
                  </Pressable>
                  {title && (
                    <View style={styles.titleWrapper}>
                      <Text
                        style={[
                          styles.text,
                          {
                            color:
                              theme === 'dark'
                                ? darkColors.iconColor
                                : lightColors.iconColor,
                          },
                        ]}>
                        {title}
                      </Text>
                    </View>
                  )}
                </View>
              )}

              {isLocation && (
                <Pressable
                  style={styles.locationWrapper}
                  onPress={() => {
                    getLocation();
                  }}>
                  <MaterialIcons
                    name="location-on"
                    size={22}
                    color={lightColors.primary}
                  />
                  <Text
                    style={[
                      styles.text,
                      {
                        marginLeft: 4,

                        color:
                          theme === 'dark'
                            ? darkColors.iconColor
                            : lightColors.iconColor,
                      },
                    ]}>
                    Location
                  </Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={22}
                    color={
                      theme === 'dark'
                        ? darkColors.iconColor
                        : lightColors.iconColor
                    }
                  />
                </Pressable>
              )}

              {/* {isNotification && (
            <Pressable
              style={styles.notificationWrapper}
              onPress={() => navigation.navigate('Notification')}>
              <MaterialIcons
                name="notifications"
                size={22}
                color={
                  theme === 'dark'
                    ? darkColors.iconColor
                    : lightColors.iconColor
                }
              />
            </Pressable>
          )} */}
            </View>
          )}

          <View style={styles.mainWrapper}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    paddingBottom: 36,
  },
  hraderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 16,
  },
  backWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 4,
    color: lightColors.primary,
  },
  locationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  mainWrapper: {
    paddingTop: 16,
    paddingHorizontal: 16,
    height: '100%',
  },
});

export default MainLayout;
