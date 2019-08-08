import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    { Main, Cart },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerTitleStyle: 'bold',
        headerStyle: {
          backgroundColor: '#141419',
        },
      },
      // cardStyle: {
      //   backgroundColor: 'transparent',
      //   opacity: 1,
      // },
      // transitionConfig: () => ({
      //   containerStyle: {
      //     backgroundColor: 'transparent',
      //   },
      // }),
    }
  )
);

export default Routes;
