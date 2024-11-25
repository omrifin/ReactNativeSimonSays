import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40, // Makes the button circular
  },
  button0: {
    top: 0,
    left: '50%',
    marginLeft: -40, // Center horizontally
  },
  button1: {
    top: '50%',
    right: 0,
    marginTop: -40, // Center vertically
  },
  button2: {
    bottom: 0,
    left: '50%',
    marginLeft: -40, // Center horizontally
  },
  button3: {
    top: '50%',
    left: 0,
    marginTop: -40, // Center vertically
  },
  base: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b5921d',
  },

});

export type ButtonStylesKeys = keyof typeof ButtonStyles;
export default ButtonStyles;
