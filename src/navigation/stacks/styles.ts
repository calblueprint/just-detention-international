import { StyleSheet } from 'react-native';
import { colors } from 'src/styles/colors';

export default StyleSheet.create({
  backContainer: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
  },

  backText: {
    fontSize: 17,
    color: colors.grey,
  },
});
