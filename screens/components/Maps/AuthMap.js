import MapView from 'react-native-maps';
import * as React from 'react';
import { maps } from '../../../styles';

export const AuthMap = () => {
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
          />
    );
};