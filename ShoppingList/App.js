import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'apples'},
    {id: uuid(), text: 'oranges'},
    {id: uuid(), text: 'lemons'},
    {id: uuid(), text: 'grapes'}
  ]);

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
