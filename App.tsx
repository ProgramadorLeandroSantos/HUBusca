import { StatusBar } from 'expo-status-bar';
import React from 'react';

import MainStack from './src/stack/MainStack';

export default function App() {
  return (
    <>
      <MainStack/>
      <StatusBar style="auto" />
    </>
  );
}