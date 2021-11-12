import * as React from 'react';
import { Image, Button, StyleSheet, TextInput, View, Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}> 
    <View style={{marginLeft: 250}}>
          <Button
        title= '|||'
        onPress={() =>
          navigation.navigate('Menu', { name: 'Menu' })
        }
      /> </View>
      <Text style = {styles.logo} >Welcome to Expenso</Text>
      <Image style={styles.box} source={require('./assets/budget.png')} />
      <Text>Manage your finance with budget planning app and become a millionare...</Text>
      <Text style={styles.innerText} >Monthly overall budget: 500,00 EUR</Text>
      <Text style={styles.innerText} >Already spent: 300,00 EUR</Text>
      <Text style={styles.innerText} >Budget left: 200,00 EUR</Text>
    </View>
  );
}


function MenuScreen({navigation}){
  return (
    <View style={styles.look}> 
    <View style={{marginVertical:100}}>
    <View style={{marginVertical:10}}>
     <Button
        title="Expense categories"
        color = 'black'
        onPress={() =>
          navigation.navigate('Expense categories', { name: 'Expense categories' })
        }
      /> </View>
      <View style={{marginVertical:10}}>
      <Button
        title="Register expense"
        color = 'black'
        onPress={() =>
          navigation.navigate('Register expense', { name: 'Register expense' })
        }
      /> </View>
      <View style={{marginVertical:10}}>
      <Button
        title="Visualise budget"
        color = 'black'
        onPress={() =>
          navigation.navigate('Visualise budget', { name: 'Visualise budget' })
        }
      /> </View>
      <View style={{marginVertical:10}}>
      <Button
        title="Manage savings"
        color = 'black'
        onPress={() =>
          navigation.navigate('Manage savings', { name: 'Manage savings' })
        }
      /> </View>
      <View style={{marginVertical:10}}>
      <Button
        title="About"
        color = 'black'
        onPress={() =>
          navigation.navigate('About', { name: 'About' })
        }
      /></View>
      </View>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Expenso"
          component={WelcomeScreen}
          options={{ title: 'Expenso', 
          headerStyle: { backgroundColor: 'blue' }, }}
          
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({ route }) => ({ title: route.params.name, 
          headerStyle: { backgroundColor: 'blue' },})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

  const _handleSearch = () => console.log('Searching');

const styles = StyleSheet.create({
    box: {
      width: 200,
      height: 200,
      borderRadius: 100,
  },
    container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 0,
  },
  look: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'flex-start',
  },
  innerText: {
    color: 'red',
    justifyContent: 'center'
  },
  logo: {
    height: 20,
    color: 'blue'
  }
});



