import * as React from 'react';
import { useState } from 'react';
import { Image, Text, TextInput, Pressable, View, Alert } from 'react-native';
import { buttons, icon, styles, text } from '../../styles';

export const LoginScreen = ({ navigation }) => {
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
          <Image style={icon.loginIcon} source={require('../../assets/ic_launcher_foreground.png')}/>
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