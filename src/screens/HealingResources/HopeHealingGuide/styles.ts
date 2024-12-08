import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  drawerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerLabelText: {
    fontSize: 20,
    color: '#444',
  },
  selectedDrawerLabelText: {
    fontWeight: 'bold',
    color: '#444',
    fontSize: 20,
  },
  subsectionLabelText: {
    color: '#444444BF',
    opacity: 0.75,
    paddingLeft: 32,
    fontSize: 18,
  },
  navLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    // borderRadius: 10,
    // backgroundColor: '#E6EAEF',
  },
});
