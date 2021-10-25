import MapView from 'react-native-maps';
import * as React from 'react';
import { createContext, useContext } from 'react';
import { Text, Pressable, View } from 'react-native';
import { buttons, maps, styles, text  } from '../../styles';

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