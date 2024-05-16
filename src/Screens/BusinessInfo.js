import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


const BusinessInfo = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.imageView}>
                <Image source={require('../../assets/registerImage.png')}
                    style={styles.imageStyle} />
                <Text style={styles.imageText}>Register your Business</Text>
            </View>

            <View style={styles.allBoxes}>
                <TextInput style={styles.inputBox}
                    placeholder='Name'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder='Email-id'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder='Phone no.'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder='Business name'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder='Pincode'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder='Area/street/village'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder='Flat/House no.'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder='City'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TextInput style={styles.inputBox}
                    placeholder='State'
                    placeholderTextColor={'rgb(136,136,136)'}></TextInput>
                <TouchableOpacity style={styles.buttonView}
                onPress={() => navigation.navigate('AddCategory')}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default BusinessInfo

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headText: {
        fontSize: 20,
        fontWeight: '500',
        padding: 20
    },
    headIcon: {
        padding: 20
    },
    imageStyle: {

    },
    imageView: {
        alignItems: 'center',
        padding: 10,
    },
    imageText: {
        fontSize: 15,
        fontWeight: '600'
    },
    allBoxes: {
        alignItems: 'center',
    },
    inputBox: {
        borderWidth: 1,
        borderColor: 'rgb(207,210,241)',
        borderRadius: 12,
        height: 39,
        width: 350,
        margin: 5,
        padding: 10,
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
})
