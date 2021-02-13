import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stack/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainStack/>
    </NavigationContainer>
  );
}
