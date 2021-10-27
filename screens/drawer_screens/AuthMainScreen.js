import * as React from 'react';
import { createContext, useContext } from 'react';
import { Text, Pressable, View } from 'react-native';
import { buttons, styles, text  } from '../../styles';
import { AuthMap } from '../components/Maps/AuthMap';

//This is the Authorized User Main Screen, displays additional layers to assist faculty members
//accessed through entering a permited login on the login screen

//export const AuthContext = createContext ({ hasUser: false, setUser: () => {} }); old auth method

export const AuthMainScreen = ({ navigation }) => {
  //const { setUser } = useContext(AuthContext); 
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
        <AuthMap/>
      </View>
    </View>
  );
};