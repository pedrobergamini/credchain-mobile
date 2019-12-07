import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Marketplace from './screens/Marketplace';
import Payments from './screens/Payments';
import Contacts from './screens/Contacts';

export default function createRouter() {
  return createAppContainer(
    createBottomTabNavigator(
      {
        Marketplace,
        Payments,
        Contacts,
      },
      {
        resetOnBlur: true,
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#FFF',
          inactiveTintColor: 'rgba(255,255,255,0.6)',
          style: {
            height: 60,
            backgroundColor: '#7225ff',
          },
          labelStyle: {
            fontSize: 18,
          },
        },
        initialRouteName: 'Payments',
      }
    )
  );
}
