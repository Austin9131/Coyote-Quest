import MapView from 'react-native-maps';
import  Polyline  from 'react-native-maps';
import * as React from 'react';
import { useState } from 'react';
import { maps } from '../../../styles';

export const AuthMap = () => {
  state = {
    polylines: [
      { latling: [{latitude: 34.18725753, longitude: -117.3279266}, {latitude: 34.18701043 , longitude: -117.3279365}] },
      { latling: [{latitude: 34.18701043, longitude: -117.3279365}, {latitude: 34.186198 , longitude: -117.3300622}]},
      { latling: [{latitude: 34.18678806587779 , longitude: -117.32855070963915 }, {latitude: 34.1870591490249  , longitude: -117.328753669741 }]},
      { latling: [{latitude: 34.1864002295336 , longitude: -117.329575270922 }, {latitude: 34.1865744218195  , longitude: -117.329689444384 }]},
      { latling: [{latitude: 34.1865597225508 , longitude: -117.329118577078 }, {latitude:34.1861605657776  , longitude:-117.32885755788 }]},
      { latling: [{latitude: 34.18617780288656 , longitude: -117.33010375379115 }, {latitude: 34.1824202456658 , longitude: -117.329512762842 }]},
      { latling: [{latitude: 34.187025082191 , longitude: -117.328006120001 }, {latitude: 34.1855037971463 , longitude: -117.326365390507 }]},
      { latling: [{latitude: 34.1862948987465 , longitude: -117.327189138634 }, {latitude: 34.1875404913909  , longitude: -117.325602592277 }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
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