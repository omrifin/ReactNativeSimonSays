import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import ButtonStyles, { ButtonStylesKeys } from '../styles/Button.styles';

interface SimonButtonProps {
  color: string; // Button color
  sound: string; // Button sound
  onPress?: () => void; // Click handler
  style?: StyleProp<ViewStyle>; // Additional styles
  disabled?: boolean; // Disable state
  highlighted?: boolean; // Highlight state
  buttonIndex: number; // Button index for positioning
}

const SimonButton: React.FC<SimonButtonProps> = ({
  color,
  sound,
  onPress,
  style,
  disabled,
  highlighted,
  buttonIndex,
}) => {
  const buttonStyles = [
    ButtonStyles.circleButton,
    ButtonStyles[`button${buttonIndex}` as ButtonStylesKeys], // Dynamic position
    {
      backgroundColor: color,
    
      opacity: highlighted ? 0.5 : 1, 
    },
    style,
    
    //disabled && { opacity: 0.5 }, // Dim when disabled
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
    />
  );
};

export default SimonButton;
