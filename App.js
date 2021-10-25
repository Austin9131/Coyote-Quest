import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './screens/components/NavigationDrawerHeader';

//Main Aplication Runs the App Navigator created in NavigationDrawerHeader

const App = () => {

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
};

export default App;