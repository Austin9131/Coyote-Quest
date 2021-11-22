import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import * as React from 'react';
import { useState } from 'react';
import { maps, text } from '../../../styles';
import { TextInput } from 'react-native-gesture-handler';

export const MainMap = () => {
  const [ search, setSearch ] = useState('');

  state = {
    markers:[
      { id: 'UH', name: 'University Hall', latitude: 34.1804275762316, longitude: -117.3242646204980 },
      { id: 'SUE', name: 'Student Union East', latitude: 34.1804453275725, longitude: -117.3231863724740 },
      { id: 'SUS', name: 'Student Union South', latitude: 34.1813062631255, longitude: -117.3234599577940 },
    ]
  }
    return(
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
              { latitude: 34.188731, longitude: -117.330944 },
              { latitude: 34.176092, longitude: -117.313079 })}}
            minZoomLevel = {14.5}
          >
            <TextInput
              style = {text.input}
              autoCapitalize='none'
              autoCorrect= {false}
              onChangeText={(search) => setSearch(search)}
              placeholder='search'
            />
            {this.state.markers.map(( marker, index ) => (
              <MapView.Marker
                key={index}
                title={marker.name}
                coordinate={{ latitude: marker.latitude ,longitude: marker.longitude }}
              />
              ))}
          </MapView>
    );
};