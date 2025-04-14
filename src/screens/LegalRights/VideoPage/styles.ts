import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    padding: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  videoAndTitle: {
    alignItems: 'center',
    gap: 10,
    width: '80%',
  },
  title: {
    color: '#444',
    fontFamily: 'Inter',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 700,
    textAlign: 'left',
  },
  video: {
    backgroundColor: 'rgba(0, 0, 0, 0.18)',
    width: '87%',
    aspectRatio: 928 / 521,
  },
  captionButtons: {
    display: 'flex',
    gap: 3,
    flexDirection: 'row',
    borderRadius: 15,
    width: 100,
    height: 43,
    backgroundColor: '#EDF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 10px 1px rgba(0, 0, 0, 0.10)',
  },
  noButton: {
    opacity: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4C4C4C',
    fontFamily: 'Inter',
  },
  arrows: {
    width: 12,
    height: 12,
  },

  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'left',
    color: '#333',
  },

  videoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10, // match Figma radius
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  navButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '87%',
  },
});
