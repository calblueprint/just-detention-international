import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  leftPanel: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '25%',
    marginLeft: 10,
    backgroundColor: '#f7f9fc',
    marginRight: 10,
    paddingLeft: 10,
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  filterButton: {
    backgroundColor: '#f7f9fc',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f7f9fc',
  },
  selectedFilterButton: {
    backgroundColor: '#e8e8e8',
    borderColor: '#e8e8e8',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'flex-start',
    borderWidth: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#444',
  },
});
