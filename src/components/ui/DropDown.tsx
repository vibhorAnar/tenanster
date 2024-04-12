import {useCallback, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IDropdown {
  data: {
    label: string;
    value: string;
  }[];
  label: string;
  onChange: (value: string) => void;
  value: string;
}

const DropDown = (props: IDropdown) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleChange = useCallback(
    (value: string) => {
      props.onChange(value);
      setIsFocus(false);
    },
    [props.onChange],
  );

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={props.label}
        value={props.value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => handleChange(item.value)}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? 'blue' : 'black'}
        //     name="down"
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    marginTop: -15,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    // backgroundColor: 'white',
    left: 22,
    // top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
