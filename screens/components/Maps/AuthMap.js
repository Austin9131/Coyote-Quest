import MapView from 'react-native-maps';
import  Polyline  from 'react-native-maps';
import * as React from 'react';
import { useState } from 'react';
import { maps } from '../../../styles';

export const AuthMap = () => {
  state = {
    polylines: [
      { latling: [{latitude: 34.18725753, longitude: -117.3279266}, {latitude: 34.18701043 , longitude: -117.3279365}] },
      { latling: [{latitude: 34.18701043, longitude: -117.3279365}, {latitude: 34.186198 , longitude: -117.3300622}]}

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
          {this.state.polylines.map( polyline => (
            <MapView.Polyline
              coordinates = {polyline.latling}
              strokeColor="#000"
              strokeWidth={4}
              lineDashPattern={[1]}
              lineCap = 'square'
            />
          ))}
        </MapView>
    );
};