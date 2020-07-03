import { StyleSheet, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
    header: {
        padding: 20,
        paddingBottom: 0,
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
    },
    link: {
        paddingLeft: 20,
        textDecorationStyle: 'solid',
        textDecorationColor: '#000',
        textDecorationLine: 'underline',
        fontSize: 18,
    },
    linkContainer: {
        marginTop: deviceHeight*0.4+40,
    },
    mapContainer: {
        position: 'relative',
        top: 10
    }
});
