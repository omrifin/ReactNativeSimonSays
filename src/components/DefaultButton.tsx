import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import ButtonStyles from '../styles/Button.styles';

interface DefaultButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; // Allow passing custom styles
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[ButtonStyles.base, style]} onPress={onPress}>
      <Text style={ButtonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;