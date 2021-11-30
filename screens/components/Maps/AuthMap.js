import MapView from 'react-native-maps';
import  Polyline  from 'react-native-maps';
import * as React from 'react';
import { useState } from 'react';
import { maps, styles } from '../../../styles';
import { View } from 'react-native';

export const AuthMap = () => {
  const [ search, setSearch ] = useState('');

  state = {
    polylines: [
      { latling: [{latitude: 34.18725753, longitude: -117.3279266}, {latitude: 34.18701043 , longitude: -117.3279365}] },
      { latling: [{latitude: 34.18701043, longitude: -117.3279365}, {latitude: 34.18678806587779 , longitude: -117.32855070963915 }, {latitude: 34.1865597225508 , longitude: -117.329118577078 }, {latitude: 34.1864002295336 , longitude: -117.329575270922 }, {latitude: 34.186198 , longitude: -117.3300622}]},
      { latling: [{latitude: 34.18678806587779 , longitude: -117.32855070963915 }, {latitude: 34.1870591490249  , longitude: -117.328753669741 }]},
      { latling: [{latitude: 34.1864002295336 , longitude: -117.329575270922 }, {latitude: 34.1865744218195  , longitude: -117.329689444384 }]},
      { latling: [{latitude: 34.1865597225508 , longitude: -117.329118577078 }, {latitude:34.1861605657776  , longitude:-117.32885755788 }]},
      { latling: [{latitude: 34.186198 , longitude: -117.3300622}, {latitude: 34.1824202456658 , longitude: -117.329512762842 }]},
      { latling: [{latitude: 34.18701043 , longitude: -117.3279365 }, {latitude: 34.1862948987465 , longitude: -117.327189138634 }, {latitude: 34.1855037971463 , longitude: -117.326365390507 }]},
      { latling: [{latitude: 34.1862948987465 , longitude: -117.327189138634 }, {latitude: 34.186919674139 , longitude: -117.326409187175 }, {latitude: 34.1875404913909  , longitude: -117.325602592277 }]},
      { latling: [{latitude: 34.186919674139 , longitude: -117.326409187175 }, {latitude: 34.1866204213817  , longitude: -117.326000607423 }]},
      { latling: [{latitude: 34.1855053588 , longitude: -117.326354794278 }, {latitude: 34.1831467337777  , longitude: -117.328070862343 }]},
      { latling: [{latitude: 34.184357367710255 , longitude: -117.32723456437401}, {latitude: 34.1846196749598  , longitude:-117.327876241051 }]},
      { latling: [{latitude: 34.18409196540288 , longitude: -117.32735486075438 }, {latitude: 34.1842750431008  , longitude: -117.327870897783 }]},
      { latling: [{latitude:34.1841135117157 , longitude:-117.327486196221 }, {latitude: 34.1836672785744  , longitude:-117.326585736273 }]},
      { latling: [{latitude: 34.1848680979437 , longitude: -117.326944121902 }, {latitude:34.1841710921561  , longitude: -117.325707113442 }]},
      { latling: [{latitude: 34.183067008661 , longitude: -117.328071225152 }, {latitude: 34.1829807839201  , longitude: -117.329856535919}]},
      { latling: [{latitude: 34.183067008661 , longitude: -117.328071225152 }, {latitude: 34.1827388235074  , longitude: -117.327348823221 }]},
      { latling: [{latitude: 34.183067008661 , longitude: -117.328071225152 }, {latitude: 34.1827388235074  , longitude:-117.327348823221 }]},
      //{ latling: [{latitude: 34.182863225253 , longitude: -117.327612740726 }, {latitude: 34.1829876268152  , longitude: -117.327483671581 }]},
      //{ latling: [{latitude: 34.1829876268152 , longitude: -117.327483671581 }, {latitude: 34.1831318808219  , longitude: -117.327787099345 }]},
      //{ latling: [{latitude:34.1828612289817 , longitude: -117.327570012814 }, {latitude:34.1826231855913  , longitude: 117.327110348531 }]},
      //{ latling: [{latitude: 34.1826231855913 , longitude: -117.327110348531 }, {latitude: 34.1833238335675  , longitude: -117.326480117586 }]},
      //{ latling: [{latitude:34.1826817314156 , longitude: -117.327064917554 }, {latitude: 34.182626827285  , longitude: -117.326961302581 }]},
      //{ latling: [{latitude: 34.1832566983472 , longitude: -117.326543980397 }, {latitude: 34.1833239738986  , longitude: -117.326708275962 }]},
      //{ latling: [{latitude: 34.1833239738986 , longitude: -117.326708275962 }, {latitude: 34.1832406563908  , longitude: -117.326766094261 }]},
      //{ latling: [{latitude: 34.1827864892344 , longitude: -117.326877216298 }, {latitude: 34.1824216964889  , longitude: -117.326169214431 }]},
      //{ latling: [{latitude:34.1832965696648 , longitude: -117.326492909274 }, {latitude: 34.1829680515507  , longitude: -117.325815858308 }]},
      //{ latling: [{latitude: 34.1829736938337 , longitude:-117.325802047631 }, {latitude: 34.1841571026854  , longitude: -117.324832321094 }]},
      //{ latling: [{latitude: 34.1830175548974 , longitude: -117.32574061699 }, {latitude: 34.1828388587363  , longitude: -117.325364719976 }]},
      //{ latling: [{latitude: 34.1837585009209 , longitude: -117.325161413809 }, {latitude: 34.1837174382529  , longitude: -117.325080968923 }]},
      //{ latling: [{latitude: 34.1841506748611 , longitude:-117.324748950939 }, {latitude: 34.1838531037872  , longitude: -117.324048349112 }]},
      //{ latling: [{latitude: 34.1838531037872 , longitude: -117.324048349112 }, {latitude: 34.1837563835094  , longitude: -117.324114167656 }]},
      //{ latling: [{latitude: 34.1830310865565 , longitude: -117.325765121799 }, {latitude: 34.1829984916764  , longitude: -117.325703349694 }]},
      //{ latling: [{latitude: 34.1829984916764 , longitude: -117.325703349694 }, {latitude: 34.182526851972  , longitude: -117.326057177835 }]},
      //{ latling: [{latitude: 34.182526851972 , longitude:-117.326057177835 }, {latitude: 34.1814773612674  , longitude: -117.323918961007 }]},
      //{ latling: [{latitude: 34.1822242289749 , longitude: -117.325526449286 }, {latitude: 34.1817608430014  , longitude: -117.325853283003 }]},
      //{ latling: [{latitude: 34.1817608430014 , longitude: -117.325853283003 }, {latitude: 34.1817425650108  , longitude: -117.325784358886 }]},
      //{ latling: [{latitude: 34.1821041644733 , longitude: -117.324280188867 }, {latitude: 34.1823316374475  , longitude: -117.324095618456 }]},
      //{ latling: [{latitude: 34.1864167526994 , longitude: -117.324207627292 }, {latitude: 34.1855885686235  , longitude: -117.324843485609 }]},
      //{ latling: [{latitude: 34.1855885686235 , longitude: -117.324843485609 }, {latitude:34.1854875240969  , longitude:-117.326347960195 }]},
      //{ latling: [{latitude:34.1858662219551 , longitude: -117.324586021505 }, {latitude: 34.185814657834  , longitude: -117.324511903051 }]},
      //{ latling: [{latitude: 34.1858147250624 , longitude: -117.324102301068 }, {latitude: 34.1856878650894  , longitude: -117.323846137288 }]},
      //{ latling: [{latitude: 34.1856878650894 , longitude: -117.323846137288 }, {latitude:34.1855072220748  , longitude: -117.32395406416 }]},
      //{ latling: [{latitude: , longitude: }, {latitude:  , longitude: }]},

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
            {this.state.polylines.map( (polyline, index)  => (
              <MapView.Polyline
                key = { index }
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
            {/*
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
            */}
          </View>
    </View>
  );
};