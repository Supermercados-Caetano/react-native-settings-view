// Depdendencies
import { StyleSheet } from 'react-native';

/**
 * @file styles.js
 * @author Daniel Mejia.
 * @description Styles definition for component.
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  containerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  title: {
    flex: 1,
    backgroundColor: 'red',
    textAlign: 'left',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    flexWrap: 'wrap',
  },
});

export default styles;
