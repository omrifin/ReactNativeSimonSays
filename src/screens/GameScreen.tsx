import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import DefaultButton from '../components/DefaultButton';
import SimonButton from '../components/SimonButton';
import { SimonColors } from '../consts/SimonColors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/AppNavigator';
import {
  addSimonColor,
  setUserInput,
  resetGame,
  setScore,
  setGameStarted,
} from '../redux/gameActions';
import Sound from 'react-native-sound';
import ScreenStyles from '../styles/Screen.styles';

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

const GameScreen: React.FC = () => {
  const navigation = useNavigation<GameScreenNavigationProp>();
  const dispatch = useDispatch();
  const simonSequence = useSelector((state: RootState) => state.game.simonSequence);
  const userInput = useSelector((state: RootState) => state.game.userInput);
  const score = useSelector((state: RootState) => state.game.score);
  const gameStarted = useSelector((state: RootState) => state.game.gameStarted);

  const [isPlayback, setIsPlayback] = useState(false);
  const [highlightedColor, setHighlightedColor] = useState<SimonColors | null>(null);

  const colorSoundMap: Record<SimonColors, string> = {
    [SimonColors.Red]: 'diwuwaba.mp4',
    [SimonColors.Blue]: 'dlobablo.mp4',
    [SimonColors.Green]: 'lapatapupi.mp4',
    [SimonColors.Yellow]: 'scapa.mp4',
  };

  useEffect(() => {
    Sound.setCategory('Playback');
  }, []);

  const startGame = () => {
    dispatch(resetGame());
    setIsPlayback(false);
    setHighlightedColor(null);
    dispatch(setGameStarted(true));
    addRandomColor(); // Start with one button
  };

  const addRandomColor = () => {
    const colors = Object.values(SimonColors) as SimonColors[];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dispatch(addSimonColor(randomColor)); // Add one random color to the sequence
  };

  const playSimonSequence = () => {
    setIsPlayback(true);
    let i = 0;

    const interval = setInterval(() => {
      const currentColor: SimonColors = simonSequence[i];
      setHighlightedColor(currentColor);

      const sound = new Sound(colorSoundMap[currentColor], Sound.MAIN_BUNDLE, (error) => {
        if (!error) sound.play(() => sound.release());
      });

      setTimeout(() => setHighlightedColor(null), 500); // Clear highlight after 500ms

      i++;
      if (i >= simonSequence.length) {
        clearInterval(interval);
        setIsPlayback(false); // Re-enable user interaction
      }
    }, 1000);
  };

  const handleSimonPress = (color: SimonColors) => {
    if (isPlayback) return;

    const updatedInput = [...userInput, color];
    dispatch(setUserInput(updatedInput));

    const isCorrect = updatedInput.every((input, index) => input === simonSequence[index]);
    if (!isCorrect) {

      dispatch(setScore(simonSequence.length - 1));
      dispatch(resetGame());
      navigation.navigate('Results', { score: simonSequence.length - 1 });
    } else if (updatedInput.length === simonSequence.length) {
      // User finished the sequence correctly
      dispatch(setScore(simonSequence.length)); // Update the score
      dispatch(setUserInput([])); // Reset user input
      addRandomColor(); // Add one more color
    }
  };

  useEffect(() => {
    if (gameStarted) playSimonSequence();
  }, [simonSequence]);

  return (
    <View style={ScreenStyles.gameScreen}>
      {gameStarted && (
        <>
          <Text style={ScreenStyles.text}>Score: {score}</Text>
          <View style={ScreenStyles.emojiContainer}>
          {isPlayback && <Text style={ScreenStyles.robotEmoji}>🤖</Text>}
          </View>
        </>
      )}
      {gameStarted ? (
        <View style={ScreenStyles.circle}>
          {Object.values(SimonColors).map((color, index) => (
            <SimonButton
              key={index}
              color={color}
              sound={colorSoundMap[color]}
              onPress={() => handleSimonPress(color)}
              disabled={isPlayback}
              highlighted={highlightedColor === color}
              buttonIndex={index}
            />
          ))}
        </View>
      ) : (
        <DefaultButton title="Start Game" onPress={startGame} />
      )}
    </View>
  );
};

export default GameScreen;
