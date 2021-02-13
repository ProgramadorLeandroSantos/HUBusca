import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../screens/LandingScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createStackNavigator();

export default () => (
   <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="LandingScreen" component={ LandingScreen }/>
        <Stack.Screen name="PerfilScreen" component={ PerfilScreen }/>
    </Stack.Navigator>
);