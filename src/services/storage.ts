import AsyncStorage from '@react-native-async-storage/async-storage';

const RESULTS_KEY = 'game_results';

export const saveResult = async (name: string, score: number) => {
  try {
    const results = await getResults();
    const newResults = [...results, { name, score }].sort((a, b) => b.score - a.score).slice(0, 10);
    await AsyncStorage.setItem(RESULTS_KEY, JSON.stringify(newResults));
  } catch (error) {
    console.error('Failed to save results:', error);
  }
};

export const getResults = async (): Promise<{ name: string; score: number }[]> => {
  try {
    const storedResults = await AsyncStorage.getItem(RESULTS_KEY);
    return storedResults ? JSON.parse(storedResults) : [];
  } catch (error) {
    console.error('Failed to fetch results:', error);
    return [];
  }
};