import MapView from 'react-native-maps';
import * as React from 'react';
import { createContext, useContext } from 'react';
import { Text, Pressable, View } from 'react-native';
import { buttons, maps, styles, text  } from '../../styles';

//This is the Authorized User Main Screen, displays additional layers to assist faculty members
//accessed through entering a permited login on the login screen

export const AuthContext = createContext ({ hasUser: false, setUser: () => {} });

export const AuthMainScreen = ({ navigation }) => {
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
          <MapView 
            ref={(ref) => this.mapRef = ref }
            style={maps.main}
            provider='google'
            showsUserLocation={true}
            region={{
              latitude: 34.181358,
              longitude: -117.322,
              latitudeDelta: 0.005,
              longitudeDelta: 0.017,
            }}
            onMapReady={() => {this.mapRef.setMapBoundaries( 
              { latitude: 34.192742, longitude: -117.329707 },
              { latitude: 34.176909, longitude: -117.313136 })}}
            minZoomLevel = {14.5}
          />
        </View>
      </View>
    );
  };