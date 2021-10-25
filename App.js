import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { StyleSheet, Button, Image, Text, TextInput, Pressable, View, Alert, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { stylesTest, buttons, styleText } from './styles'

export const AuthContext = createContext ({ hasUser: false, setUser: () => {} });

const Stack = createStackNavigator();


const LoginScreen = ({ navigation }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <View style={stylesTest.container}>
      <View style={styles.header}>
        <Pressable style={buttons.back} onPress={() => navigation.navigate('Main')}>
          <Text style={styleText.backText}>
             Back
          </Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <Image style={styles.loginImage} source={require('./assets/ic_launcher_foreground.png')}/>
        <TextInput
          style = {styles.input}
          autoCapitalize='none'
          autoCorrect= {false}
          onChangeText={(username) => setUsername(username)}
          placeholder='username'
        />
        <TextInput
          style = {styles.input}
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
          <Text style={styleText.titleText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const MainScreen = ({ navigation }) => {
  return(
    <View style={stylesTest.container}>
      <View style={styles.header}>
        <Pressable style={buttons.headerButtonDouble} onPress = {() => navigation.navigate('Login')}>
          <Image style={styles.profileIcon} source={require('./assets/login.png')}/>
        </Pressable>
      </View>
        <View style={styles.body}>
          <MapView style={styles.map} 
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

const AuthMainScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);

  return(
    <View style={stylesTest.container}>
      <View style={styles.header}>
        <Pressable style={buttons.headerButtonDouble} onPress={() => navigation.navigate('Main')}>
          <Text style={styleText.titleText}>
            Logout
          </Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <MapView style={styles.map} 
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

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: '#fff',
  }, */
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#0065BD',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  backIcon: {
    flex: 1,
    height: 10,
    width: 5,
  },
  /*backText: {
    flex: 2,
    height: 20,
    fontSize: 20,
    color: '#fff', 
  },*/
  profileIcon:{
    width: 30,
    height: 30,
    borderRadius: 5,
  },
/*  backButton: {
    width: 120,
    height: 35,
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#0065BD',
  },*/
  /* headerButtonDouble: {
    width: 120,
    height: 35,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#0065BD',
  },
  */
  /*bodyButton: {
    width: 100,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#0065BD',
    alignItems: 'center', 
    justifyContent: 'center',
  },*/
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  /*titleText: {
    fontSize: 20,
    color: '#fff',
  },*/
  loginImage: {
    height: 200,
    width: 200,
  },
  /*mainText: {
    fontSize: 30,
  },*/
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
