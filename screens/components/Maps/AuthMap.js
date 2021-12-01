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
      { latling: [{latitude: 34.18701043 , longitude: -117.3279365 }, {latitude: 34.1862948987465 , longitude: -117.327189138634 }, {latitude: 34.1855037971463 , longitude: -117.326365390507 }, {latitude: 34.1848680979437 , longitude: -117.326944121902 },{latitude: 34.184357367710255 , longitude: -117.32723456437401}, {latitude: 34.1841135117157 , longitude:-117.327486196221 }, {latitude: 34.183067008661 , longitude: -117.328071225152 }, {latitude: 34.1827388235074  , longitude:-117.327348823221 }]},
      { latling: [{latitude: 34.1862948987465 , longitude: -117.327189138634 }, {latitude: 34.186919674139 , longitude: -117.326409187175 }, {latitude: 34.1875404913909, longitude: -117.325602592277 } ]},
      { latling: [{latitude: 34.186919674139 , longitude: -117.326409187175 }, {latitude: 34.1866204213817  , longitude: -117.326000607423 }]},
      { latling: [{latitude: 34.184357367710255 , longitude: -117.32723456437401}, {latitude: 34.1846196749598  , longitude:-117.327876241051 }]},
      { latling: [{latitude: 34.1842750431008  , longitude: -117.327870897783 }, {latitude: 34.1841135117157 , longitude:-117.327486196221 }, {latitude: 34.1836672785744  , longitude:-117.326585736273 }]},
      { latling: [{latitude: 34.1848680979437 , longitude: -117.326944121902 }, {latitude:34.1841710921561  , longitude: -117.325707113442 }]},
      { latling: [{latitude: 34.183067008661 , longitude: -117.328071225152 }, {latitude: 34.1829807839201  , longitude: -117.329856535919}]},
      { latling: [{latitude: 34.183067008661 , longitude: -117.328071225152 }, {latitude: 34.1827388235074  , longitude: -117.327348823221 }]},
      { latling: [{latitude: 34.183067008661 , longitude: -117.328071225152 }, {latitude: 34.1827388235074  , longitude:-117.327348823221 }]},// before crazy
      { latling: [{latitude: 34.182863225253 , longitude: -117.327612740726 }, {latitude: 34.1829876268152  , longitude: -117.327483671581 }]},
      { latling: [{latitude: 34.1829876268152 , longitude: -117.327483671581 }, {latitude: 34.1831318808219  , longitude: -117.327787099345 }]},
      { latling: [{latitude:34.1828612289817 , longitude: -117.327570012814 }, {latitude:34.1826231855913  , longitude: -117.327110348531 }]},
      { latling: [{latitude: 34.1826231855913 , longitude: -117.327110348531 }, {latitude: 34.1833238335675  , longitude: -117.326480117586 }]},
      { latling: [{latitude: 34.1826817314156 , longitude: -117.327064917554 }, {latitude: 34.182626827285  , longitude: -117.326961302581 }]},
      { latling: [{latitude: 34.1832566983472 , longitude: -117.326543980397 }, {latitude: 34.1833239738986  , longitude: -117.326708275962 }]},
      { latling: [{latitude: 34.1833239738986 , longitude: -117.326708275962 }, {latitude: 34.1832406563908  , longitude: -117.326766094261 }]},
      { latling: [{latitude: 34.1827864892344 , longitude: -117.326877216298 }, {latitude: 34.1824216964889  , longitude: -117.326169214431 }]},
      { latling: [{latitude: 34.1832965696648 , longitude: -117.326492909274 }, {latitude: 34.1829680515507  , longitude: -117.325815858308 }]},
      { latling: [{latitude: 34.1829736938337 , longitude:-117.325802047631 }, {latitude: 34.1841571026854  , longitude: -117.324832321094 }]},
      { latling: [{latitude: 34.1830175548974 , longitude: -117.32574061699 }, {latitude: 34.1828388587363  , longitude: -117.325364719976 }]},
      { latling: [{latitude: 34.1837585009209 , longitude: -117.325161413809 }, {latitude: 34.1837174382529  , longitude: -117.325080968923 }]},
      { latling: [{latitude: 34.1841506748611 , longitude:-117.324748950939 }, {latitude: 34.1838531037872  , longitude: -117.324048349112 }]},
      { latling: [{latitude: 34.1838531037872 , longitude: -117.324048349112 }, {latitude: 34.1837563835094  , longitude: -117.324114167656 }]},
      { latling: [{latitude: 34.1830310865565 , longitude: -117.325765121799 }, {latitude: 34.1829984916764  , longitude: -117.325703349694 }]},
      { latling: [{latitude: 34.1829984916764 , longitude: -117.325703349694 }, {latitude: 34.182526851972  , longitude: -117.326057177835 }]},
      { latling: [{latitude: 34.182526851972 , longitude:-117.326057177835 }, {latitude: 34.1814773612674  , longitude: -117.323918961007 }]},
      { latling: [{latitude: 34.1822242289749 , longitude: -117.325526449286 }, {latitude: 34.1817608430014  , longitude: -117.325853283003 }]},
      { latling: [{latitude: 34.1817608430014 , longitude: -117.325853283003 }, {latitude: 34.1817425650108  , longitude: -117.325784358886 }]},
      { latling: [{latitude: 34.1821041644733 , longitude: -117.324280188867 }, {latitude: 34.1823316374475  , longitude: -117.324095618456 }]},
      { latling: [{latitude: 34.1864167526994 , longitude: -117.324207627292 }, {latitude: 34.1855885686235  , longitude: -117.324843485609 }]},
      { latling: [{latitude: 34.1855885686235 , longitude: -117.324843485609 }, {latitude:34.1854875240969  , longitude:-117.326347960195 }]},
      { latling: [{latitude:34.1858662219551 , longitude: -117.324586021505 }, {latitude: 34.185814657834  , longitude: -117.324511903051 }]},
      { latling: [{latitude: 34.1858147250624 , longitude: -117.324102301068 }, {latitude: 34.1856878650894  , longitude: -117.323846137288 }]},
      { latling: [{latitude: 34.1856878650894 , longitude: -117.323846137288 }, {latitude:34.1855072220748  , longitude: -117.32395406416 }]},
      { latling: [{latitude: 34.185399857956 , longitude: -117.325253087592 }, {latitude: 34.1844473122685  , longitude: -117.323423305105 }]},
      { latling: [{latitude: 34.1850981053297 , longitude: -117.324690314882 }, {latitude: 34.1851496693169  , longitude: -117.32465402462 }]},
      { latling: [{latitude: 34.184891699322456 , longitude: -117.32425993948732 }, {latitude: 34.1848105227371  , longitude: -117.324308778622 }]},//chemical science 
      { latling: [{latitude: 34.184604411424 , longitude: -117.323662532954 }, {latitude: 34.1844807186182  , longitude: -117.323732953166 }]},
      { latling: [{latitude: 34.1845838550391 , longitude: -117.323637605445 }, {latitude: 34.1846333772307  , longitude: -117.323599590994 }]}, //Jacob End
      { latling: [{latitude: 34.1810945129381 , longitude: -117.315669535731 }, {latitude: 34.18111240282  , longitude: -117.315669535731 }]},
      { latling: [{latitude: 34.1819337527404 , longitude: -117.317300664287 }, {latitude: 34.179686699915  , longitude: -117.317343835066 }]},
      { latling: [{latitude: 34.1812591452461 , longitude: -117.317350476724 }, {latitude: 34.1812722964348  , longitude: -117.317449209757 }]},
      { latling: [{latitude: 34.1809932761888 , longitude: -117.317331555963 }, {latitude: 34.1809980401356  , longitude: -117.317423694476 }]},
      { latling: [{latitude: 34.1809980401356 , longitude: -117.317423694476 }, {latitude: 34.1810450199658  , longitude: -117.317493152741 }]},
      { latling: [{latitude: 34.1818378098163 , longitude: -117.317330138447 }, {latitude: 34.1818472643235  , longitude: -117.31893334859 }]},
      { latling: [{latitude: 34.1818472643235 , longitude: -117.31893334859 }, {latitude: 34.1817933956055  , longitude: -117.318931931074 }]},
      { latling: [{latitude: 34.1817959607833 , longitude: -117.318856802747 }, {latitude: 34.1817960340741  , longitude: -117.319195588975 }]},
      { latling: [{latitude: 34.1817960340741 , longitude: -117.319195588975 }, {latitude: 34.181845358764  , longitude: -117.319293397552 }]},
      { latling: [{latitude: 34.1810925861012 , longitude: -117.318036061215 }, {latitude: 34.1810105729791  , longitude: -117.3180346437 }]},
      { latling: [{latitude: 34.1810084475263 , longitude: -117.317902814749 }, {latitude: 34.1810179021264  , longitude: -117.319338758051 }]},
      { latling: [{latitude: 34.1810179021264 , longitude: -117.319338758051 }, {latitude: 34.1812079466939  , longitude: -117.319799450621 }]},
      { latling: [{latitude: 34.1834360462296 , longitude: -117.318584639752 }, {latitude: 34.1828591836324  , longitude: -117.318954611323 }]},
      { latling: [{latitude: 34.1828591836324 , longitude: -117.318954611323 }, {latitude: 34.1822119583046  , longitude: -117.319094945368 }]},
      { latling: [{latitude: 34.1822119583046 , longitude: -117.319094945368 }, {latitude: 34.1812079466939  , longitude: -117.319799450621 }]},
      { latling: [{latitude: 34.1812079466939 , longitude: -117.319799450621 }, {latitude: 34.1808286593154  , longitude: -117.320397858995 }]},
      { latling: [{latitude: 34.1816061373817 , longitude: -117.319472722449 }, {latitude: 34.1816392094693  , longitude: -117.319555840185 }]},
      { latling: [{latitude: 34.1825660634662 , longitude: -117.319152899854 }, {latitude:34.1825482196844  , longitude: -117.319024609435 }]},
      { latling: [{latitude: 34.18221196 , longitude: -117.319094945368 }, {latitude: 34.1823790771308  , longitude: -117.320316612516 }]},
      { latling: [{latitude: 34.1823790771308 , longitude: -117.320316612516 }, {latitude: 34.1823668464065  , longitude: -117.320530615179 }]},
      { latling: [{latitude: 34.1823668464065 , longitude: -117.320530615179 }, {latitude: 34.1827033511195  , longitude: -117.321312802292 }]},
      { latling: [{latitude: 34.1827033511195 , longitude: -117.321312802292 }, {latitude: 34.1829530369186  , longitude: -117.321140622739 }]},
      { latling: [{latitude: 34.1829530369186 , longitude: -117.321140622739 }, {latitude: 34.1831321828447  , longitude: -117.321555493472 }]},
      { latling: [{latitude: 34.1819303950691 , longitude: -117.319246416092 }, {latitude: 34.182253336159  , longitude: -117.319926935278 }]},
      { latling: [{latitude: 34.182253336159 , longitude: -117.319926935278 }, {latitude: 34.1822154379119  , longitude: -117.319954811968 }]},
      { latling: [{latitude: 34.1822154379119 , longitude: -117.319954811968 }, {latitude: 34.1823403240175  , longitude: -117.320176185679 }]},
      { latling: [{latitude: 34.1823403240175 , longitude: -117.320176185679 }, {latitude:  34.1816322945044 , longitude: -117.320663207844 }]},
      { latling: [{latitude: 34.18313218 , longitude: -117.321555493472 }, {latitude: 34.182798559619  , longitude: -117.321514504868 }]},
      { latling: [{latitude: 34.182798559619 , longitude: -117.321514504868 }, {latitude: 34.1827633746735  , longitude: -117.321440713631 }]},
      { latling: [{latitude: 34.182798559619 , longitude: -117.321514504868 }, {latitude: 34.1825789714057  , longitude: -117.321501386426 }]},
      { latling: [{latitude: 34.1825789714057 , longitude: -117.321501386426 }, {latitude: 34.1824651074853  , longitude: -117.321949053264 }]},
      { latling: [{latitude: 34.1824651074853 , longitude: -117.321949053264 }, {latitude: 34.1822508597667  , longitude: -117.321908058132 }]},
      { latling: [{latitude: 34.1824651074853 , longitude: -117.321949053264 }, {latitude: 34.1824435725195  , longitude: -117.322214701717 }]},
      { latling: [{latitude: 34.1824435725195 , longitude: -117.322214701717 }, {latitude: 34.1827258157874  , longitude: -117.32275091804 }]},
      { latling: [{latitude: 34.1827258157874 , longitude: -117.32275091804 }, {latitude: 34.1834394317576  , longitude: -117.322221260938 }]},
      { latling: [{latitude: 34.1834394317576 , longitude: -117.322221260938 }, {latitude: 34.18348563812  , longitude: -117.322308170617 }]},
      { latling: [{latitude: 34.18348563812 , longitude: -117.322308170617 }, {latitude: 34.1839686414612  , longitude: -117.321949053264 }]},
      { latling: [{latitude: 34.1839686414612 , longitude: -117.321949053264 }, {latitude: 34.1838059450153  , longitude: -117.321550580584 }]},
      { latling: [{latitude: 34.1838059450153 , longitude: -117.321550580584 }, {latitude: 34.1837490562935  , longitude: -117.321598134936 }]},
      { latling: [{latitude: 34.1838059450153 , longitude: -117.321550580584 }, {latitude: 34.1836297678952  , longitude: -117.321140629267 }]},
      { latling: [{latitude: 34.18313218 , longitude: -117.321555493472}, {latitude: 34.1836297678952,longitude: -117.321140629267}]},
      { latling: [{latitude: 34.1836297678952 , longitude: -117.321140629267 }, {latitude: 34.1849065773859  , longitude: -117.32005507818 }]},
      { latling: [{latitude: 34.1834360462296 , longitude: -117.318584639752 }, {latitude: 34.1842470491104  , longitude: -117.319438005601}]},
      { latling: [{latitude: 34.1842470491104 , longitude: -117.319438005601 }, {latitude: 34.1849065773859  , longitude: -117.32005507818 }]},
      { latling: [{latitude: 34.1812079466939 , longitude: -117.319799450621 }, {latitude: 34.1790704951081  , longitude: -117.319371722381}]},
      { latling: [{latitude: 34.1808286593154 , longitude: -117.320397858995 }, {latitude: 34.1806758349195  , longitude: -117.321277101236}]}
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