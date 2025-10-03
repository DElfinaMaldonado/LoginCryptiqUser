import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import CryptiqAbout from './screens/CryptiqAbout';

export type RootStackParamList = {
  MainScreen: undefined;
  CryptiqAbout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CryptiqAbout" component={CryptiqAbout} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
