import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    padding: '5%',
  },
  text: {
    fontFamily: 'Roboto Serif',
    color: '#444',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    color: '#444',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#EDF0F5',
    width: 125,
    height: 43,
    columnGap: 20,
  },
  buttonText: {
    color: '#4C4C4C',
    fontSize: 16,
    fontWeight: 500,
  },
});
