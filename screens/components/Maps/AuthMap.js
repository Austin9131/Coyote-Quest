import MapView from 'react-native-maps';
import  Polyline  from 'react-native-maps';
import * as React from 'react';
import { useState } from 'react';
import { maps } from '../../../styles';

export const AuthMap = () => {
  state = {
    polylines: [
      { latling: [{latitude: 34.18725753, longitude: -117.3279266}, {latitude: 34.18701043 , longitude: -117.3279365}] },
<<<<<<< HEAD
      { latling: [{latitude: 34.18701043, longitude: -117.3279365}, {latitude: 34.186198 , longitude: -117.3300622}] }

=======
      { latling: [{latitude: 34.18701043, longitude: -117.3279365}, {latitude: 34.186198 , longitude: -117.3300622}]},
      { latling: [{latitude: 34.18678806587779 , longitude: -117.32855070963915 }, {latitude: 34.1870591490249  , longitude: -117.328753669741 }]},
      { latling: [{latitude: 34.1864002295336 , longitude: -117.329575270922 }, {latitude: 34.1865744218195  , longitude: -117.329689444384 }]},
      { latling: [{latitude: 34.1865597225508 , longitude: -117.329118577078 }, {latitude:34.1861605657776  , longitude:-117.32885755788 }]},
      { latling: [{latitude: 34.18617780288656 , longitude: -117.33010375379115 }, {latitude: 34.1824202456658 , longitude: -117.329512762842 }]}
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
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},
>>>>>>> 25bfe071ccf648b34d12b7b3cbc2f9bd7ddc20b9
    ]
  }
    return(
      <View>
        <View>
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
                strokeColor="#0065BD"
                strokeWidth={4}
                lineDashPattern={[1]}
                lineCap = 'square'
              />
            ))}
          </MapView>
        </View>
          <View style = {styles.search}>
            <SearchableDropdown
              onTextChange={(search) => console.log(search)}
              onItemSelect={(marker) => setSearch(marker.id)}
              containerStyle={{ paddingTop: 5, width: '95%', alignItems: 'center' }}
              textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#FAF7F6',
                borderRadius: 7,
                width: '100%'
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#FAF9F8',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 7,
                width: '100%'
              }}
              itemTextStyle={{
                color: '#222',
              }}
              itemsContainerStyle={{
                maxHeight: '60%',
                width: '100%',
                backgroundColor: 'transparent'
              }}
              items = { state.markers }
              defaultIndex = {2}
              placeholder = "search"
              resetValue = {false}
              underlineColorAndroid = "transparent"
              />
          </View>
    </View>
  );
};