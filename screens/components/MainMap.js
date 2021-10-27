import MapView from 'react-native-maps';
import * as React from 'react';
import { maps } from '../../styles';

export const MainMap = () => {
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
              { latitude: 34.192742, longitude: -117.329707 },
              { latitude: 34.176909, longitude: -117.313136 })}}
            minZoomLevel = {14.5}
          />
    );
};