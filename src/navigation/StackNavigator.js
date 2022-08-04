import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen';
import LastScreen from '../screens/LastScreen';
import FormScreen from '../screens/FormScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          opacity: 1,
        },
      }}
      initialRouteName={IntroScreen}>
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LastScreen"
        component={LastScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FormScreen"
        component={FormScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
