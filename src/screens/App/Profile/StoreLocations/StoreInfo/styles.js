import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
    headerContainer: {
        paddingLeft: 20,
        height: 200,
        overflow: "hidden"
    },
    container: {
        padding: 20,
        paddingBottom: 0
    },
    image: {
        backgroundColor: "#bbb",
        position: 'absolute',
        top: 0,
        left: 0,
        width: deviceWidth,
        height: 300,
        zIndex: -1
    },
    link: {
        marginTop: 40,
        textDecorationStyle: 'solid',
        textDecorationColor: '#000',
        textDecorationLine: 'underline',
        fontSize: 18
    },
    text: {
        marginTop: 20,
        fontSize: 18
    }
});
