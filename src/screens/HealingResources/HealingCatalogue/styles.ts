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
  },
  themeButton: {
    backgroundColor: '#e8e8e8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '90%',
    height: 40,
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
