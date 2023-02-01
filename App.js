import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import StackNavigator from './src/router/NavigationContainer';
import { Provider } from 'react-redux';
import { store } from './src/store/config/store';


const App: () => Node = () => {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaStyle}>
          <StatusBar
            backgroundColor={'#111111'}
          />
          <StackNavigator />
        </SafeAreaView>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: 'black',
  }
});

export default App;
