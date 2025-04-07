import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  themesContainer: {
    paddingTop: 30,
    height: '100%',
    width: '20%',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
    backgroundColor: '#F7F9FC',
  },
  themeButton: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  themeButtonText: {
    fontSize: 18,
    color: '#444',
  },
  resourcesContainer: {
    paddingTop: 30,
    width: '100%',
    height: '100%',
    borderLeftColor: '#e8e8e8',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    rowGap: 10,
    columnGap: 10,
    borderLeftWidth: 1,
  },
  selectedThemeButton: {
    backgroundColor: '#E6EAF1',
    borderColor: '#E6EAF1',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
  selectedButtonText: {
    fontSize: 18,
    color: '#444',
    fontWeight: '600',
  },

  leftPanel: {
    flexDirection: 'column',
    width: '23%',
    backgroundColor: '#F7F9FC',
    paddingHorizontal: 10,
    rowGap: 30, // distance between select resource level and resource type
    paddingTop: 20, // distance from top of left panel
  },
  rightPanel: {
    display: 'flex',
    width: '80%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: 40,
  },
  themeHeader: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#F3F3F3',
    borderColor: '#D9D9D9',
    borderWidth: 1.5,
    height: 50,
  },
  themeHeaderText: {
    fontSize: 20,
    marginLeft: 15,
  },
  cardsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  resourceContainer: {
    flexDirection: 'column',
    margin: '1.1%',
    width: '31%',
  },
  resourceCard: {
    height: 250,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
  resourceText: {
    fontSize: 16,
    margin: 10,
    color: '#7839dj',
  },
});
