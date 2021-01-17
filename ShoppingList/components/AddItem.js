import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title}) => {
  return (
   <View>
       <TextInput placeholder='Add Item...' style={StyleSheet.input} />
       <TouchableOpacity styles={styles.btn}>
        <Text styles={styles.btnText}><Icon name="plus" size={20} /> Add Item</Text>
       </TouchableOpacity>
   </View>
  );
};

const styles = StyleSheet.create({
    input:{
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bD8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center,'
    },
});


export default AddItem;