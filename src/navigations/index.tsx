import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import BottomStack from './BottomStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useQuery} from '@apollo/client';
import {GQLGetMyProfile} from '../graphql/queries';
import {setUser} from '../redux/slices/authSlice';

const RootStack = createNativeStackNavigator();
const index = () => {
  const {isAuthenticated} = useAppSelector((state: any) => state.auth);
  const {data, refetch} = useQuery(GQLGetMyProfile, {
    skip: !isAuthenticated ? true : false,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.myProfile) {
      dispatch(setUser(data.myProfile));
    }
  }, [data]);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      refetch();
    }, 1000 * 60); // 1 minute

    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      {/* <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name={isAuthenticated ? 'Main' : 'Auth'}
          component={isAuthenticated ? BottomStack : AuthStack}
        />
      </RootStack.Navigator> */}
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default index;
