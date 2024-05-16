import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

const images = [
    require('../../assets/Doc1.png'),
    require('../../assets/Doc2.png'),
    require('../../assets/Doc3.png'),
    require('../../assets/Doc4.png'),
    require('../../assets/Doc5.png'),
]
const AddPhotos = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.innerView}>
                <View style={styles.imageView}>
                    <Image source={require('../../assets/photosProgress.png')} />
                </View>

                <View style={styles.textView}>
                    <Text style={styles.addText}>Add photo & video</Text>
                </View>

                <View style={styles.surroundImage}>
                    {
                        images.map((img) => (
                          <Image source={img} style={styles.imageStyle}/>
                        ))
                    }
                </View>

                

               

                <View style={styles.contButton}>
                    <TouchableOpacity style={styles.buttonView}
                        onPress={() => navigation.navigate('AddDescription')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddPhotos

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
    }
})
