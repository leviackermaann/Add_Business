import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const AddTiming = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainView}>
           <View style={styles.innerView}>
           <View style={styles.imageView}>
            <Image source={require('../../assets/timeProgress.png')} />
            </View>

            <View style={styles.textView}>
            <Text style={styles.addText}>Add Business timing</Text>
            </View>
            
                <View style={styles.overBubble}>
            {
                days.map((weekDay) => (
                   <TouchableOpacity>
                    <View style={styles.bubble}>
                      <Text style={styles.bubbleText}>{weekDay}</Text>
                    </View>
                    </TouchableOpacity>
                ))
            }
                </View>
            
             <View style={styles.textView}>
                    <Text style={styles.addText}>Open your business</Text>
             </View>

             <View style={styles.selectTimeView}>
                <View style={styles.selectTimeBox}></View>
                <View style={styles.selectTimeBox}></View>
             </View>

                <View style={styles.contButton}>
                    <TouchableOpacity style={styles.buttonView}
                        onPress={() => navigation.navigate('AddPhotos')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddTiming

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    innerView: {
        padding: 25,
    },
    imageView: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    addText: {
        fontSize: 20,
        fontWeight: '600',
    },
    textView: {
        marginVertical: 30
    },
    bubble: {
        height: 50,
        width: 50,
        borderWidth: 0.5,
        borderRadius: 25,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'rgb(54,55,149)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    overBubble: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    bubbleText: {
        color: '#FFFFFF',
        fontWeight:'500'
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
    selectTimeView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectTimeBox: {
        height: 39,
        width: 160,
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor: 'rgb(207,210,241)'
    }
})
