import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


const AddCategory = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainView}>
           <View style={styles.progressView}>
            <Image source={require('../../assets/progress.png')} style={styles.progress} />
            </View>
            <View style={styles.insideView}>   
                <Text style={styles.addText}>Add Business Category</Text>
                <View style={styles.searchView}>
                    {/* <Image source={require('../../assets/searchIcon.png')}
            style={styles.searchIcon} /> */}
                    <TextInput style={styles.searchBar}
                        placeholder='Search business category'>
                    </TextInput>
                </View>
                <Text style={styles.selectedText}>Selected Category</Text>
                <View style={styles.selectedBox}>
                    <Text style={styles.boxText}>Doctors</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/closeIcon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.contButton}>
                <TouchableOpacity style={styles.buttonView}
                    onPress={() => navigation.navigate('AddTiming')}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddCategory

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    addText: {
        fontSize: 20,
        fontWeight: '600',
    },
    insideView: {
        padding: 25,
        marginTop: -10
    },
    searchView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBar: {
        borderWidth: 1,
        borderColor: 'rgb(207,210,241)',
        borderRadius: 25,
        height: 50,
        width: 355,
        margin: 20,
        padding: 10,
    },
    selectedText: {
        fontSize: 17,
        fontWeight: '500',
        color: 'rgb(54,55,149)'
    },
    selectedBox: {
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 100,
        borderColor: 'rgb(54,55,149)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
    contButton: {
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    boxText: {
        color: 'rgb(54,55,149)',
        fontWeight: '500'
    },
    progress: {
        marginVertical: 20
    },
    progressView: {
        alignItems: 'center',
        marginTop: 20
    }
})
