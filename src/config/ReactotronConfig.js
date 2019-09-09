/**
 * Initialize the Reactotron debugger
 * on development environments.
 *
 * OBS: If the connection fails try running:
 * > adb reverse tcp:9090 tcp:9090
 *
 */

import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // Initialize Reactotron
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  // Assign Reactotron to the console object
  console.tron = tron;

  // Clear timeline on App refresh
  tron.clear();
}
