import * as React from 'react';
import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../drawer_screens/LoginScreen';
import { MainScreen } from '../drawer_screens/MainScreen';
import { AuthMainScreen, AuthContext } from '../drawer_screens/AuthMainScreen';

export const Stack = createStackNavigator();

export const AppNavigator = () => {
  const { hasUser } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Authorized' component={AuthMainScreen}/>
    </Stack.Navigator>
  );
};