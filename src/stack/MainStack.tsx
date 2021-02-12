import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import LandingScreen from '../screens/LandingScreen';
import PerfilScreen from '../screens/PerfilScreen';

const MainStack = createAnimatedSwitchNavigator(
  {
    LandingScreen,
    PerfilScreen,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(MainStack);
