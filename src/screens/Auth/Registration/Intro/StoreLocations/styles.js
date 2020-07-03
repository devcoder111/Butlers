import { StyleSheet, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
    },
});
