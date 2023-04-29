import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Brand from '../components/Brand'
import Jejemonizer from '../components/Jejemonizer'
import Footer from '../components/Footer'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Brand />
            <Jejemonizer />
            <Footer />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'
    }

})