import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, Button, Image, Text, View, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const AuthContext = createContext ({
  hasUser: false,
  setUser: () => {},
});

const LoginScreen = () => {
  const { setUser } =useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Button
        title='login'
        color='#fff'
        onPress = {() => setUser(true)}
      />
      </View>
    </View>
  );
};

const MainScreen = () => {
  const { setUser } = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
        title='logout'
        color='#fff'
        onPress = {() => setUser(false)}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.titleText}>
          Map Goes Here
        </Text>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const { hasUser } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      { hasUser ?
        <Stack.Screen name='Main' component={MainScreen} /> :
        <Stack.Screen name='Login' component={LoginScreen}/> 
      }
    </Stack.Navigator>
  )
};

const App = () => {
  const [hasUser, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ hasUser, setUser }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#0065BD',
    alignItems: 'center',
  },
  menu: {
    width: '7.5%',
    height: '7.5%',
    backgroundColor: '#0065BD',
  },
  titleText: {
    fontSize: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
