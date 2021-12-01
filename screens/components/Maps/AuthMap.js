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
      { latlng: [{latitude: 34.1872575300000, longitude: -117.327926600000}, {latitude: 34.1870104300000, longitude: -117.327936500000}] },
      { latlng: [{latitude: 34.1870104300000, longitude: -117.327936500000}, {latitude: 34.1867880658777, longitude: -117.328550709639}, {latitude: 34.1865597225508, longitude: -117.329118577078}, {latitude: 34.1864002295336, longitude: -117.329575270922}, {latitude: 34.1861980000000, longitude: -117.330062200000}] },
      { latlng: [{latitude: 34.1867880658777, longitude: -117.328550709639}, {latitude: 34.1870591490249, longitude: -117.328753669741}] },
      { latlng: [{latitude: 34.1864002295336, longitude: -117.329575270922}, {latitude: 34.1865744218195, longitude: -117.329689444384}] },
      { latlng: [{latitude: 34.1865597225508, longitude: -117.329118577078}, {latitude:34.18616056577760, longitude: -117.328857557880}] },
      { latlng: [{latitude: 34.1861980000000, longitude: -117.330062200000}, {latitude: 34.1824202456658, longitude: -117.329512762842}] },
      { latlng: [{latitude: 34.1870104300000, longitude: -117.327936500000}, {latitude: 34.1862948987465, longitude: -117.327189138634}, {latitude: 34.1855037971463, longitude: -117.326365390507}, {latitude: 34.1848680979437, longitude: -117.326944121902}, {latitude: 34.1843573677102, longitude: -117.327234564374}] },
      { latlng: [{latitude: 34.1843573677102, longitude: -117.327234564374}, {latitude: 34.1841135117157, longitude: -117.327486196221}, {latitude: 34.1830670086610, longitude: -117.328071225152}, {latitude: 34.1828632252530, longitude: -117.327612740726}, {latitude: 34.1827388235074, longitude: -117.327348823221}] },
      { latlng: [{latitude: 34.1827388235074, longitude: -117.327348823221}, {latitude: 34.1826231855913, longitude: -117.327110348531}, {latitude: 34.1826817314156, longitude: -117.327064917554}, {latitude: 34.1828127376516, longitude: -117.326933624752}, {latitude: 34.1832566983472, longitude: -117.326543980397}, {latitude: 34.1832965696648, longitude: -117.326492909274}] },
      { latlng: [{latitude: 34.1862948987465, longitude: -117.327189138634}, {latitude: 34.1869196741390, longitude: -117.326409187175}, {latitude: 34.1875404913909, longitude: -117.325602592277}] },
      { latlng: [{latitude: 34.1869196741390, longitude: -117.326409187175}, {latitude: 34.1866204213817, longitude: -117.326000607423}] },
      { latlng: [{latitude: 34.1843573677102, longitude: -117.327234564374}, {latitude: 34.1846196749598, longitude: -117.327876241051}] },
      { latlng: [{latitude: 34.1842750431008, longitude: -117.327870897783}, {latitude: 34.1841135117157, longitude: -117.327486196221}, {latitude: 34.1836672785744, longitude:-117.326585736273}] },
      { latlng: [{latitude: 34.1848680979437, longitude: -117.326944121902}, {latitude: 34.1841710921561, longitude: -117.325707113442}]},
      { latlng: [{latitude: 34.1830670086610, longitude: -117.328071225152}, {latitude: 34.1829807839201, longitude: -117.329856535919}]},
      { latlng: [{latitude: 34.1828632252530, longitude: -117.327612740726}, {latitude: 34.1829876268152, longitude: -117.327483671581}, {latitude: 34.1831318808219, longitude: -117.327787099345}] },
      { latlng: [{latitude: 34.1826817314156, longitude: -117.327064917554}, {latitude: 34.1826268272850, longitude: -117.326961302581}] },
      { latlng: [{latitude: 34.1832566983472, longitude: -117.326543980397}, {latitude: 34.1833239738986, longitude: -117.326708275962}, {latitude: 34.1832406563908, longitude: -117.326766094261}] },
      { latlng: [{latitude: 34.1828127376516, longitude: -117.326933624752}, {latitude: 34.1824216964889, longitude: -117.326169214431}] },
      { latlng: [{latitude: 34.1832965696648, longitude: -117.326492909274}, {latitude: 34.1829680515507, longitude: -117.325815858308}] },
      { latlng: [{latitude: 34.1829680515507, longitude: -117.325815858308}, {latitude: 34.1841571026854, longitude: -117.324832321094}] },
      { latlng: [{latitude: 34.1830674351029, longitude: -117.325734194260}, {latitude: 34.1828388587363, longitude: -117.325364719976}] },
      { latlng: [{latitude: 34.1837585009209, longitude: -117.325161413809}, {latitude: 34.1837174382529, longitude: -117.325080968923}] },
      { latlng: [{latitude: 34.1841506748611, longitude: -117.324748950939}, {latitude: 34.1838531037872, longitude: -117.324048349112}] },
      { latlng: [{latitude: 34.1841571026854, longitude: -117.324832321094}, {latitude: 34.1841506748611, longitude: -117.324748950939}] },
      { latlng: [{latitude: 34.1838531037872, longitude: -117.324048349112}, {latitude: 34.1837563835094, longitude: -117.324114167656}] },
      { latlng: [{latitude: 34.1830310865565, longitude: -117.325765121799}, {latitude: 34.1829984916764, longitude: -117.325703349694}] },
      { latlng: [{latitude: 34.1829984916764, longitude: -117.325703349694}, {latitude: 34.1825268519720, longitude: -117.326057177835}] },
      { latlng: [{latitude: 34.1825268519720, longitude: -117.326057177835}, {latitude: 34.1822242289749, longitude: -117.325526449286}, {latitude: 34.1814773612674, longitude: -117.323918961007}] },
      { latlng: [{latitude: 34.1822242289749, longitude: -117.325526449286}, {latitude: 34.1817608430014, longitude: -117.325853283003}] },
      { latlng: [{latitude: 34.1817608430014, longitude: -117.325853283003}, {latitude: 34.1817425650108, longitude: -117.325784358886}] },
      { latlng: [{latitude: 34.1821041644733, longitude: -117.324280188867}, {latitude: 34.1823316374475, longitude: -117.324095618456}] },
      { latlng: [{latitude: 34.1864167526994, longitude: -117.324207627292}, {latitude: 34.1858662219551, longitude: -117.324586021505}, {latitude: 34.1855885686235, longitude: -117.324843485609}] },
      { latlng: [{latitude: 34.1855885686235, longitude: -117.324843485609}, {latitude: 34.1853998579560, longitude: -117.325253087592}, {latitude: 34.1855037971463, longitude: -117.326365390507}] },
      { latlng: [{latitude: 34.1858662219551, longitude: -117.324586021505}, {latitude: 34.1858146578340, longitude: -117.324511903051}] }, 
      { latlng: [{latitude: 34.1858147250624, longitude: -117.324102301068}, {latitude: 34.1856878650894, longitude: -117.323846137288}] },
      { latlng: [{latitude: 34.1856878650894, longitude: -117.323846137288}, {latitude: 34.1855072220748, longitude: -117.32395406416}] },
      { latlng: [{latitude: 34.1853998579560, longitude: -117.325253087592}, {latitude: 34.1850981053297, longitude: -117.324690314882}, {latitude: 34.1848916993224, longitude: -117.324259939487}, {latitude: 34.184604411424, longitude: -117.323662532954}, {latitude: 34.1844473122685, longitude: -117.323423305105}] },
      { latlng: [{latitude: 34.1850981053297, longitude: -117.324690314882}, {latitude: 34.1851496693169, longitude: -117.324654024620}] },
      { latlng: [{latitude: 34.1848916993224, longitude: -117.324259939487}, {latitude: 34.1848105227300, longitude: -117.324308778622}] },
      { latlng: [{latitude: 34.1846044114240, longitude: -117.323662532954}, {latitude: 34.1844807186182, longitude: -117.323732953166}] },
      { latlng: [{latitude: 34.1845838550391, longitude: -117.323637605445}, {latitude: 34.1846333772307, longitude: -117.323599590994}] },
      { latlng: [{latitude: 34.1810945129381, longitude: -117.315669535731}, {latitude: 34.1811124028200, longitude: -117.315669535731}] },
      { latlng: [{latitude: 34.1811124028200, longitude: -117.315669535731}, {latitude: 34.1811124028200, longitude: -117.317316492302}] },
      { latlng: [{latitude: 34.1819337527404, longitude: -117.317300664287}, {latitude: 34.1818378098163, longitude: -117.317330138447}, {latitude: 34.1812591452461, longitude: -117.317350476724}, {latitude: 34.18111240282, longitude: -117.317316492302}, {latitude: 34.1809932761888, longitude: -117.317331555963}, {latitude: 34.179686699915, longitude: -117.317343835066}] },
      { latlng: [{latitude: 34.1812591452461, longitude: -117.317350476724}, {latitude: 34.1812722964348, longitude: -117.317449209757}] },
      { latlng: [{latitude: 34.1809932761888, longitude: -117.317331555963}, {latitude: 34.1809980401356, longitude: -117.317423694476}] },
      { latlng: [{latitude: 34.1809980401356, longitude: -117.317423694476}, {latitude: 34.1810450199658, longitude: -117.317493152741}] },
      { latlng: [{latitude: 34.1818378098163, longitude: -117.317330138447}, {latitude: 34.1818472643235, longitude: -117.318933348590}] },
      { latlng: [{latitude: 34.1818472643235, longitude: -117.318933348590}, {latitude: 34.1817933956055, longitude: -117.318931931074}] },
      { latlng: [{latitude: 34.1817959607833, longitude: -117.318856802747}, {latitude: 34.1817960340741, longitude: -117.319195588975}] },
      { latlng: [{latitude: 34.1817960340741, longitude: -117.319195588975}, {latitude: 34.1818453587640, longitude: -117.319293397552}] },
      { latlng: [{latitude: 34.1810925861012, longitude: -117.318036061215}, {latitude: 34.1810105729791, longitude: -117.318034643700}] },
      { latlng: [{latitude: 34.1810084475263, longitude: -117.317902814749}, {latitude: 34.1810179021264, longitude: -117.319338758051}] },
      { latlng: [{latitude: 34.1810179021264, longitude: -117.319338758051}, {latitude: 34.1812079466939, longitude: -117.319799450621}] },
      { latlng: [{latitude: 34.1834360462296, longitude: -117.318584639752}, {latitude: 34.1828591836324, longitude: -117.318954611323}] },
      { latlng: [{latitude: 34.1828591836324, longitude: -117.318954611323}, {latitude: 34.1822119583046, longitude: -117.319094945368}] },
      { latlng: [{latitude: 34.1822119583046, longitude: -117.319094945368}, {latitude: 34.1819303950691, longitude: -117.319246416092}, {latitude: 34.181845358764, longitude: -117.319293397552}, {latitude: 34.1816061373817, longitude: -117.319472722449}, {latitude: 34.1812079466939, longitude: -117.319799450621}] },
      { latlng: [{latitude: 34.1812079466939, longitude: -117.319799450621}, {latitude: 34.1808286593154, longitude: -117.320397858995}] },
      { latlng: [{latitude: 34.1816061373817, longitude: -117.319472722449}, {latitude: 34.1816392094693, longitude: -117.319555840185}] },
      { latlng: [{latitude: 34.1825660634662, longitude: -117.319152899854}, {latitude: 34.1825482196844, longitude: -117.319024609435}] },
      { latlng: [{latitude: 34.1822119600000, longitude: -117.319094945368}, {latitude: 34.1823790771308, longitude: -117.320316612516}] },
      { latlng: [{latitude: 34.1823790771308, longitude: -117.320316612516}, {latitude: 34.1823668464065, longitude: -117.320530615179}] },
      { latlng: [{latitude: 34.1823668464065, longitude: -117.320530615179}, {latitude: 34.1827033511195, longitude: -117.321312802292}] },
      { latlng: [{latitude: 34.1827033511195, longitude: -117.321312802292}, {latitude: 34.1829530369186, longitude: -117.321140622739}] },
      { latlng: [{latitude: 34.1829530369186, longitude: -117.321140622739}, {latitude: 34.1831321828447, longitude: -117.321555493472}] },
      { latlng: [{latitude: 34.1819303950691, longitude: -117.319246416092}, {latitude: 34.1822533361590, longitude: -117.319926935278}] },
      { latlng: [{latitude: 34.1822533361590, longitude: -117.319926935278}, {latitude: 34.1822154379119, longitude: -117.319954811968}] },
      { latlng: [{latitude: 34.1822154379119, longitude: -117.319954811968}, {latitude: 34.1823403240175, longitude: -117.320176185679}] },
      { latlng: [{latitude: 34.1823403240175, longitude: -117.320176185679}, {latitude: 34.1816322945044, longitude: -117.320663207844}] },
      { latlng: [{latitude: 34.1831321800000, longitude: -117.321555493472}, {latitude: 34.1827985596190, longitude: -117.321514504868}] },
      { latlng: [{latitude: 34.1827985596190, longitude: -117.321514504868}, {latitude: 34.1827633746735, longitude: -117.321440713631}] },
      { latlng: [{latitude: 34.1827985596190, longitude: -117.321514504868}, {latitude: 34.1825789714057, longitude: -117.321501386426}] },
      { latlng: [{latitude: 34.1825789714057, longitude: -117.321501386426}, {latitude: 34.1824651074853, longitude: -117.321949053264}] },
      { latlng: [{latitude: 34.1824651074853, longitude: -117.321949053264}, {latitude: 34.1822508597667, longitude: -117.321908058132}] },
      { latlng: [{latitude: 34.1824651074853, longitude: -117.321949053264}, {latitude: 34.1824435725195, longitude: -117.322214701717}] },
      { latlng: [{latitude: 34.1824435725195, longitude: -117.322214701717}, {latitude: 34.1827258157874, longitude: -117.322750918040}] },
      { latlng: [{latitude: 34.1827258157874, longitude: -117.322750918040}, {latitude: 34.1834394317576, longitude: -117.322221260938}] },
      { latlng: [{latitude: 34.1834394317576, longitude: -117.322221260938}, {latitude: 34.1834856381200, longitude: -117.322308170617}] },
      { latlng: [{latitude: 34.1834856381200, longitude: -117.322308170617}, {latitude: 34.1839686414612, longitude: -117.321949053264}] },
      { latlng: [{latitude: 34.1839686414612, longitude: -117.321949053264}, {latitude: 34.1838059450153, longitude: -117.321550580584}] },
      { latlng: [{latitude: 34.1838059450153, longitude: -117.321550580584}, {latitude: 34.1837490562935, longitude: -117.321598134936}] },
      { latlng: [{latitude: 34.1838059450153, longitude: -117.321550580584}, {latitude: 34.1836297678952, longitude: -117.321140629267}] },
      { latlng: [{latitude: 34.1831321800000, longitude: -117.321555493472}, {latitude: 34.1836297678952, longitude: -117.321140629267}] },
      { latlng: [{latitude: 34.1836297678952, longitude: -117.321140629267}, {latitude: 34.1849065773859, longitude: -117.320055078180}] },
      { latlng: [{latitude: 34.1834360462296, longitude: -117.318584639752}, {latitude: 34.1842470491104, longitude: -117.319438005601}] },
      { latlng: [{latitude: 34.1842470491104, longitude: -117.319438005601}, {latitude: 34.1849065773859, longitude: -117.320055078180}] },
      { latlng: [{latitude: 34.1812079466939, longitude: -117.319799450621}, {latitude: 34.1790704951081, longitude: -117.319371722381}] },
      { latlng: [{latitude: 34.1808286593154, longitude: -117.320397858995}, {latitude: 34.1806758349195, longitude: -117.321277101236}] },
      { latlng: [{latitude: 34.1798820188375, longitude: -117.323188712290}, {latitude: 34.1787105531865, longitude: -117.323175301245}] },
      //{ latlng: [{latitude: , longitude: }, {latitude: , longitude: }] },
      //{ latlng: [{latitude: , longitude: }, {latitude: , longitude: }] },
      //{ latlng: [{latitude: , longitude: }, {latitude: , longitude: }] },
      //{ latlng: [{latitude: , longitude: }, {latitude: , longitude: }] },
      //{ latlng: [{latitude: , longitude: }, {latitude: , longitude: }] },
      //{ latlng: [{latitude: , longitude: }, {latitude: , longitude: }] },
      //{ latlng: [{latitude: , longitude: }, {latitude: , longitude: }] },
      //{ latlng: [{latitude: , longitude: }, {latitude: , longitude: }] },
    ],
    hydrants: [ 
      {latlng: {latitude: 34.18686617, longitude: -117.3285637}, desc:'latitude: 34.18686617, longitude: -117.3285637'},
      {latlng: {latitude: 34.18643578, longitude: -117.3295767}, desc:'latitude: 34.18643578, longitude: -117.3295767'},
      {latlng: {latitude: 34.18615812, longitude: -117.3302469}, desc:'latitude: 34.18615812, longitude: -117.3302469'},
      {latlng: {latitude: 34.18432277, longitude: -117.3300138}, desc:'latitude: 34.18432277, longitude: -117.3300138'},
      {latlng: {latitude: 34.18685784, longitude: -117.3263629}, desc:'latitude: 34.18685784, longitude: -117.3263629'},
      {latlng: {latitude: 34.18746009, longitude: -117.3255846}, desc:'latitude: 34.18746009, longitude: -117.3255846'},
      {latlng: {latitude: 34.18676924, longitude: -117.3248209}, desc:'latitude: 34.18676924, longitude: -117.3248209'},
      {latlng: {latitude: 34.18610736, longitude: -117.3258533}, desc:'latitude: 34.18610736, longitude: -117.3258533'},
      {latlng: {latitude: 34.18636594, longitude: -117.3241667}, desc:'latitude: 34.18636594, longitude: -117.3241667'},
      {latlng: {latitude: 34.18291630, longitude: -117.3297051}, desc:'latitude: 34.18291630, longitude: -117.3297051'},
      {latlng: {latitude: 34.18469136, longitude: -117.3268660}, desc:'latitude: 34.18469136, longitude: -117.3268660'},
      {latlng: {latitude: 34.18431346, longitude: -117.3261447}, desc:'latitude: 34.18431346, longitude: -117.3261447'},
      {latlng: {latitude: 34.18411374, longitude: -117.3257477}, desc:'latitude: 34.18411374, longitude: -117.3257477'},
      {latlng: {latitude: 34.18380963, longitude: -117.3268148}, desc:'latitude: 34.18380963, longitude: -117.3268148'},
      {latlng: {latitude: 34.18412105, longitude: -117.3274686}, desc:'latitude: 34.18412105, longitude: -117.3274686'},
      {latlng: {latitude: 34.18289903, longitude: -117.3276024}, desc:'latitude: 34.18289903, longitude: -117.3276024'},
      {latlng: {latitude: 34.18325905, longitude: -117.3265918}, desc:'latitude: 34.18325905, longitude: -117.3265918'},
      {latlng: {latitude: 34.18248339, longitude: -117.3261904}, desc:'latitude: 34.18248339, longitude: -117.3261904'},
      {latlng: {latitude: 34.18157571, longitude: -117.3259779}, desc:'latitude: 34.18157571, longitude: -117.3259779'},
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