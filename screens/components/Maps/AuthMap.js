import MapView, { Marker, Polyline, UrlTile} from 'react-native-maps';
import * as React from 'react';
import { useState } from 'react';
import { maps, styles } from '../../../styles';
import { View } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

export const AuthMap = () => {
  const [ search, setSearch ] = useState('');

  state = {
    polylines: [
      { latlng: [{latitude: 34.1872575300000, longitude: -117.327926600000}, {latitude: 34.1870104300000, longitude: -117.327936500000}] },
      { latlng: [{latitude: 34.1870104300000, longitude: -117.327936500000}, {latitude: 34.1867880658777, longitude: -117.328550709639}, {latitude: 34.1865597225508, longitude: -117.329118577078}, {latitude: 34.1864002295336, longitude: -117.329575270922}, {latitude: 34.1861980000000, longitude: -117.330062200000}] },
      { latlng: [{latitude: 34.1867880658777, longitude: -117.328550709639}, {latitude: 34.1870591490249, longitude: -117.328753669741}] },
      { latlng: [{latitude: 34.1864002295336, longitude: -117.329575270922}, {latitude: 34.1865744218195, longitude: -117.329689444384}] },
      { latlng: [{latitude: 34.1865597225508, longitude: -117.329118577078}, {latitude: 34.1861605657776, longitude: -117.328857557880}] },
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
      { latlng: [{latitude: 34.1786809403631, longitude: -117.322722069942}, {latitude: 34.1784236441854, longitude: -117.322611428821}] },
      { latlng: [{latitude: 34.1798820188375, longitude: -117.323188712290}, {latitude: 34.1788198335134, longitude: -117.323156587803}, {latitude: 34.1786905592133, longitude: -117.322877085987}, {latitude: 34.1786809403631, longitude: -117.322722069942}, {latitude: 34.1787192001441, longitude: -117.322549067461}, {latitude: 34.17851280168180, longitude: -117.322200715565}, {latitude: 34.1780202966893, longitude: -117.321318444288}] },
      { latlng: [{latitude: 34.1785128016818, longitude: -117.322200715560}, {latitude: 34.1782432209060, longitude: -117.322439132382}] },
      { latlng: [{latitude: 34.1784236441854, longitude: -117.322611428821}, {latitude: 34.1785990120197, longitude: -117.322451837384}, {latitude: 34.1783041909284, longitude: -117.321885588626}, {latitude: 34.1780679757983, longitude: -117.322058316039}, {latitude: 34.1780898572699, longitude: -117.322092263732}] },
      { latlng: [{latitude: 34.1784236441854, longitude: -117.322611428821}, {latitude: 34.1785938633252, longitude: -117.322465583705}, {latitude: 34.1782998277858, longitude: -117.321844860196}, {latitude: 34.1775832536445, longitude: -117.322393103460}, {latitude: 34.1776523741856, longitude: -117.322921201302}, {latitude: 34.1777762553150, longitude: -117.322934151931}] },
      { latlng: [{latitude: 34.1784236441854, longitude: -117.322611428821}, {latitude: 34.1784918428310, longitude: -117.322532974207}, {latitude: 34.1784791010953, longitude: -117.322493076348}] },
      { latlng: [{latitude: 34.1784236441854, longitude: -117.322611428821}, {latitude: 34.1780079400000, longitude: -117.322942700000}] },
      { latlng: [{latitude: 34.1780079400000, longitude: -117.322942700000}, {latitude: 34.1779399245537, longitude: -117.322789460444}] },
      { latlng: [{latitude: 34.1781462544706, longitude: -117.321544993811}, {latitude: 34.1783653701373, longitude: -117.321365123974}, {latitude: 34.1783431284835, longitude: -117.321294977167}] },
      { latlng: [{latitude: 34.1783431284835, longitude: -117.321294977167}, {latitude: 34.1783101098955, longitude: -117.321227222145}, {latitude: 34.1782917860261, longitude: -117.321242812485}] },
      { latlng: [{latitude: 34.1783431284835, longitude: -117.321294977167}, {latitude: 34.1785594823755, longitude: -117.321113341326}, {latitude: 34.1786109724543, longitude: -117.321058625771}] },
      { latlng: [{latitude: 34.1785594823755, longitude: -117.321113341326}, {latitude: 34.1786253320951, longitude: -117.321232739774}, {latitude: 34.1786301682430, longitude: -117.321297492915}] },
      { latlng: [{latitude: 34.1782040653486, longitude: -117.321583845696}, {latitude: 34.1787398371226, longitude: -117.321176620384}] },
      { latlng: [{latitude: 34.1787398371226, longitude: -117.321176620384}, {latitude: 34.1789885856225, longitude: -117.321595197593}, {latitude: 34.1788589676283, longitude: -117.321697536955}, {latitude: 34.1788391840625, longitude: -117.321654204072}] },
      { latlng: [{latitude: 34.1787398371226, longitude: -117.321176620384}, {latitude: 34.1788070059638, longitude: -117.321053997545}, {latitude: 34.1798820514811, longitude: -117.321566774443}, {latitude: 34.1798437814874, longitude: -117.321685107573}, {latitude: 34.1805003674049, longitude: -117.321859126882}] },
      { latlng: [{latitude: 34.1799059048781, longitude: -117.323058173587}, {latitude: 34.1802435161131, longitude: -117.323170072343}] },
      { latlng: [{latitude: 34.1801135007187, longitude: -117.322617375640}, {latitude: 34.1803474084159, longitude: -117.322933406083}] },
      { latlng: [{latitude: 34.1803474084159, longitude: -117.322933406083}, {latitude: 34.1804319857734, longitude: -117.323070301273}] },
      { latlng: [{latitude: 34.1803474084159, longitude: -117.322933406083}, {latitude: 34.1804790363760, longitude: -117.322755183667}, {latitude: 34.1807779433047, longitude: -117.3228885930251}, {latitude: 34.1809649158880, longitude: -117.323312380323}] },
      { latlng: [{latitude: 34.1809649158880, longitude: -117.323312380323}, {latitude: 34.1801779259533, longitude: -117.323885189912}, {latitude: 34.1802926982610, longitude: -117.324120184345}] },
      { latlng: [{latitude: 34.1809649158880, longitude: -117.323312380323}, {latitude: 34.1810154307234, longitude: -117.323377086886}, {latitude: 34.1813399759972, longitude: -117.323133618392}, {latitude: 34.1815235408758, longitude: -117.322981745291}] },
      { latlng: [{latitude: 34.1813399759972, longitude: -117.323133618392}, {latitude: 34.1813130500800, longitude: -117.323046016227}, {latitude: 34.1815571063806, longitude: -117.322816726013}, {latitude: 34.1815180337000, longitude: -117.322659499522}] },
      { latlng: [{latitude: 34.1815235408758, longitude: -117.322981745291}, {latitude: 34.1817616463348, longitude: -117.323483957294}, {latitude: 34.1819099062416, longitude: -117.323924314888}, {latitude: 34.1815522331358, longitude: -117.324320162499}, {latitude: 34.1810502980903, longitude: -117.324304468101}] },
      { latlng: [{latitude: 34.1806554020442, longitude: -117.321274913018}, {latitude: 34.1808130139801, longitude: -117.321193105643}, {latitude: 34.1808820774544, longitude: -117.321265525287}, {latitude: 34.1809332509562, longitude: -117.321246749824}] },
      { latlng: [{latitude: 34.1806714891536, longitude: -117.321215904420}, {latitude: 34.1808381153699, longitude: -117.321158236926}, {latitude: 34.1813485317895, longitude: -117.322098351186}, {latitude: 34.1814839535327, longitude: -117.321957535212}, {latitude: 34.1814596150788, longitude: -117.321870363419}] },
      { latlng: [{latitude: 34.1806554020442, longitude: -117.321274913018}, {latitude: 34.1804767488753, longitude: -117.321914117944}, {latitude: 34.1802347581098, longitude: -117.322433550083}, {latitude: 34.1802347581098, longitude: -117.322433550083}, {latitude: 34.1801135007187, longitude: -117.322617375640}, {latitude: 34.1800016496298, longitude: -117.322783864782}, {latitude: 34.1799496269009, longitude: -117.322919150284}, {latitude: 34.1799059048781, longitude: -117.323058173587}, {latitude: 34.1798795779777, longitude: -117.323179814345}] },
      { latlng: [{latitude: 34.1798795779777, longitude: -117.323179814345}, {latitude: 34.1798885303675, longitude: -117.323497916198}, {latitude: 34.1799255042724, longitude: -117.323802668761}, {latitude: 34.1799710003516, longitude: -117.324061064597}, {latitude: 34.1801046044439, longitude: -117.324681113326}, {latitude: 34.1805116542649, longitude: -117.325734280670}] },
      { latlng: [{latitude: 34.1805116542649, longitude: -117.325734280670}, {latitude: 34.1809732408032, longitude: -117.326472407673}, {latitude: 34.1815933772286, longitude: -117.327163294777}, {latitude: 34.1825406781554, longitude: -117.327834764595}, {latitude: 34.1830914290880, longitude: -117.328073586584}] },
      { latlng: [{latitude: 34.1849065773859, longitude: -117.320055078180}, {latitude: 34.1852473377398, longitude: -117.320666339157}, {latitude: 34.1855632578404, longitude: -117.321689397003}, {latitude: 34.1858614347651, longitude: -117.322691007095}, {latitude: 34.1862589653961, longitude: -117.323868488767}, {latitude: 34.1864167526994, longitude: -117.324207627292}] },
      { latlng: [{latitude: 34.1864167526994, longitude: -117.324207627292}, {latitude: 34.1869313764742, longitude: -117.325050524007}, {latitude: 34.1875404913909, longitude: -117.325602592277}, {latitude: 34.1876080204868, longitude: -117.325681948965}] },
    ],
    hydrants: [ 
      {latlng: {latitude: 34.18686617, longitude: -117.3285637}, desc:'latitude: 34.18686617,\nlongitude: -117.3285637\nStatus: Good'},
      {latlng: {latitude: 34.18643578, longitude: -117.3295767}, desc:'latitude: 34.18643578,\nlongitude: -117.3295767\nStatus: Good'},
      {latlng: {latitude: 34.18615812, longitude: -117.3302469}, desc:'latitude: 34.18615812,\nlongitude: -117.3302469\nStatus: Good'},
      {latlng: {latitude: 34.18432277, longitude: -117.3300138}, desc:'latitude: 34.18432277,\nlongitude: -117.3300138\nStatus: Good'},
      {latlng: {latitude: 34.18685784, longitude: -117.3263629}, desc:'latitude: 34.18685784,\nlongitude: -117.3263629\nStatus: Good'},
      {latlng: {latitude: 34.18746009, longitude: -117.3255846}, desc:'latitude: 34.18746009,\nlongitude: -117.3255846\nStatus: Good'},
      {latlng: {latitude: 34.18676924, longitude: -117.3248209}, desc:'latitude: 34.18676924,\nlongitude: -117.3248209\nStatus: Good'},
      {latlng: {latitude: 34.18610736, longitude: -117.3258533}, desc:'latitude: 34.18610736,\nlongitude: -117.3258533\nStatus: Good'},
      {latlng: {latitude: 34.18636594, longitude: -117.3241667}, desc:'latitude: 34.18636594,\nlongitude: -117.3241667\nStatus: Good'},
      {latlng: {latitude: 34.18291630, longitude: -117.3297051}, desc:'latitude: 34.18291630,\nlongitude: -117.3297051\nStatus: Good'},
      {latlng: {latitude: 34.18469136, longitude: -117.3268660}, desc:'latitude: 34.18469136,\nlongitude: -117.3268660\nStatus: Good'},
      {latlng: {latitude: 34.18431346, longitude: -117.3261447}, desc:'latitude: 34.18431346,\nlongitude: -117.3261447\nStatus: Good'},
      {latlng: {latitude: 34.18411374, longitude: -117.3257477}, desc:'latitude: 34.18411374,\nlongitude: -117.3257477\nStatus: Good'},
      {latlng: {latitude: 34.18380963, longitude: -117.3268148}, desc:'latitude: 34.18380963,\nlongitude: -117.3268148\nStatus: Good'},
      {latlng: {latitude: 34.18412105, longitude: -117.3274686}, desc:'latitude: 34.18412105,\nlongitude: -117.3274686\nStatus: Good'},
      {latlng: {latitude: 34.18289903, longitude: -117.3276024}, desc:'latitude: 34.18289903,\nlongitude: -117.3276024\nStatus: Good'},
      {latlng: {latitude: 34.18325905, longitude: -117.3265918}, desc:'latitude: 34.18325905,\nlongitude: -117.3265918\nStatus: Good'},
      {latlng: {latitude: 34.18248339, longitude: -117.3261904}, desc:'latitude: 34.18248339,\nlongitude: -117.3261904\nStatus: Good'},
      {latlng: {latitude: 34.18157571, longitude: -117.3259779}, desc:'latitude: 34.18157571,\nlongitude: -117.3259779\nStatus: Good'},
      {latlng: {latitude: 34.18563749, longitude: -117.3247277}, desc:'latitude: 34.18563749,\nlongitude: -117.3247277\nStatus: Good'},
      {latlng: {latitude: 34.18419235, longitude: -117.3234887}, desc:'latitude: 34.18419235,\nlongitude: -117.3234887\nStatus: Good'},
      {latlng: {latitude: 34.18406006, longitude: -117.3247243}, desc:'latitude: 34.18406006,\nlongitude: -117.3247243\nStatus: Good'},
      {latlng: {latitude: 34.18243248, longitude: -117.3234954}, desc:'latitude: 34.18243248,\nlongitude: -117.3234954\nStatus: Good'},
      {latlng: {latitude: 34.18169844, longitude: -117.3234345}, desc:'latitude: 34.18169844,\nlongitude: -117.3234345\nStatus: Good'},
      {latlng: {latitude: 34.18132502, longitude: -117.3239608}, desc:'latitude: 34.18132502,\nlongitude: -117.3239608\nStatus: Good'},
      {latlng: {latitude: 34.18103381, longitude: -117.3242954}, desc:'latitude: 34.18103381,\nlongitude: -117.3242954\nStatus: Good'},
      {latlng: {latitude: 34.18087897, longitude: -117.3233436}, desc:'latitude: 34.18087897,\nlongitude: -117.3233436\nStatus: Good'},
      {latlng: {latitude: 34.18022681, longitude: -117.3224826}, desc:'latitude: 34.18022681,\nlongitude: -117.3224826\nStatus: Good'},
      {latlng: {latitude: 34.17985245, longitude: -117.3216963}, desc:'latitude: 34.17985245,\nlongitude: -117.3216963\nStatus: Good'},
      {latlng: {latitude: 34.17941236, longitude: -117.3224117}, desc:'latitude: 34.17941236,\nlongitude: -117.3224117\nStatus: Good'},
      {latlng: {latitude: 34.17893876, longitude: -117.3222319}, desc:'latitude: 34.17893876,\nlongitude: -117.3222319\nStatus: Good'},
      {latlng: {latitude: 34.17855948, longitude: -117.3211133}, desc:'latitude: 34.17855948,\nlongitude: -117.3211133\nStatus: Good'},
      {latlng: {latitude: 34.17845112, longitude: -117.3226564}, desc:'latitude: 34.17845112,\nlongitude: -117.3226564\nStatus: Good'},
      {latlng: {latitude: 34.17856251, longitude: -117.3231128}, desc:'latitude: 34.17856251,\nlongitude: -117.3231128\nStatus: Good'},
      {latlng: {latitude: 34.17800794, longitude: -117.3229427}, desc:'latitude: 34.17800794,\nlongitude: -117.3229427\nStatus: Good'},
      {latlng: {latitude: 34.17820031, longitude: -117.3224497}, desc:'latitude: 34.17820031,\nlongitude: -117.3224497\nStatus: Good'},
      {latlng: {latitude: 34.17763562, longitude: -117.3222919}, desc:'latitude: 34.17763562,\nlongitude: -117.3222919\nStatus: Good'},
      {latlng: {latitude: 34.17767414, longitude: -117.3212410}, desc:'latitude: 34.17767414,\nlongitude: -117.3212410\nStatus: Good'},
      {latlng: {latitude: 34.18365703, longitude: -117.3223721}, desc:'latitude: 34.18365703,\nlongitude: -117.3223721\nStatus: Good'},
      {latlng: {latitude: 34.18317789, longitude: -117.3214020}, desc:'latitude: 34.18317789,\nlongitude: -117.3214020\nStatus: Good'},
      {latlng: {latitude: 34.18265049, longitude: -117.3215323}, desc:'latitude: 34.18265049,\nlongitude: -117.3215323\nStatus: Good'},
      {latlng: {latitude: 34.18208771, longitude: -117.3219425}, desc:'latitude: 34.18208771,\nlongitude: -117.3219425\nStatus: Good'},
      {latlng: {latitude: 34.18458266, longitude: -117.3204325}, desc:'latitude: 34.18458266,\nlongitude: -117.3204325\nStatus: Good'},
      {latlng: {latitude: 34.18232498, longitude: -117.3189607}, desc:'latitude: 34.18232498,\nlongitude: -117.3189607\nStatus: Good'},
      {latlng: {latitude: 34.18192512, longitude: -117.3192667}, desc:'latitude: 34.18192512,\nlongitude: -117.3192667\nStatus: Good'},
      {latlng: {latitude: 34.18094485, longitude: -117.3200776}, desc:'latitude: 34.18094485,\nlongitude: -117.3200776\nStatus: Good'},
      {latlng: {latitude: 34.18091934, longitude: -117.3187368}, desc:'latitude: 34.18091934,\nlongitude: -117.3187368\nStatus: Good'},
      {latlng: {latitude: 34.18092708, longitude: -117.3183117}, desc:'latitude: 34.18092708,\nlongitude: -117.3183117\nStatus: Good'},
    ],
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
              >
              </Polyline>
            ))}
            <Marker
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