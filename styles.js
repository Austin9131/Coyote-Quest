import { Dimensions, StyleSheet } from 'react-native';

//colors
export const Colors = {

primary: '#ffffff',
secondary: '#E5SE7EB',
tertiary: '#1F2937',
darklight: '#9CA3AF',
brand: '#6D28D9',
green: '#10B981',
red: '#EF4444',
};

const{ primary, secondary, tertiary, darklight, brand, green, red } = Colors

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#0065BD',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
const icon = StyleSheet.create({
  backIcon: {
    flex: 1,
    height: 10,
    width: 5,
  },
  profileIcon:{
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  loginIcon: {
    height: 200,
    width: 200,
  },
});
const text = StyleSheet.create({
  mainText: {
    fontSize: 30,
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
  },
  backText: {
    flex: 2,
    height: 20,
    fontSize: 20,
    color: '#fff', 
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
const buttons = StyleSheet.create({
  back: {
    width: 120,
    height: 35,
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#0065BD',
  },
  headerButtonDouble: {
    width: 120,
    height: 35,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#0065BD',
  },
  bodyButton: {
    width: 100,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#0065BD',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
const maps = StyleSheet.create({
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export { styles, buttons, icon, text, maps }
