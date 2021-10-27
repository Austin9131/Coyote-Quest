import * as React from 'react';
import { Image, Pressable, View } from 'react-native';
import { buttons, icon, styles } from '../../styles';
import { MainMap } from '../components/MainMap';

//main screen is what is first seen after the app opens and holds the base map
//the profile icon button will take you to the login screen


export const MainScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={buttons.headerButtonDouble} onPress = {() => navigation.navigate('Login')}>
          <Image style={icon.profileIcon} source={require('../../assets/login.png')}/>
        </Pressable>
      </View>
        <View style={styles.body}>
          <MainMap/>
        </View>
    </View>
  );
};
