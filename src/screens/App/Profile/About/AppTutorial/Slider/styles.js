import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth,
        maxHeight: 700,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        left: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: deviceWidth,
        paddingHorizontal: 80,
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 22,
        fontWeight: '700',
        paddingTop: 30,
        textAlign: 'center'
    },
    text: {
        paddingTop: 20,
        fontSize: 16,
        paddingBottom: 80,
        textAlign: 'center',
        color: '#999'
    },
    barWrap: {
        width: 50,
        position: 'absolute',
        zIndex: 2,
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bar: {
        height: 8,
        width: 8,
        borderRadius: 4,
    },
});
