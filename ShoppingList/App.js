import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    // needs to use React Native Components
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
