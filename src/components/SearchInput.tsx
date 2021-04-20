import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncer } from '../hooks/useDebouncer';

interface IProps {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}

const SearchInput = ({ style, onDebounce }: IProps) => {
  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebouncer(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textBg}>
        <TextInput
          placeholder='Search Pokemon'
          placeholderTextColor='grey'
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name='search-outline' color='grey' size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  textBg: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    top: Platform.OS === 'ios' ? 0 : 2,
    color: 'black',
  },
});

export default SearchInput;
