import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


const CongratsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainView}>
            <Image source={require('../../assets/congrats.png')} 
                style={styles.imageStyle}
            />
        </SafeAreaView>
    )
}

export default CongratsScreen

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    imageStyle: {
        marginTop: 50
    }
})
