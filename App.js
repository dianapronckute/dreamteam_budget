import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterExpenses from './screens/RegisterExpenses';
import VisualiseBudget from './screens/VisualiseBudget';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RegisterExpenses"
          component={RegisterExpenses}
          options={{ title: 'Register expens start' }}
        />
        <Stack.Screen name="VisualiseBudget" component={VisualiseBudget} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack