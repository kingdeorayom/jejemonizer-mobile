import { Linking, StyleSheet, Text, View } from 'react-native'

const Footer = () => {

    const openLink = () => Linking.openURL('https://www.github.com/kingdeorayom')

    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Developed by{" "}
                <Text style={styles.link} onPress={openLink}>serking</Text>.
            </Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 25,
        alignSelf: 'center',
    },

    text: {
        color: '#808080',
    },

    link: {
        color: '#3D79C2',
        textDecorationLine: 'underline'
    }

})