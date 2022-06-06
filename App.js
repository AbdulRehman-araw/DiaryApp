import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lock_Screen from './src/screens/Lock_Screen';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Lock_Screen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
