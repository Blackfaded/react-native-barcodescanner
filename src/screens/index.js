import { Navigation } from 'react-native-navigation';

import StartingScreen from './StartingScreen/StartingScreen';
import Camera from './Camera/Camera';
import AddMenu from './AddMenu/AddMenu';
import Settings from './Settings/Settings';
import Webview from './Webview/Webview';

export default  (store, Provider) => {
  // Register Screens
  Navigation.registerComponent('barcodescanner.StartingScreen', () => StartingScreen, store, Provider);
  Navigation.registerComponent('barcodescanner.Camera', () => Camera, store, Provider);
  Navigation.registerComponent('barcodescanner.AddMenu', () => AddMenu, store, Provider);
  Navigation.registerComponent('barcodescanner.Settings', () => Settings, store, Provider);
  Navigation.registerComponent('barcodescanner.Webview', () => Webview, store, Provider);
};
