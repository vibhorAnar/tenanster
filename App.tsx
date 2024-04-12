import React, {useEffect} from 'react';
import Navigations from './src/navigations';
import {useDispatch, useSelector} from 'react-redux';
import {Appearance} from 'react-native';
import {setTheme} from './src/redux/slices/commonSlice';
import {getLocationPermission} from './src/permissions';
import {setCorrdinates} from './src/redux/slices/locationSlice';
import Geocoder from 'react-native-geocoding';

import Geolocation from '@react-native-community/geolocation';
import {useAppDispatch, useAppSelector} from './src/redux/hooks';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const {theme} = useAppSelector((state: any) => state.common);
  const {isAuthenticated} = useAppSelector((state: any) => state.auth);

  const {corrdinates} = useAppSelector((state: any) => state.location);

  const dispatch = useAppDispatch();

  console.log('theme', theme);
  console.log('corrdinates', corrdinates);
  console.log('isAuthenticated', isAuthenticated);
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

  // useEffect(() => {
  //   if(corrdinates?.latitude !== 0 && corrdinates.longitude !== 0){
  //     Geocoder.init('AIzaSyC-9Oq6Y5a4VbZtqJW7r3QgZb3wQY0t5Z0');
  //     Geocoder.from(corrdinates.latitude, corrdinates.longitude)
  //       .then(json => {
  //         var addressComponent = json.results[0].address_components[0];
  //         console.log({addressComponent});
  //       })
  //       .catch(error => console.warn(error));
  //   }
  // }, [corrdinates]);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    dispatch(setTheme('light'));
  }, [colorScheme]);

  return <Navigations />;
};

export default App;
