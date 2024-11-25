import { StyleSheet } from 'react-native';

const ScreenStyles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#b5921d',
  },
  circle: {
    width: 250, // Diameter of the circular layout
    height: 250,
    borderRadius: 125, // Half of the diameter
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Allows child buttons to use absolute positioning
  },
  emojiContainer: {
    height: 80, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  robotEmoji: {
    fontSize: 40, 
  },
});

export default ScreenStyles;
