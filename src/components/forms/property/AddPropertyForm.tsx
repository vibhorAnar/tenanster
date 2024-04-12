import {View, Text} from 'react-native';
import React, {useState} from 'react';
import InputField from '../../ui/InputField';
import {CreatePropertyInput} from '../../../models/PropertyModel';
import {useAppSelector} from '../../../redux/hooks';
import DropDown from '../../ui/DropDown';
import CustomButton from '../../ui/CustomButton';
import {KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';

const AddPropertyForm = () => {
  const [form, setForm] = useState<CreatePropertyInput>({
    name: '',
    description: '',
    address: '',
    state: '',
    city: '',
    furnishingType: '',
    zipCode: '',
    cordinates: [0, 0],
    size: '',
    rentAmount: '',
    propertyType: '',
    mainImage: '',
    images: [''],
    amenities: [''],
    bedrooms: '',
    bathrooms: '',
  });

  const propertyType = [
    {
      label: 'House',
      value: 'house',
    },
    {
      label: 'Appartment',
      value: 'appartment',
    },
    {
      label: 'Shop',
      value: 'shop',
    },
    {
      label: 'Room',
      value: 'room',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ];

  const furnishingType = [
    {
      label: 'Furnished',
      value: 'furnished',
    },
    {
      label: 'Semi-Furnished',
      value: 'semi-furnished',
    },
    {
      label: 'Unfurnished',
      value: 'unfurnished',
    },
  ];

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
      }}>
      <InputField
        placeholder="Name"
        value={form.name}
        onChangeText={(value: string) => setForm({...form, name: value})}
      />
      <InputField
        placeholder="Description"
        value={form?.description}
        onChangeText={(value: string) => setForm({...form, description: value})}
        // inputStyle={{
        //   height: 150,
        //   //   paddingBottom: 120,
        // }}
        multiline={true}
        numberOfLines={6}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            flex: 1,
            marginRight: 7,
          }}>
          <DropDown
            data={propertyType}
            label="Property Type"
            onChange={(value: string) =>
              setForm({...form, propertyType: value})
            }
            value={form.propertyType}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 7,
          }}>
          <InputField
            placeholder="Price"
            value={form?.rentAmount?.toString() || ''}
            onChangeText={(value: string) =>
              setForm({
                ...form,
                rentAmount: typeof value === 'string' ? value : value,
              })
            }
            keyBoardType="number-pad"
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            flex: 1,
            marginRight: 7,
          }}>
          <InputField
            placeholder="Size in (sqft) units"
            value={form?.size?.toString() || ''}
            onChangeText={(value: string) =>
              setForm({
                ...form,
                size: typeof value === 'string' ? value : value,
              })
            }
            keyBoardType="number-pad"
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 7,
          }}>
          <DropDown
            data={furnishingType}
            label="Furnishing Type"
            onChange={(value: string) =>
              setForm({...form, furnishingType: value})
            }
            value={form.furnishingType}
          />
        </View>
      </View>
      <InputField
        placeholder="Address"
        value={form.address}
        onChangeText={(value: string) => setForm({...form, address: value})}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            flex: 1,
            marginRight: 7,
          }}>
          <InputField
            placeholder="City"
            value={form?.city?.toString() || ''}
            onChangeText={(value: string) =>
              setForm({
                ...form,
                city: value,
              })
            }
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 7,
          }}>
          <InputField
            placeholder="State"
            value={form.state}
            onChangeText={(value: string) => setForm({...form, state: value})}
          />
        </View>
      </View>
      <InputField
        placeholder="Zip Code"
        value={form.zipCode}
        onChangeText={(value: string) => setForm({...form, zipCode: value})}
        maxLength={6}
        keyBoardType="number-pad"
      />
      <InputField
        placeholder="Amenities (comma sapperated)"
        value={
          form?.amenities?.map(value => value.toString().trim()).join(',') || ''
        }
        onChangeText={(value: string) =>
          setForm({...form, amenities: value?.split(',')})
        }
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            flex: 1,
            marginRight: 7,
          }}>
          <InputField
            placeholder="No. of Bedrooms"
            value={form?.bedrooms?.toString() || ''}
            onChangeText={(value: string) =>
              setForm({
                ...form,
                bedrooms: value,
              })
            }
            maxLength={3}
            keyBoardType="number-pad"
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 7,
          }}>
          <InputField
            placeholder="No. of Bathrooms"
            value={form.bathrooms.toString()}
            onChangeText={(value: string) =>
              setForm({...form, bathrooms: value})
            }
            maxLength={3}
            keyBoardType="number-pad"
          />
        </View>
      </View>

      <CustomButton title="Create" onPress={() => {}} />
    </View>
  );
};

export default AddPropertyForm;
