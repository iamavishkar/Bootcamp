import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigation/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;