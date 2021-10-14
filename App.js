import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, Button, Image, Text, TextInput, Pressable,  View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const AuthContext = createContext ({ hasUser: false, setUser: () => {} });

const Stack = createStackNavigator();


const LoginScreen = ({ navigation }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButtonDouble} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.titleText}>
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

        <Pressable style={styles.bodyButton} onPress={() => {username === 'mtxlogin' && password === 'mtxlogin'? navigation.navigate('Authorized')
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
          <Text style={styles.titleText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const MainScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButtonDouble} onPress = {() => navigation.navigate('Login')}>
          <Image style={styles.profileIcon} source={require('./assets/login.png')}/>
        </Pressable>
      </View>
        <View style={styles.body}>
          <Text style={styles.mainText}>
            Map Goes Here
          </Text>
        </View>
    </View>
  );
};

const AuthMainScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButtonDouble} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.titleText}>
            Logout
          </Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={styles.mainText}>
            Admin Map Goes Here
        </Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#0065BD',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  headerButton: {
    width: 45,
    height: 35,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#0065BD',
  },
  headerButtonDouble: {
    width: 70,
    height: 35,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#0065BD',
  },
  bodyButton: {
    width: 100,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#0065BD',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
  },
  loginImage: {
    height: 200,
    width: 200,
  },
  mainText: {
    fontSize: 30,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
