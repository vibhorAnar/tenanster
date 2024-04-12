import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import {darkColors, lightColors} from '../../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppSelector} from '../../redux/hooks';
import {trimString} from '../../utils';

interface Props {
  onPress?: () => void;
  mainImage?: any;
  title?: string | null;
  address?: string;
  price?: number | string | null;
  rating?: string;
  ratingCount?: string;
  distance?: string;
}

const PropertyCard = ({
  onPress,
  mainImage = require('../../assets/images/searchHouse.png'),
  title = '2 Bedroom Apartment at East Coast',
  address = '1234 Street Name, City, State 12345',
  price = '2,000',
  rating = '4.5',
  ratingCount = '5',
  distance = '2.5',
}: Props) => {
  const {theme} = useAppSelector((state: any) => state.common);
  return (
    <Pressable
      style={[
        styles.wrapper,
        {
          backgroundColor:
            theme === 'dark'
              ? darkColors.secondBackground
              : lightColors.secondBackground,
        },
      ]}
      onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={mainImage} style={styles.image} />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.ratingWrapper}>
          <AntDesign name="star" size={14} color={'#FFC107'} />

          <Text
            style={[
              styles.ratingText,
              {
                color: theme === 'dark' ? darkColors.text : lightColors.text,
              },
            ]}>
            {rating}{' '}
            <Text
              style={{
                color:
                  theme === 'dark'
                    ? darkColors.lightText
                    : lightColors.lightText,
              }}>
              {`(${ratingCount})`}
            </Text>
          </Text>
        </View>
        <Text
          style={[
            styles.title,
            {
              color: theme === 'dark' ? darkColors.text : lightColors.text,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.addressText,
            {
              color:
                theme === 'dark' ? darkColors.lightText : lightColors.lightText,
              width: '100%',
            },
          ]}>
          {trimString(address, 40)}
        </Text>
        <Text
          style={[
            styles.addressText,
            {
              color:
                theme === 'dark' ? darkColors.lightText : lightColors.lightText,
              marginTop: 4,
            },
          ]}>
          {distance} KM
        </Text>
        <View style={styles.priceWrapper}>
          <Text
            style={[
              styles.priceText,
              {
                color: theme === 'dark' ? darkColors.text : lightColors.text,
              },
            ]}>
            ₹{price}
            <Text
              style={{
                color:
                  theme === 'dark'
                    ? darkColors.lightText
                    : lightColors.lightText,
                fontSize: 12,
                fontWeight: 'normal',
              }}>
              /month
            </Text>
          </Text>
          <Pressable>
            <Ionicons
              name="heart-outline"
              size={22}
              color={
                theme === 'dark' ? darkColors.iconColor : lightColors.iconColor
              }
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(PropertyCard);

const styles = StyleSheet.create({
  wrapper: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    marginRight: 16,
  },
  imageWrapper: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 6,
  },
  title: {
    fontSize: 16,
    width: 164,
    marginTop: 8,
  },
  addressText: {
    fontSize: 13,
    marginTop: 4,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
