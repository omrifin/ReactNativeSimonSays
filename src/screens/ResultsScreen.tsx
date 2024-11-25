import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../services/AppNavigator';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getResults, saveResult } from '../services/storage';
import { styles } from '../styles/ResultsScreen.styles';

type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;
type ResultsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Results'>;

const ResultsScreen = () => {
  const route = useRoute<ResultsScreenRouteProp>();
  const navigation = useNavigation<ResultsScreenNavigationProp>();
  const { score } = route.params;

  const [modalVisible, setModalVisible] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [results, setResults] = useState<Array<{ name: string; score: number }>>([]);

  useEffect(() => {
    const fetchResults = async () => {
      const storedResults = await getResults();
      setResults(storedResults);
    };
    fetchResults();
  }, []);

  const handleSave = async () => {
    if (playerName.trim()) {
      const updatedResults = [
        ...results,
        { name: playerName, score },
      ]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10); // Keep only top 10 results
        await saveResult(playerName, score);
      setResults(updatedResults);
      setModalVisible(false);
    }
  };

  const handleStartNewGame = () => {
    navigation.navigate('Main'); // Navigate back to the GameScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.scoreText}>Your Score: {score}</Text>

      {/* Display the list of top results */}
      <FlatList
        data={results}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => (
          <Text style={styles.resultItem}>
            {index + 1}. {item.name}: {item.score}
          </Text>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Top 10 Results</Text>
        )}
      />

      <Button title="Start New Game" onPress={handleStartNewGame} />

      {/* Modal for entering the player's name */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Enter Your Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={playerName}
            onChangeText={setPlayerName}
          />
          <Button title="Save" onPress={handleSave} />
        </View>
      </Modal>
    </View>
  );
};



export default ResultsScreen;