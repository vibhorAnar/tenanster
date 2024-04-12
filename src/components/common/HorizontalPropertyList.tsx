import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {darkColors, lightColors} from '../../styles/colors';
import PropertyCard from '../cards/PropertyCard';
// import {useGetPropertiesQuery} from '../../redux/services/propertyService';
import {BASE_API} from '../../env/env';
import {useAppSelector} from '../../redux/hooks';
import {Property} from '../../models/PropertyModel';

interface IProperty {
  properties: Property[];
  loading: boolean;
  title: string;
  subtitle?: string;
}

const HorizontalPropertyList = (props: IProperty) => {
  const {theme} = useAppSelector((state: any) => state.common);
  const {corrdinates} = useAppSelector((state: any) => state.location);
  // const {data, isFetching, error} = useGetPropertiesQuery(
  //   {
  //     lat: corrdinates.latitude,
  //     lng: corrdinates.longitude,
  //   },
  //   {
  //     skip: !corrdinates.latitude || !corrdinates.longitude,
  //   },
  // );

  return (
    <View style={[styles.wrapper]}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Text
              style={[
                styles.title,
                {
                  color: theme === 'dark' ? darkColors.text : lightColors.text,
                },
              ]}>
              {props.title}
            </Text>
            {!props.loading ? (
              <Pressable>
                <Text style={[styles.seeAllText]}>See all</Text>
              </Pressable>
            ) : null}
          </View>
          {props.subtitle ? (
            <Text
              style={[
                styles.subTitle,
                {
                  color:
                    theme === 'dark'
                      ? darkColors.lightText
                      : lightColors.lightText,
                },
              ]}>
              {props.subtitle}
            </Text>
          ) : null}
        </View>
      </View>
      {props.loading ? (
        <View
          style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            display: 'flex',
          }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={props.properties}
          renderItem={({item}) => (
            <PropertyCard
              title={item.name}
              address={`${item.address}, ${item.city} ${item.state} ${item.zipCode}`}
              price={item.rentAmount}
              key={item._id}
              mainImage={item.mainImage}
            />
          )}
        />
      )}
    </View>
  );
};

export default memo(HorizontalPropertyList);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 13,
  },
  seeAllText: {
    fontSize: 14,
    color: lightColors.primary,
  },
});
