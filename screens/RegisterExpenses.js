import React from 'react';
import {View, Button, Text,SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import VisualiseBudget from './VisualiseBudget';
//import {Dropdown } from 'react-native-material-dropdown';
import { LogBox } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { NavigationContainer } from '@react-navigation/native';
 


const RegisterExpenses = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    
    <View style={styles.container}>
     
     <Button style={{
        backgroundColor: 'blue',position: 'absolute',
        top: 10,}}
      title= "Navigate to Visualise Budget"
      onPress={() =>
        navigation.navigate('VisualiseBudget', { name: 'VisualiseBudget' })
      }>
      
    </Button>

      <TouchableOpacity
      style={styles.button} >
      <Text style={{ fontSize: 50, color: 'white' }}>+</Text>
       </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    <TouchableOpacity
      style={styles.button} >
      <Text style={{ fontSize: 50, color: 'white' }}>-</Text>
       </TouchableOpacity>
       
       <TouchableOpacity
      style={{width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',backgroundColor: 'blue',position: 'absolute',
        margin: 16,
        bottom: 10,}} >
      <Text style={{ fontSize: 50, color: 'white' }}>SAVE</Text>
       </TouchableOpacity>
  

  </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 
   },
   button:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'blue',
   },
});
  


export default RegisterExpenses