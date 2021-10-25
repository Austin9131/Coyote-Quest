import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { Image, Text, TextInput, Pressable, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { buttons, icon, maps, styles, text  } from './styles';

export const AuthContext = createContext ({ hasUser: false, setUser: () => {} });

const Stack = createStackNavigator();


const LoginScreen = ({ navigation }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={buttons.back} onPress={() => navigation.navigate('Main')}>
          <Text style={text.backText}>
             Back
          </Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <Image style={icon.loginIcon} source={require('./assets/ic_launcher_foreground.png')}/>
        <TextInput
          style = {text.input}
          autoCapitalize='none'
          autoCorrect= {false}
          onChangeText={(username) => setUsername(username)}
          placeholder='username'
        />
        <TextInput
          style = {text.input}
          autoCapitalize='none'
          autoCorrect= {false}
          onChangeText={(password) => setPassword(password)}
          placeholder='password'
        />

        <Pressable style={buttons.bodyButton} onPress={() => {username === 'mtxlogin' && password === 'mtxlogin'? navigation.navigate('Authorized')
          : Alert.alert(
            'Error', 'Invalid User Login',
            [
              {
                text: 'Cancel',
                onPress: () => navigation.navigate('Main')
              },
              {
                text: 'Try Again'
              }
            ]
          )}}>
          <Text style={text.titleText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const MainScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={buttons.headerButtonDouble} onPress = {() => navigation.navigate('Login')}>
          <Image style={icon.profileIcon} source={require('./assets/login.png')}/>
        </Pressable>
      </View>
        <View style={styles.body}>
          <MapView style={maps.main} initialRegion={{
              latitude: 34.181358,
              longitude: -117.322,
              latitudeDelta: 0.005,
              longitudeDelta: 0.017, }}>
          </MapView>
        </View>
    </View>
  );
};

const AuthMainScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={buttons.headerButtonDouble} onPress={() => navigation.navigate('Main')}>
          <Text style={text.titleText}>
            Logout
          </Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <MapView style={maps.main} 
            initialRegion={{
              latitude: 34.181358,
              longitude: -117.322,
              latitudeDelta: 0.005,
              longitudeDelta: 0.017,
            }}
        />
      </View>
    </View>
  );
};

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

const App = () => {

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
};

export default App;