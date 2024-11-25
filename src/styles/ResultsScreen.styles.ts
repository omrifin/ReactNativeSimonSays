import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0f0f0f',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#b5921d',
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#b5921d',
  },
  listHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#b5921d',
  },
  resultItem: {
    fontSize: 18,
    paddingVertical: 5,
    color: '#b5921d',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  textInput: {
    width: '80%',
    padding: 10,
    color: '#b5921d',
    marginBottom: 20,
    borderRadius: 5,
  },
});
