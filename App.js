// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResturantScreen from './screens/ResturantScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ResturantScreen" component={ResturantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;