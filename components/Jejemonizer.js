import { useState, useRef } from 'react'
import { Pressable, StyleSheet, Text, TextInput } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard'
import dictionary from '../utils/dictionary'

const Jejemonizer = () => {

    const [jejemonText, setJejemonText] = useState('')
    const inputRef = useRef();

    const jejemonize = (input) => {
        let jejemonized =
            [...input.toLowerCase()].map((character, index) => {
                if (dictionary[character]) {
                    return dictionary[character]
                }
                if (index % 2 !== 0) {
                    return character.toUpperCase();
                }
                return character;
            }).join('')
        setJejemonText(jejemonized)
    }

    const copyToClipboard = () => {
        if (jejemonText.length === 0) {
            return
        }
        Clipboard.setString(jejemonText)
    }

    const resetJejemonizer = () => {
        inputRef.current.clear();
        setJejemonText('')
    }

    return (
        <>
            <TextInput
                ref={inputRef}
                autoFocus
                placeholder='Enter text to Jejemonize'
                style={styles.inputStyle}
                onChangeText={(input) => jejemonize(input)}
            />

            <Text style={styles.resultLabel}>Result</Text>
            <TextInput
                style={styles.inputStyle}
                multiline
                numberOfLines={4}
                placeholder={jejemonText}
                placeholderTextColor='#000000'
                editable={false}
                textAlignVertical='top'
            />

            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.clipboardButton]}
                onPress={copyToClipboard}
            >
                <Text style={styles.clipboardButtonLabel}>
                    Copy Result to Clipboard
                </Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.resetButton]}
                onPress={resetJejemonizer}
            >
                <Text style={styles.resetButtonLabel}>
                    Reset Jejemonizer
                </Text>
            </Pressable>

        </>
    )
}

export default Jejemonizer

const styles = StyleSheet.create({

    inputStyle: {
        backgroundColor: '#f5f5f5',
        borderWidth: .5,
        borderColor: '#d3d3d3',
        borderRadius: 10,
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15,
        fontSize: 16,
        marginVertical: 10
    },

    resultLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
    },

    clipboardButton: {
        backgroundColor: '#FF3E00',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10
    },

    clipboardButtonLabel: {
        color: '#FFFFFF',
        fontSize: 16,
    },

    resetButton: {
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    resetButtonLabel: {
        color: '#FF3E00',
        fontSize: 16,
    },

})