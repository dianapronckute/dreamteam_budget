import React , {useState}from 'react';
import {View, Button, Text,SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Component} from 'react-native'
import VisualiseBudget from './VisualiseBudget';

import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
 




const RegisterExpenses = ({ navigation }) => {
  //const [number, onChangeText] = React.useState(count);
  const [count, setCount] = useState(0);
  const [number, onChangeNumber] = React.useState(null);
  
  const onPress = () => setCount(prevCount => prevCount + 1);
  const onPress2 = () => setCount(prevCount => prevCount - 1);

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
      onPress={onPress}
      style={styles.button} >
      <Text style={{ fontSize: 50, color: 'white' }}>+</Text>
       </TouchableOpacity>

       <Text
       style= {{ height: 40,
    width: 200,
    margin: 20,
    borderWidth: 1,
   padding: 0,fontSize: 20, color: 'red'}}>{count}</Text>
   

    <TouchableOpacity
    onPress={onPress2}
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