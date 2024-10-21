import React from 'react';
import NavigationRouter from './router/router';
import {Provider} from 'react-redux';
import store from './store/history.store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <NavigationRouter />
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;
