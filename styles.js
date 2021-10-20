import {View, StyleSheet} from 'react-native';

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

const stylesTest = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    }
})

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
    bodyButton: {
        width: 100,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#0065BD',
        alignItems: 'center', 
        justifyContent: 'center',
    },
})

export { stylesTest, buttons }