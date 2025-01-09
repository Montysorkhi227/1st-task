/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
// import Login from './src/screens/Login';
import StackNaviagtion from './src/naviagtion/StackNaviagtion';
// import App from './src/screens/Instagramhomepage';

AppRegistry.registerComponent(appName, () => StackNaviagtion);

