import AsyncStorage from '@react-native-async-storage/async-storage';

export const trimString = (string: string, length: number): string => {
  return string.length > length
    ? string.substring(0, length - 3) + '...'
    : string;
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (error) {
    console.error('Error getting token: ', error);
  }
};
