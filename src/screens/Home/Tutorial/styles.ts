import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    paddingBottom: 20,
  },

  tutorialBox: {
    borderColor: '#e8e8e8',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    width: '70%',
    height: '80%',
    alignItems: 'center',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    borderRadius: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '70%',
    bottom: 20,
  },

  button: {
    backgroundColor: '#E6EAF1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 120,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  leftButtonWrapper: {
    width: 120,
    alignItems: 'flex-start',
  },

  rightButtonWrapper: {
    width: 120,
    alignItems: 'flex-end',
  },


});
