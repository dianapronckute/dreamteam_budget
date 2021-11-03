import React from 'react';
import {View, Button, Text} from 'react-native'
import VisualiseBudget from './VisualiseBudget';

const RegisterExpenses = ({ navigation }) => {

    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style ={{ fontSize: 30}}>Reg expenses please</Text>
        <Button onPress = {()=> navigation.navigate(VisualiseBudget)} title = 'Next screen2'>
        </Button>
        </View>
      
      );
}

export default RegisterExpenses