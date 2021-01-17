import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    {
      id: uuidv4(), 
      text: 'apples',
    },
    {
      id: uuidv4(), 
      text: 'oranges',
    },
    {
      id: uuidv4(), 
      text: 'lemons',
    },
    {
      id: uuidv4(), 
      text: 'grapes',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'Error, No Item Entered',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems];
      });
    }
  };

  return (
    // needs to use React Native Components
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem 
          item={item} 
          deleteItem={deleteItem} />
        )}
        />
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
