import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import registerScreens from './screens';
import configureStore from './store';

const store = configureStore();

persistStore(store, null, () => {
  registerScreens(store, Provider);

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'barcodescanner.StartingScreen',
      title: 'Projects',
      label: 'Projects'
    }
  });
});
