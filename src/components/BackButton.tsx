import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const BackButton = ({ onPress, style }: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles, style]}>
      <Icon name='chevron-back-outline' color='white' size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BackButton;
