import MapView from 'react-native-maps';
import * as React from 'react';
import { Image, Pressable, View } from 'react-native';
import { buttons, icon, maps, styles } from '../../styles';

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
          <MapView 
            style={maps.main}
            provider='google' 
            region={{
              latitude: 34.181358,
              longitude: -117.322,
              latitudeDelta: 0.005,
              longitudeDelta: 0.017, }}>
          </MapView>
        </View>
    </View>
  );
};