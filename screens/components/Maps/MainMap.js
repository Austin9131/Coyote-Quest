import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { maps, text, styles } from '../../../styles';
import { TextInput } from 'react-native-gesture-handler';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { back } from 'react-native/Libraries/Animated/src/Easing';

export const MainMap = () => {
  const [ search, setSearch ] = useState('');

  state = {
    markers:[
      { id: 'UH', name: 'University Hall', latitude: 34.1804275762316, longitude: -117.3242646204980 },
      { id: 'SUE', name: 'Student Union East', latitude: 34.1804453275725, longitude: -117.3231863724740 },
      { id: 'SUS', name: 'Student Union South', latitude: 34.1813062631255, longitude: -117.3234599577940 },
      { id: 'SUN', name: 'Student Union North', latitude: 34.1820961859559, longitude: -117.322864507393 },
      { id: 'HC', name: 'Student Health Center', latitude: 34.1814038944376 , longitude: -117.322483633712 },
      { id: 'PL', name: 'John M. Pfau Library', latitude: 34.1825143890115 , longitude: -117.323915060075 },
      { id: 'CE', name: 'College of Education', latitude: 34.1833128986448 , longitude: -117.321977164061 },
      { id: 'HP', name: 'Health and PE Complex', latitude: 34.1830425323721 , longitude: -117.320700969045 },
      { id: 'PE', name: 'Physical Education', latitude: 34.182049702551 , longitude: -117.320165063716 },
      { id: 'JB', name: 'Jack H. Brown Hall', latitude: 34.1811899948836 , longitude: -117.321421946795 },
      { id: 'PA', name: 'Performing Arts', latitude: 34.1816296683575 , longitude: -117.325612093669},
      { id: 'BK', name: 'Coyote Bookstore', latitude: 34.1815016385651 , longitude: -117.326534773366},
      { id: 'CH', name: 'Chaparral Hall', latitude: 34.1823877474887 , longitude: -117.326912964837 },
      { id: 'AD', name: 'Administration', latitude: 34.1828978631596 , longitude: -117.326337899159 },
      { id: 'SH', name: 'Sierra Hall', latitude: 34.1830570656699 , longitude: -117.327086235474 },
      { id: 'CC', name: 'Childrens Center', latitude: 34.1832806137026 , longitude: -117.327730501948 },
      { id: 'DD', name: 'Univ. Center for Developmental Disabilities', latitude: 34.1834362650981 , longitude: -117.327204252507 },
      { id: 'AR', name: 'Academic Research', latitude: 34.1839407166545 , longitude: -117.328136051902 },
      { id: 'UE', name: 'University Enterprises', latitude: 34.1841724170387 , longitude: -117.327949638294 },
      { id: 'YC', name: 'Yasuda Center for Extended Learning', latitude: 34.1848596934678 , longitude:-117.327684099519 },
      { id: 'HA', name: 'HVAC Central Plant', latitude: 34.1857305130197 , longitude: -117.324404026049 },
      { id: 'CS', name: 'Chemical Sciences', latitude: 34.1847164142263 , longitude: -117.324684585047 },
      { id: 'BI', name: 'Biological Sciences', latitude: 34.1842632220096 , longitude: -117.323928738579 },
      { id: 'PS', name: 'Physical Sciences', latitude: 34.1836493839733 , longitude: -117.324138487357 },
      { id: 'SB', name: 'Social and Behavioral Sciences', latitude: 34.183606227631 , longitude: -117.324951196689 },
      { id: 'VA', name: 'Visual Arts Center', latitude: 34.1844763389479 , longitude: -117.326623285772 },
      { id: 'TC', name: 'Temp Classrooms', latitude: 34.1846337634945, longitude: -117.323516751258 },
      { id: 'TO', name: 'Temp Offices', latitude: 34.1845302560198 , longitude: -117.323260868453 },
      { id: 'RF', name: 'Student Rec and Wellness Center', latitude: 34.1813105903998 , longitude: -117.318591142558 },
      { id: 'CV', name: 'Coyote Village', latitude: 34.1801651890546 , longitude: -117.321086669891 },
      { id: 'CCD', name: 'Coyote Commons', latitude: 34.180412598531 , longitude: -117.320197249447 },
      { id: 'SV', name: 'Serrano Village', latitude: 34.1794726967681 , longitude: -117.322785708762 },
      { id: 'AV', name: 'Arrowhead Village', latitude: 34.1781485876577 , longitude: -117.322417441456 },
      { id: 'AS', name: 'Administration Services', latitude: 34.1859915882845 , longitude: -117.329196724741 },
      { id: 'PW', name: 'Plant/Central Warehouse', latitude: 34.1866690873901 , longitude: -117.329940769506 },
      { id: 'FM', name: 'Facilities Planning and Management', latitude: 34.1870235325133 , longitude: -117.329260024891 },
      { id: 'AF', name: 'Auto Fleet Services', latitude: 34.1872714768317 , longitude: -117.32874665002 },
      { id: 'ES', name: 'Environmental Health and Services', latitude: 34.1870153231317 , longitude: -117.328469309542 },
      { id: 'UP', name: 'University Police', latitude: 34.187433666358 , longitude: -117.328084680704 },
      { id: 'OB', name: 'Murillo Family Observatory', latitude: 34.1870341825262 , longitude: -117.319222125644 },
      { id: 'UV', name: 'University Village', latitude: 34.176754280788 , longitude: -117.323379281462 },
      { id: 'IC1', name: 'Information Center', latitude: 34.1796664634309 , longitude: -117.326001408602 },
      { id: 'IC2', name: 'Information Center 2', latitude: 34.1790910908728 , longitude: -117.319436702038 },
      { id: 'PKW', name: 'Parking Structure West', latitude: 34.186485705316 , longitude:  -117.325494471016 },
      { id: 'PKE', name: 'Parking Structure East', latitude: 34.1840084251964 , longitude: -117.320266309008 },
    ]
  }
  function findmarkerlat(id) {
    for( const marker of state.markers) {
      if( marker.id === id ) {
        return marker.latitude;
      }
    }
  }
  function findmarkerlong(id) {
    for( const marker of state.markers) {
      if( marker.id === id ) {
        return marker.longitude;
      }
    }
  }
  function findmarkername(id) {
    for( const marker of state.markers) {
      if( marker.id === id ) {
        return marker.name;
      }
    }
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
          <MapView.Marker
            key = { 0 }
            title = {findmarkername(search)}
            coordinate={search === '' ? { latitude: 100, longitude: 100 } : { latitude: findmarkerlat(search), longitude: findmarkerlong(search) }}
          />
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