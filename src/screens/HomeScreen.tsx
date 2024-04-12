import {View, StyleSheet, Text, Pressable, Alert} from 'react-native';
import React, {useEffect} from 'react';
import MainLayout from '../layout/MainLayout';
import SearchBox from '../components/ui/SearchBox';
import HorizontalPropertyList from '../components/common/HorizontalPropertyList';
import {useQuery} from '@apollo/client';
import {GQLGetHomePageProperties} from '../graphql/queries';
import {Property} from '../models/PropertyModel';
import {darkColors, lightColors} from '../styles/colors';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getLocationPermission} from '../permissions';
import Geolocation from '@react-native-community/geolocation';
import {setCorrdinates} from '../redux/slices/locationSlice';
import {User, UserRole} from '../models/UserModel';
import RoleToggler from '../components/common/RoleToggler';
import ChangeRoleCard from '../components/cards/ChangeRoleCard';
import CustomButton from '../components/ui/CustomButton';

const HomeScreen = ({navigation}: any) => {
  const {theme, userInterface} = useAppSelector(state => state.common);
  const auth = useAppSelector(state => state.auth);
  const user: User | undefined = auth.user;
  const {data, loading, error} = useQuery(GQLGetHomePageProperties, {
    variables: {
      lat: 29.9812466,
      lng: 78.0527693,
    },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert(error.message);
    }
  }, [error]);

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
    <MainLayout
      isShownBack={false}
      isNotification={true}
      navigation={navigation}
      isHeaderShown={false}>
      <Pressable
        style={styles.locationWrapper}
        onPress={() => {
          getLocation();
        }}>
        <Text
          style={[
            styles.text,
            {
              marginLeft: 4,
              fontSize: 14,
              fontWeight: 'normal',
              color:
                theme === 'dark' ? darkColors.lightText : lightColors.lightText,
            },
          ]}>
          Your current location
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
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
              theme === 'dark' ? darkColors.iconColor : lightColors.iconColor
            }
          />
        </View>
      </Pressable>

      <SearchBox
        placeholder="Search for products"
        onButtonPress={() => navigation.navigate('Search')}
        onFilterPress={() => {}}
        searchText=""
        setSearchText={() => {}}
        isButton={true}
      />
      <View
        style={{
          marginTop: 20,
        }}>
        <Text
          style={{
            color: theme === 'dark' ? darkColors.text : lightColors.text,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Welcome, {user?.name || user?.username}
        </Text>
      </View>
      <View
        style={{
          marginVertical: 20,
        }}>
        <RoleToggler />
      </View>
      {user?.role !== UserRole.owner && userInterface === UserRole.tenant ? (
        <>
          <View style={[styles.nearByWrapper]}>
            <HorizontalPropertyList
              properties={data?.nearByProperties.properties}
              loading={loading}
              title="Near Your Location"
              subtitle="238 properties in haridwar"
            />
          </View>
          <View style={[styles.nearByWrapper]}>
            <HorizontalPropertyList
              properties={data?.recentlyAddedProperties.properties}
              loading={loading}
              title="Recently Added Properties"
            />
          </View>
        </>
      ) : null}

      {user?.role !== UserRole.tenant && userInterface === UserRole.owner ? (
        <>
          <View style={[styles.nearByWrapper]}>
            <HorizontalPropertyList
              properties={data?.myProperties.properties}
              loading={loading}
              title="Your Properties"
              subtitle="238 properties"
            />
          </View>
          <View style={[styles.nearByWrapper]}>
            <CustomButton
              title="Want to add new Property ?"
              onPress={() => {
                navigation.navigate('AddProperty');
              }}
            />
          </View>
        </>
      ) : null}

      <View
        style={{
          marginBottom: 120,
          marginTop: 30,
          width: '100%',
        }}>
        {user?.role === UserRole.tenant || user?.role === UserRole.owner ? (
          <ChangeRoleCard />
        ) : null}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  nearByWrapper: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  locationWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
});

export default HomeScreen;
