import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


const AddDescription = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.innerView}>
                <View style={styles.imageView}>
                    <Image source={require('../../assets/descProgress.png')} />
                </View>

                <View style={styles.textView}>
                    <Text style={styles.addText}>Write a short description about you</Text>
                </View>

                <TextInput
                style={styles.descText}
                placeholder='Write something about your profession..'
                ></TextInput>

                <View style={styles.contButton}>
                    <TouchableOpacity style={styles.buttonView}
                        onPress={() => navigation.navigate('CongratsScreen')}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddDescription

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    innerView: {
        padding: 25,
    },
    addText: {
        fontSize: 20,
        fontWeight: '600',
    },
    textView: {
        marginVertical: 30
    },

    contButton: {
        alignItems: 'center',
        marginVertical: 20
    },
    buttonView: {
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor: 'rgb(54,55,149)',
        height: 39,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: 'rgb(54,55,149)'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    surroundImage: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageStyle: {
        margin: 5
    },
    descText: {
        height: 110,
        width: 320,
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor: 'rgb(207,210,241)',
        padding: 5
    }
})
