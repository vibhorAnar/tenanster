import {StyleSheet, Pressable, View} from 'react-native';
import React, {memo} from 'react';
import MainLayout from '../layout/MainLayout';
import SearchBox from '../components/ui/SearchBox';
import {darkColors, lightColors} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {useAppSelector} from '../redux/hooks';

const SearchScreen = () => {
  const {goBack} = useNavigation();
  const {theme} = useAppSelector((state: any) => state.common);
  const [searchText, setSearchText] = React.useState('');

  return (
    <MainLayout isShownBack={false} isHeaderShown={false}>
      <View style={[styles.header]}>
        <Pressable
          style={styles.backButton}
          onPress={() => {
            goBack();
          }}>
          <MaterialIcons
            name="arrow-back-ios-new"
            size={24}
            color={
              theme === 'dark' ? darkColors.iconColor : lightColors.iconColor
            }
          />
        </Pressable>
        <View style={[styles.searchBoxWrapper]}>
          <SearchBox
            placeholder="Search for products"
            onFilterPress={() => {}}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  backButton: {
    color: lightColors.primary,
    marginRight: 10,
  },
  searchBoxWrapper: {
    flex: 1,
    width: '100%',
  },
});
