import { StyleSheet, Text, View } from 'react-native'

const Brand = () => {

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>J3j3m0n!z3r</Text>
            <Text style={styles.subtitle}>The Jejemon Generator for Mobile</Text>
        </View>
    )
}

export default Brand

const styles = StyleSheet.create({

    wrapper: {
        marginVertical: 30,
        alignItems: 'center'
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FF3E00'
    },

    subtitle: {
        fontSize: 16,
        color: '#808080'
    }

})