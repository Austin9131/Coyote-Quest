import MapView, { Marker, Polyline, UrlTile} from 'react-native-maps';
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
      { latlng: [{latitude: 34.1856878650894, longitude: -117.323846137288}, {latitude: 34.1855072220748, longitude: -117.323954064160}] },
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
      { latlng: [{latitude: 34.1787617938174, longitude: -117.322473295056}, {latitude: 34.1790126783278, longitude: -117.322259326867}, {latitude: 34.1796873766541, longitude: -117.322573145322}] },
      { latlng: [{latitude: 34.1796873766541, longitude: -117.322573145322}, {latitude: 34.1798605922708, longitude: -117.322881599358}, {latitude: 34.1799496269009, longitude: -117.322919150284}] },
      { latlng: [{latitude: 34.1798429101484, longitude: -117.323025097540}, {latitude: 34.1796188669365, longitude: -117.323155184677}, {latitude: 34.1795723385440, longitude: -117.323100199392}, {latitude: 34.1795036207072, longitude: -117.323168595722}, {latitude: 34.1793705534151, longitude: -117.323159207991}, {latitude: 34.1792019827192, longitude: -117.322857459476}] },
      { latlng: [{latitude: 34.1792019827192, longitude: -117.322857459476}, {latitude: 34.1791665488526, longitude: -117.322762241056}, {latitude: 34.1792686898798, longitude: -117.322644223860}, {latitude: 34.1791073494410, longitude: -117.322369210059}, {latitude: 34.1790126783278, longitude: -117.322259326867}] },
      { latlng: [{latitude: 34.1791073494410, longitude: -117.322369210059}, {latitude: 34.1792386853487, longitude: -117.322068955343}] },
      { latlng: [{latitude: 34.1792386853487, longitude: -117.322068955343}, {latitude: 34.1793443249523, longitude: -117.322217357099}, {latitude: 34.1795470384157, longitude: -117.322224259507}, {latitude: 34.1795314904859, longitude: -117.322157345533}, {latitude: 34.1796983594160, longitude: -117.321765249424}, {latitude: 34.1795927202557, longitude: -117.321703127759}] },
      { latlng: [{latitude: 34.1792386853487, longitude: -117.322068955343}, {latitude: 34.1791473212606, longitude: -117.321872236736}, {latitude: 34.1792072789546, longitude: -117.321861883126}, {latitude: 34.1792358302225, longitude: -117.321920553587}] },
      { latlng: [{latitude: 34.1795314904859, longitude: -117.322157345533}, {latitude: 34.1800303526436, longitude: -117.322331747135}, {latitude: 34.1802700010626, longitude: -117.322148477655}, {latitude: 34.1802577741189, longitude: -117.322080490590}, {latitude: 34.1801990847646, longitude: -117.322092314427}] },
      { latlng: [{latitude: 34.1787162704198, longitude: -117.322701282823}, {latitude: 34.1784236441854, longitude: -117.322611428821}] },
      { latlng: [{latitude: 34.1798820188375, longitude: -117.323188712290}, {latitude: 34.1788198335134, longitude: -117.323156587803}, {latitude: 34.1786905592133, longitude: -117.322877085987}, {latitude: 34.1787162704198, longitude: -117.322701282823}, {latitude: 34.1787162704198, longitude: -117.322701282823}, {latitude: 34.17851280168180, longitude: -117.322200715565}, {latitude: 34.1780202966893, longitude: -117.321318444288}] },
      { latlng: [{latitude: 34.1785128016818, longitude: -117.322200715560}, {latitude: 34.1782432209060, longitude: -117.322439132382}] },
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
      {latlng: {latitude: 34.18686617, longitude: -117.3285637}, desc:'latitude: 34.18686617,\nlongitude: -117.3285637'},
      {latlng: {latitude: 34.18643578, longitude: -117.3295767}, desc:'latitude: 34.18643578,\nlongitude: -117.3295767'},
      {latlng: {latitude: 34.18615812, longitude: -117.3302469}, desc:'latitude: 34.18615812,\nlongitude: -117.3302469'},
      {latlng: {latitude: 34.18432277, longitude: -117.3300138}, desc:'latitude: 34.18432277,\nlongitude: -117.3300138'},
      {latlng: {latitude: 34.18685784, longitude: -117.3263629}, desc:'latitude: 34.18685784,\nlongitude: -117.3263629'},
      {latlng: {latitude: 34.18746009, longitude: -117.3255846}, desc:'latitude: 34.18746009,\nlongitude: -117.3255846'},
      {latlng: {latitude: 34.18676924, longitude: -117.3248209}, desc:'latitude: 34.18676924,\nlongitude: -117.3248209'},
      {latlng: {latitude: 34.18610736, longitude: -117.3258533}, desc:'latitude: 34.18610736,\nlongitude: -117.3258533'},
      {latlng: {latitude: 34.18636594, longitude: -117.3241667}, desc:'latitude: 34.18636594,\nlongitude: -117.3241667'},
      {latlng: {latitude: 34.18291630, longitude: -117.3297051}, desc:'latitude: 34.18291630,\nlongitude: -117.3297051'},
      {latlng: {latitude: 34.18469136, longitude: -117.3268660}, desc:'latitude: 34.18469136,\nlongitude: -117.3268660'},
      {latlng: {latitude: 34.18431346, longitude: -117.3261447}, desc:'latitude: 34.18431346,\nlongitude: -117.3261447'},
      {latlng: {latitude: 34.18411374, longitude: -117.3257477}, desc:'latitude: 34.18411374,\nlongitude: -117.3257477'},
      {latlng: {latitude: 34.18380963, longitude: -117.3268148}, desc:'latitude: 34.18380963,\nlongitude: -117.3268148'},
      {latlng: {latitude: 34.18412105, longitude: -117.3274686}, desc:'latitude: 34.18412105,\nlongitude: -117.3274686'},
      {latlng: {latitude: 34.18289903, longitude: -117.3276024}, desc:'latitude: 34.18289903,\nlongitude: -117.3276024'},
      {latlng: {latitude: 34.18325905, longitude: -117.3265918}, desc:'latitude: 34.18325905,\nlongitude: -117.3265918'},
      {latlng: {latitude: 34.18248339, longitude: -117.3261904}, desc:'latitude: 34.18248339,\nlongitude: -117.3261904'},
      {latlng: {latitude: 34.18157571, longitude: -117.3259779}, desc:'latitude: 34.18157571,\nlongitude: -117.3259779'},
      {latlng: {latitude: 34.18563749, longitude: -117.3247277}, desc:'latitude: 34.18563749,\nlongitude: -117.3247277'},
      {latlng: {latitude: 34.18419235, longitude: -117.3234887}, desc:'latitude: 34.18419235,\nlongitude: -117.3234887'},
      {latlng: {latitude: 34.18406006, longitude: -117.3247243}, desc:'latitude: 34.18406006,\nlongitude: -117.3247243'},
      {latlng: {latitude: 34.18243248, longitude: -117.3234954}, desc:'latitude: 34.18243248,\nlongitude: -117.3234954'},
      {latlng: {latitude: 34.18169844, longitude: -117.3234345}, desc:'latitude: 34.18169844,\nlongitude: -117.3234345'},
      {latlng: {latitude: 34.18132502, longitude: -117.3239608}, desc:'latitude: 34.18132502,\nlongitude: -117.3239608'},
      {latlng: {latitude: 34.18103381, longitude: -117.3242954}, desc:'latitude: 34.18103381,\nlongitude: -117.3242954'},
      {latlng: {latitude: 34.18087897, longitude: -117.3233436}, desc:'latitude: 34.18087897,\nlongitude: -117.3233436'},
      {latlng: {latitude: 34.18022681, longitude: -117.3224826}, desc:'latitude: 34.18022681,\nlongitude: -117.3224826'},
      {latlng: {latitude: 34.17985245, longitude: -117.3216963}, desc:'latitude: 34.17985245,\nlongitude: -117.3216963'},
      {latlng: {latitude: 34.17941236, longitude: -117.3224117}, desc:'latitude: 34.17941236,\nlongitude: -117.3224117'},
      {latlng: {latitude: 34.17893876, longitude: -117.3222319}, desc:'latitude: 34.17893876,\nlongitude: -117.3222319'},
      {latlng: {latitude: 34.17858257, longitude: -117.3211663}, desc:'latitude: 34.17858257,\nlongitude: -117.3211663'},
      {latlng: {latitude: 34.17845112, longitude: -117.3226564}, desc:'latitude: 34.17845112,\nlongitude: -117.3226564'},
      {latlng: {latitude: 34.17856251, longitude: -117.3231128}, desc:'latitude: 34.17856251,\nlongitude: -117.3231128'},
      {latlng: {latitude: 34.17800794, longitude: -117.3229427}, desc:'latitude: 34.17800794,\nlongitude: -117.3229427'},
      {latlng: {latitude: 34.17820031, longitude: -117.3224497}, desc:'latitude: 34.17820031,\nlongitude: -117.3224497'},
      {latlng: {latitude: 34.17763562, longitude: -117.3222919}, desc:'latitude: 34.17763562,\nlongitude: -117.3222919'},
      {latlng: {latitude: 34.17767414, longitude: -117.3212410}, desc:'latitude: 34.17767414,\nlongitude: -117.3212410'},
      {latlng: {latitude: 34.18365703, longitude: -117.3223721}, desc:'latitude: 34.18365703,\nlongitude: -117.3223721'},
      {latlng: {latitude: 34.18317789, longitude: -117.3214020}, desc:'latitude: 34.18317789,\nlongitude: -117.3214020'},
      {latlng: {latitude: 34.18265049, longitude: -117.3215323}, desc:'latitude: 34.18265049,\nlongitude: -117.3215323'},
      {latlng: {latitude: 34.18208771, longitude: -117.3219425}, desc:'latitude: 34.18208771,\nlongitude: -117.3219425'},
      {latlng: {latitude: 34.18458266, longitude: -117.3204325}, desc:'latitude: 34.18458266,\nlongitude: -117.3204325'},
      {latlng: {latitude: 34.18232498, longitude: -117.3189607}, desc:'latitude: 34.18232498,\nlongitude: -117.3189607'},
      {latlng: {latitude: 34.18192512, longitude: -117.3192667}, desc:'latitude: 34.18192512,\nlongitude: -117.3192667'},
      {latlng: {latitude: 34.18094485, longitude: -117.3200776}, desc:'latitude: 34.18094485,\nlongitude: -117.3200776'},
      {latlng: {latitude: 34.18091934, longitude: -117.3187368}, desc:'latitude: 34.18091934,\nlongitude: -117.3187368'},
      {latlng: {latitude: 34.18092708, longitude: -117.3183117}, desc:'latitude: 34.18092708,\nlongitude: -117.3183117'},
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
            <UrlTile
              urlTemplate={'https://services3.arcgis.com/qiSp6GCVYPtO9fVw/arcgis/rest/services/CSUSB_WATER/MapServer/{z}/{x}/{y}.png'}
            />
            {this.state.hydrants.map((hydrant, index) => (
              <Marker
              key = {index}
              coordinate={hydrant.latlng}
              description={hydrant.desc}
              image={require('../../../assets/highflowrate.png')}
              />
            ))}
            {this.state.polylines.map( (polyline, index)  => (
              <Polyline
                key = { index }
                coordinates = {polyline.latlng}
                strokeColor="#0065BD"
                strokeWidth={2}
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