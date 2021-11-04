import * as React from 'react';
import { Image, Pressable, View } from 'react-native';
import { buttons, icon, styles } from '../../styles';
import { MainMap } from '../components/Maps/MainMap';
import { AntDesign } from '@expo/vector-icons'; 

//main screen is what is first seen after the app opens and holds the base map
//the profile icon button will take you to the login screen


export const MainScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={buttons.headerButtonDouble} onPress = {() => navigation.navigate('Login')}>
          <AntDesign name="user" size={30} color="white" />
        </Pressable>
      </View>
        <View style={styles.body}>
          <MainMap/>
        </View>
    </View>
  );
};
