import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    // need to use React Native Components
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;