import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    padding: 30,
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '25%',
    paddingRight: 20,
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  filterButton: {
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15,
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});
